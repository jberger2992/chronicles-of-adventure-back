const express = require('express');
const router = express.Router();
const {Adventure, AdventureStep} = require('../models');
//--  /api/adventures

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

// Get specific Adventure by ID
router.get("/:id",(req,res)=>{
    Adventure.findByPk(req.params.id,{
        include:[AdventureStep]
    }).then(Adv=>{
        if(!Adv){
            return res.status(404).json({msg:"No Adeventure with that id exists."})
        }
        res.json(Adv)
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
