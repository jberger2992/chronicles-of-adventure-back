const express = require('express');
const router = express.Router();
const {AdventureStep, Lore} = require('../models');
//--  /api/AdventureSteps

// Create a new AdventureStep
// router.post("/", (req, res) => {
//     AdventureStep.create({
//         text:req.body.text,
//         isFirstStep:req.body.isFirstStep,
//         option:req.body.option,
//         previous:req.body.previous
//     }).then(newStep=>{
//         res.json(newStep)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"ERROR",err})
//     })
// });

router.post("/", async (req, res) => {
    try{
        const newStep = await AdventureStep.create({
            text:req.body.text,
            isFirstStep:req.body.isFirstStep,
            option:req.body.option,
            previous:req.body.previous,
            AdventureId:req.body.AdventureId
        });
        if (req.body.loreIds) {
            newStep.addLores(req.body.loreIds)
        }
        res.status(200).json(newStep)
    } catch(err){
        console.log(err);
        res.status(500).json(err);
    }
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

// Delete an AdventureStep
router.delete("/:id",(req,res)=>{
    AdventureStep.destroy({
        where:{
            id:req.params.id
        }
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
