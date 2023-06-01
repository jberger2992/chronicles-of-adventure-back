const express = require('express');
const router = express.Router();
const {User,World,Lore,Adventure,Character,Location,SideCharacter} = require('../models');
//--  /api/worlds

// Get all Worlds
router.get("/",(req,res)=>{
    World.findAll({
        include:[User,Lore,Adventure,Character,Location,SideCharacter]
    }).then(worlds=>{
        if(worlds.length===0){
            return res.status(404).json({msg:"No worlds found."})
        }
        res.json(worlds)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Worlds belonging to specific User
router.get("/user/:id",(req,res)=>{
    World.findAll({
        include:[User,Lore,Adventure,Character,Location,SideCharacter],
        where:{UserId:req.params.id}
    }).then(worlds=>{
        if(worlds.length===0){
            return res.status(404).json({msg:"No worlds found."})
        }
        res.json(worlds)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Worlds of specific type
router.get("/type/:type",(req,res)=>{
    World.findAll({
        include:[User,Lore,Adventure,Character,Location,SideCharacter]
    },{
        where:{type:req.params.type}
    }).then(worlds=>{
        if(worlds.length===0){
            return res.status(404).json({msg:"No worlds found."})
        }
        res.json(worlds)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific World by ID
router.get("/:id",(req,res)=>{
    World.findByPk(req.params.id,{
        include:[User,Lore,Adventure,Character,Location,SideCharacter]
    }).then(world=>{
        if(!world){
            return res.status(404).json({msg:"No world with that id exists."})
        }
        res.json(world)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new World
router.post("/", (req, res) => {
    World.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        UserId:req.body.UserId
    }).then(newWorld=>{
        res.json(newWorld)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a World by ID
router.put("/:id", (req, res) => {
    World.update({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
    },{
        where:{id:req.params.id}
    }).then(editWorld=>{
        if(!editWorld){
            return res.status(404).json({msg:"No World with that id exists."})
        }
        res.json(editWorld)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a World by ID
router.delete("/:id",(req,res)=>{
    World.destroy({
        where:{
            id:req.params.id
        }
    }).then(delWorld=>{
        if(!delWorld){
            return res.status(404).json({msg:"No World with this id."})
        }
        res.json(delWorld)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
