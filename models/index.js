const User = require("./User");
const World = require("./World");
const Adventure = require("./Adventure");
const AdventureStep = require("./AdventureStep");
const Info = require("./Info");

World.belongsTo(User);
User.hasMany(World);

Info.belongsTo(World);
Adventure.belongsTo(World);
World.hasMany(Info);
World.hasMany(Adventure);

Adventure

module.exports = {
    User,
    World,
    Adventure,
    Info
}
