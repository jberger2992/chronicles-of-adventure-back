const express = require('express');
const router = express.Router();
const {Lore} = require('../models');
//--  /api/Lores

// Create a new Lore
router.post("/", (req, res) => {
    Lore.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        WorldId:req.body.WorldId
    }).then(newLore=>{
        res.json(newLore)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific Lore by ID
router.get("/:id",(req,res)=>{
    Lore.findByPk(req.params.id,{
    }).then(lore=>{
        if(!lore){
            return res.status(404).json({msg:"No Lore with that id exists."})
        }
        res.json(lore)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an Lore
router.delete("/:id",(req,res)=>{
    Lore.destroy({
        where:{
            id:req.params.id
        }
    }).then(delLore=>{
        if(!delLore){
            return res.status(404).json({msg:"No Lore with this id."})
        }
        res.json(delLore)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
