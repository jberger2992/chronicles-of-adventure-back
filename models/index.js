const User = require("./User");
const World = require("./World");
const Adventure = require("./Adventure");
const AdventureStep = require("./AdventureStep");
const Info = require("./Info");
const Character = require("./Character");

World.belongsTo(User);
User.hasMany(World);

Info.belongsTo(World);
World.hasMany(Info);
Adventure.belongsTo(World);
World.hasMany(Adventure);
Character.belongsTo(World);
World.hasMany(Character);

AdventureStep.belongsTo(Adventure);
Adventure.hasMany(AdventureStep);

module.exports = {
    User,
    World,
    Adventure,
    Info
}
