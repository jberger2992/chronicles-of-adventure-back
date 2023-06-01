const express = require('express');
const router = express.Router();
const {Location} = require('../models');
//--  /api/Locations

// Get all Locations
router.get("/",(req,res)=>{
    Location.findAll({
    }).then(locations=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Locations found."})
        }
        res.json(locations)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get all Locations belonging to specific World
router.get("/world/:id",(req,res)=>{
    Location.findAll({
        where:{WorldId:req.params.id}
    }).then(locations=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Locations found."})
        }
        res.json(locations)
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

// Create a new Location
router.post("/", (req, res) => {
    Location.create({
        name:req.body.name,
        description:req.body.description,
        WorldId:req.body.WorldId
    }).then(newLocation=>{
        res.json(newLocation)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Location
router.put("/:id", (req, res) => {
    Location.update({
        name:req.body.name,
        description:req.body.description,
    },{
        where:{id:req.params.id}
    })
    .then((newLocation) => {
        res.json(newLocation);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
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
