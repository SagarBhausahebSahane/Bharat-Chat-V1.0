import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import DraggableChat from "./components/chatButton/chatButton";



// Backend URL
const BACKEND_URL = "http://localhost:3000"; // change if hosted
const socket = io(BACKEND_URL);

function App() {
  return(<>
  <DraggableChat/></>)
}

export default App;
