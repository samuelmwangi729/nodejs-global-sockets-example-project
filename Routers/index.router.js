const { Router } = require("express");
const { Index } = require("../Controller/user.controller");

const indexRouter = Router()
indexRouter.get("",Index)
module.exports = indexRouter
