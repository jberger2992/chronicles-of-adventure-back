const express = require('express');
const router = express.Router();
const {Location} = require('../models');
//--  /api/Locations

// Create a new Location
router.post("/", (req, res) => {
    Location.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        WorldId:req.body.WorldId
    }).then(newLocation=>{
        res.json(newLocation)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get specific Location by ID
router.get("/:id",(req,res)=>{
    Location.findByPk(req.params.id,{
    }).then(location=>{
        if(!location){
            return res.status(404).json({msg:"No Location with that id exists."})
        }
        res.json(location)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an Location
router.delete("/:id",(req,res)=>{
    Location.destroy({
        where:{
            id:req.params.id
        }
    }).then(delLocation=>{
        if(!delLocation){
            return res.status(404).json({msg:"No Location with this id."})
        }
        res.json(delLocation)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
