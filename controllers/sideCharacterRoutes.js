const express = require('express');
const router = express.Router();
const {SideCharacter} = require('../models');
//--  /api/SideCharacters

// Get all SideCharacters
router.get("/",(req,res)=>{
    SideCharacter.findAll({
    }).then(sides=>{
        if(sides.length===0){
            return res.status(404).json({msg:"No SideCharacters found."})
        }
        res.json(sides)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all SideCharacters belonging to specific World
router.get("/world/:id",(req,res)=>{
    SideCharacter.findAll({
        where:{WorldId:req.params.id}
    }).then(sides=>{
        if(sides.length===0){
            return res.status(404).json({msg:"No SideCharacters found."})
        }
        res.json(sides)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific SideCharacter by ID
router.get("/:id",(req,res)=>{
    SideCharacter.findByPk(req.params.id,{
    }).then(side=>{
        if(!side){
            return res.status(404).json({msg:"No SideCharacter with that id exists."})
        }
        res.json(side)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new SideCharacter
router.post("/", (req, res) => {
    SideCharacter.create({
        name:req.body.name,
        description:req.body.description,
        WorldId:req.body.WorldId
    }).then(newSide=>{
        res.json(newSide)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a SideCharacter by ID
router.put("/:id", (req, res) => {
    SideCharacter.update({
        name:req.body.name,
        description:req.body.description,
    },{
        where:{id:req.params.id}
    }).then(editSide=>{
        if(!editSide){
            return res.status(404).json({msg:"No SideCharacter with that id exists."})
        }
        res.json(editSide)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an SideCharacter
router.delete("/:id",(req,res)=>{
    SideCharacter.destroy({
        where:{
            id:req.params.id
        }
    }).then(delSide=>{
        if(!delSide){
            return res.status(404).json({msg:"No SideCharacter with this id."})
        }
        res.json(delSide)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
