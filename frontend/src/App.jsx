import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Backend URL
const BACKEND_URL = "http://localhost:3000"; // change if hosted
const socket = io(BACKEND_URL);

function App() {
  const [userId, setUserId] = useState("");
  const [toUserId, setToUserId] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen incoming messages
    socket.on("private-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("private-message");
  }, []);

  const register = () => {
    if (!userId) return alert("Enter your User ID");
    socket.emit("register", userId);
    addLocalMessage(`✅ Registered as ${userId}`);
  };

  const sendMessage = () => {
    if (!toUserId || !message) return;
    socket.emit("private-message", { to: toUserId, message });
    addLocalMessage(`🟢 Me → ${toUserId}: ${message}`);
    setMessage("");
  };

  const addLocalMessage = (text) => {
    setMessages((prev) => [...prev, { from: "Me", message: text }]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Socket.IO 1-to-1 Chat Test</h2>

      <div>
        <input
          placeholder="Your User ID (e.g. 101)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>

      <br />

      <div>
        <input
          placeholder="Send to User ID (e.g. 202)"
          value={toUserId}
          onChange={(e) => setToUserId(e.target.value)}
        />
        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <hr />

      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.from}:</b> {m.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
