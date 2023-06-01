const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)
const worldRoutes = require("./worldRoutes");
router.use("/api/worlds",worldRoutes)
const loreRoutes = require("./loreRoutes");
router.use("/api/lores",loreRoutes)
const adventureRoutes = require("./adventureRoutes");
router.use("/api/adventures",adventureRoutes)
const adventureStepRoutes = require("./adventureStepRoutes");
router.use("/api/adventureSteps",adventureStepRoutes)

module.exports = router;