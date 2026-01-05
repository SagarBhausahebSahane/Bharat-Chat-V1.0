const userSocketMap = new Map();

function addUser(userId, socket) {
  userSocketMap.set(userId, socket);
}

function removeUser(userId) {
  userSocketMap.delete(userId);
}

function getSocket(userId) {
  return userSocketMap.get(userId);
}

function getOnlineUsers() {
  return [...userSocketMap.keys()];
}

module.exports = { addUser, removeUser, getSocket, getOnlineUsers };
