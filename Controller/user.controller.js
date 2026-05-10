const { getChatNamespace } = require("../socket");

const Index = (req, res) => {
  //get the chatNamespace here and emit an event
  const chat = getChatNamespace();
  chat.emit("message", {
    type: "message",
    data: "this is a sample  data",
  });
  return res.status(200).json({
    status: "success",
    message: "this is the index route",
  });
};

module.exports = { Index };
