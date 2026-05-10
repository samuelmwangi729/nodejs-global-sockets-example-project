/**
 * handles main socket connections
 */

const handleMainSocket = (namespace) => {
  namespace.on("connection", (socket) => {
    console.log("connection initialised for the main socket");
  });
};

module.exports = handleMainSocket
