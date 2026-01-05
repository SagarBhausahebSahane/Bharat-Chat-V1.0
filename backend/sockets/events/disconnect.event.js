const { removeUser } = require("../store/userSocket.store");

module.exports = function disconnectEvent(io, socket) {
  socket.on("disconnect", () => {
    if (socket.userId) {
      removeUser(socket.userId);
      console.log("User disconnected:", socket.userId);
    }
  });
};
