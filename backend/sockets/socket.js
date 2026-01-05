const { Server } = require("socket.io");

// events
const registerEvent = require("./events/register.event");
const privateChatEvent = require("./events/privateChat.event");
const disconnectEvent = require("./events/disconnect.event");

function initSocket(server) {
  const io = new Server(server, {cors: { origin: "*" }});

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // 🔥 attach all events
    registerEvent(io, socket);
    privateChatEvent(io, socket);
    disconnectEvent(io, socket);
  });
};

module.exports = initSocket;
