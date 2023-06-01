const express = require('express');
const router = express.Router();
const {Adventure, AdventureStep} = require('../models');
//--  /api/adventures

// Get all Adventures
router.get("/",(req,res)=>{
    Adventure.findAll({
    }).then(adventures=>{
        if(adventures.length===0){
            return res.status(404).json({msg:"No Adventures found."})
        }
        res.json(adventures)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Adventures belonging to specific World
router.get("/world/:id",(req,res)=>{
    Adventure.findAll({
        where:{WorldId:req.params.id}
    }).then(adventures=>{
        if(adventures.length===0){
            return res.status(404).json({msg:"No Adventures found."})
        }
        res.json(adventures)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific Adventure by ID
router.get("/:id",(req,res)=>{
    Adventure.findByPk(req.params.id,{
        include:[AdventureStep]
    }).then(adv=>{
        if(!adv){
            return res.status(404).json({msg:"No Adeventure with that id exists."})
        }
        res.json(adv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Adventure
router.post("/", (req, res) => {
    Adventure.create({
        name:req.body.name,
        description:req.body.description,
        opening:req.body.opening,
        WorldId:req.body.WorldId
    }).then(newAdv=>{
        res.json(newAdv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Adventure by ID
router.put("/:id", (req, res) => {
    Adventure.update({
        name:req.body.name,
        description:req.body.description,
        opening:req.body.opening
    },{
        where:{id:req.params.id}
    }).then(editAdv=>{
        if(!editAdv){
            return res.status(404).json({msg:"No Adventure with that id exists."})
        }
        res.json(editAdv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an Adventure
router.delete("/:id",(req,res)=>{
    Adventure.destroy({
        where:{
            id:req.params.id
        }
    }).then(delAdv=>{
        if(!delAdv){
            return res.status(404).json({msg:"No Adventure with this id."})
        }
        res.json(delAdv)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
