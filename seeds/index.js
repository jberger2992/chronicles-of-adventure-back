const sequelize = require("../config/connection");
const {User,World,Lore,Adventure,AdventureStep,Character,Location,SideCharacter} = require('../models');

const users = [
    {
        username: "fantasuUser1",
        password: "password",
        email: "fantasyuser1@coa.com"
    },
    {
        username: "fantasyuser2",
        password: "password",
        email: "fantasyuser2@coa.com"
    },
    {
        username: "genericuser",
        password: "password",
        email: "genericuser@coa.com"
    },
];

const worlds = [
    {
        name:"Fantasy Land",
        type:"fantasy",
        description:"A land full of swords and sorcery.",
        UserId:1
    },
    {
        name:"Fantasy World",
        type:"fantasy",
        description:"A world full of wizardry and wonder.",
        UserId:1
    },
    {
        name:"World of Chaos",
        type:"fantasy",
        description:"A world ravaged by constant war.",
        UserId:2
    },
    {
        name:"SciFi Universe",
        type:"scifi",
        description:"A universe full of laser swords and space magic.",
        UserId:3
    },
];

const lores = [
    {
        name:"Magic",
        description:"Magic in the world comes from the 4 elements",
        WorldId:1
    },
    {
        name:"Magic",
        description:"Magic in the world comes from the gods",
        WorldId:2
    },
    {
        name:"Weaponry",
        description:"Weapons in the world are made from metals ranging from iron to mythril.",
        WorldId:1
    },
    {
        name:"Weaponry",
        description:"Weapons in the world are made from metals ranging from bronze to adamantine.",
        WorldId:2
    },
    {
        name:"Weaponry",
        description:"Weapons in the world are made from regular metals and alloys typical to medievil times.",
        WorldId:3
    },
];

const seedDb = async () => {
    try{
        await sequelize.sync({force:true});
        const userData = await User.bulkCreate(users,{individualHooks:true});
        const worldData = await World.bulkCreate(worlds);
        const loreData = await Lore.bulkCreate(lores);
        process.exit(0);
    } catch (err){
        console.log(err)
    }
}

seedDb();