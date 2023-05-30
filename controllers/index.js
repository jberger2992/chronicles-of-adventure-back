const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)
const worldRoutes = require("./worldRoutes");
router.use("/api/worlds",worldRoutes)
const infoRoutes = require("./infoRoutes");
router.use("/api/infos",infoRoutes)
const adventureRoutes = require("./adventureRoutes");
router.use("/api/adventures",adventureRoutes)

module.exports = router;