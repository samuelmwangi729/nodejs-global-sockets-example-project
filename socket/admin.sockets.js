const registerAdminEvents = (namespace) => {
  namespace.on("connection", () => {
    console.log("connection to the admin namespace successful");
  });

  namespace.on("end", () => {
    console.log("the connection has been terminated");
  });
};
module.exports = registerAdminEvents;
