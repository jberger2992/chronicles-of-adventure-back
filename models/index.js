const User = require("./User");
const World = require("./World");
const Adventure = require("./Adventure");
const AdventureStep = require("./AdventureStep");
const Lore = require("./Lore");
const Location = require("./Location");
const SideCharacter = require("./SideCharacter");
const Character = require("./Character");

World.belongsTo(User);
User.hasMany(World);

Lore.belongsTo(World);
World.hasMany(Lore);
Adventure.belongsTo(World);
World.hasMany(Adventure);
Character.belongsTo(World);
World.hasMany(Character);
Location.belongsTo(World);
World.hasMany(Location);
SideCharacter.belongsTo(World);
World.hasMany(SideCharacter);

AdventureStep.belongsTo(Adventure);
Adventure.hasMany(AdventureStep);

AdventureStep.belongsToMany(Character,{through:"AdventureStep_Characters"});
Character.belongsToMany(AdventureStep,{through:"AdventureStep_Characters"});
AdventureStep.belongsToMany(Location,{through:"AdventureStep_Locations"});
Location.belongsToMany(AdventureStep,{through:"AdventureStep_Locations"});
AdventureStep.belongsToMany(Lore,{through:"AdventureStep_Lores"});
Lore.belongsToMany(AdventureStep,{through:"AdventureStep_Lores"});
AdventureStep.belongsToMany(SideCharacter,{through:"AdventureStep_SideCharacters"});
SideCharacter.belongsToMany(AdventureStep,{through:"AdventureStep_SideCharacters"});

module.exports = {
    User,
    World,
    Adventure,
    AdventureStep,
    Lore,
    Character,
    SideCharacter,
    Location,
}
