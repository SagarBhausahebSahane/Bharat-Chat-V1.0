const http = require("http");
const app = require("./app");
const initSocket = require("./sockets/socket");

const server = http.createServer(app);
initSocket(server);

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
