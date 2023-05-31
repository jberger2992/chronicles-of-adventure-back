const express = require('express');
const router = express.Router();
const {Info} = require('../models');
//--  /api/infos

// Create a new Info
router.post("/", (req, res) => {
    Info.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        WorldId:req.body.WorldId
    }).then(newInfo=>{
        res.json(newInfo)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete an Info
router.delete("/:id",(req,res)=>{
    Info.destroy({
        where:{
            id:req.params.id
        }
    }).then(delInfo=>{
        if(!delInfo){
            return res.status(404).json({msg:"No Info with this id."})
        }
        res.json(delInfo)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
