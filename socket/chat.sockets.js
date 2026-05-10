/**
 * this has all the logic on the chat Namespace
 */

const registerChatEvents = (namespace) => {
  namespace.on("connection", (socket) => {
    console.log("connection to the chat interface successful");
    socket.on("message", (data) => {
      console.log("the data:", data);
    });
  });
  //view and emit events here
  namespace.on("end", () => {
    console.log("the connection has been terminated");
  });
};

module.exports = registerChatEvents;
