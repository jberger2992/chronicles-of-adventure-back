const express = require('express');
const router = express.Router();
const {AdventureStep, Lore} = require('../models');
//--  /api/AdventureSteps

// Get all AdventureSteps belonging to specific Adventure
router.get("/adventure/:id",(req,res)=>{
    Adventure.findAll({
        where:{AdventureId:req.params.id}
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

// Get specific AdventureStep by ID
router.get("/:id",(req,res)=>{
    AdventureStep.findByPk(req.params.id,{
        include:[Lore]
    }).then(step=>{
        if(!step){
            return res.status(404).json({msg:"No AdeventureStep with that id exists."})
        }
        res.json(step)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create an AdventureStep
router.post("/", async (req, res) => {
    try{
        const newStep = await AdventureStep.create({
            response:req.body.response,
            text:req.body.text,
            isFirstStep:req.body.isFirstStep,
            option:req.body.option,
            previous:req.body.previous,
            AdventureId:req.body.AdventureId
        });    
        if (req.body.loreIds) {
            newStep.addLores(req.body.loreIds)
        }    
        if (req.body.characterIds) {
            newStep.addCharacters(req.body.characterIds)
        }    
        if (req.body.sideCharacterIds) {
            newStep.addSideCharacters(req.body.sideCharacterIds)
        }    
        if (req.body.locationIds) {
            newStep.addLocations(req.body.locationIds)
        }    
        res.status(200).json(newStep)
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }    
});

// Update a AdventureStep by ID
router.put("/:id", async (req, res) => {
    try{
        const foundStep = await AdventureStep.update({
            response:req.body.response,
            text:req.body.text
        },{
            where:{id:req.params.id}
        });
        if (req.body.loreIds) {
            foundStep.addLores(req.body.loreIds)
        }
        if (req.body.characterIds) {
            foundStep.addCharacters(req.body.characterIds)
        }    
        if (req.body.sideCharacterIds) {
            foundStep.addSideCharacters(req.body.sideCharacterIds)
        }    
        if (req.body.locationIds) {
            foundStep.addLocations(req.body.locationIds)
        }    
        res.status(200).json(foundStep)
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete an AdventureStep
router.delete("/:id",(req,res)=>{
    AdventureStep.destroy({
        where:{id:req.params.id}
    }).then(delStep=>{
        if(!delStep){
            return res.status(404).json({msg:"No AdventureStep with this id."})
        }
        res.json(delStep)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;

// Example Creating Body:
//   {
//     response:"Example thing."
//     text:"Example text for a step for an adventure",
//     isFirstStep:false,
//     option:1,
//     previous:23,
//     AdventureId:1
//   }