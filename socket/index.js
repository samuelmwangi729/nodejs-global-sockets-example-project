/**
 * This is the entry file to load the sockets
 */
const { Server } = require("socket.io");
const registerChatEvents = require("./chat.sockets");
const registerAdminEvents = require("./admin.sockets");
const handleMainSocket = require("./main.socket");
let io;
let chatNamespace;
let adminNamespace;
const initIO = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  /**
   * global middleware
   */
  io.use((socket, next) => {
    console.log("Runs everywhere");
    next();
  });
  /**
   * Create the Namespaces
   */
  mainNamespace = io.of("/");
  chatNamespace = io.of("/chat");
  adminNamespace = io.of("/admin");
  /**
   * use sockets middleware here
   */
  chatNamespace.use((socket, next) => {
    // const token = socket.handshake.auth.token;
    // if (!token) {
    //   return next(new Error("unauthorised"));
    // }
    /**
     * allow the connection
     */
    next();
  });

  registerChatEvents(chatNamespace);
  registerAdminEvents(adminNamespace);
  handleMainSocket(mainNamespace)
  return io;
};

const getChatNamespace = () => chatNamespace;
const getAdminNamespace = () => adminNamespace;

module.exports = { getAdminNamespace, getChatNamespace, initIO };
