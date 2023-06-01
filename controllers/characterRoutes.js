const express = require('express');
const router = express.Router();
const {Character} = require('../models');
//--  /api/Characters

// Get all Characters
router.get("/",(req,res)=>{
    Character.findAll({
    }).then(characters=>{
        if(characters.length===0){
            return res.status(404).json({msg:"No Characters found."})
        }
        res.json(characters)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Characters belonging to specific World
router.get("/world/:id",(req,res)=>{
    Character.findAll({
        where:{WorldId:req.params.id}
    }).then(characters=>{
        if(characters.length===0){
            return res.status(404).json({msg:"No Characters found."})
        }
        res.json(characters)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific Character by ID
router.get("/:id",(req,res)=>{
    Character.findByPk(req.params.id,{
    }).then(char=>{
        if(!char){
            return res.status(404).json({msg:"No Character with that id exists."})
        }
        res.json(char)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Character
router.post("/", (req, res) => {
    Character.create({
        name:req.body.name,
        description:req.body.description,
        characteristics:req.body.characteristics,
        age:req.body.age,
        sex:req.body.sex,
        WorldId:req.body.WorldId
    }).then(newChar=>{
        res.json(newChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Character by ID
router.put("/:id", (req, res) => {
    Character.update({
        name:req.body.name,
        description:req.body.description,
        characteristics:req.body.characteristics,
        age:req.body.age,
        sex:req.body.sex,
    },{
        where:{id:req.params.id}
    }).then(editChar=>{
        if(!editChar){
            return res.status(404).json({msg:"No Character with that id exists."})
        }
        res.json(editChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an Character
router.delete("/:id",(req,res)=>{
    Character.destroy({
        where:{
            id:req.params.id
        }
    }).then(delChar=>{
        if(!delChar){
            return res.status(404).json({msg:"No Character with this id."})
        }
        res.json(delChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
