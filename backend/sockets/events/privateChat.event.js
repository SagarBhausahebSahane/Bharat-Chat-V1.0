const { getSocket } = require("../store/userSocket.store");

module.exports = function privateChatEvent(io, socket) {
  socket.on("private-message", ({ to, message }) => {
    const from = socket.userId;

    if (!from) return;

    const receiverSocket = getSocket(to);

    if (receiverSocket) {
      receiverSocket.emit("private-message", {
        from,
        message,
      });
    } else {
      socket.emit("user-offline", { to });
    }
  });
};
