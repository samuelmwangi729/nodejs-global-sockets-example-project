/**
 * create the HTTp server here
 */
const http = require("http");
const app = require("./Utils/app");
const { initIO } = require("./socket");

const server = http.createServer(app);
initIO(server);
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
