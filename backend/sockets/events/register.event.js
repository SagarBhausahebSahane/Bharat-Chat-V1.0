const { addUser } = require("../store/userSocket.store");

module.exports = function registerEvent(io, socket) {
  socket.on("register", (userId) => {
    socket.userId = userId;
    addUser(userId, socket);

    console.log("User registered:", userId);
  });
};
