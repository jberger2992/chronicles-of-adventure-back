const express = require('express');
const router = express.Router();
//--  /api/infos

// Create a new Info
router.post("/", (req, res) => {
    World.create({
        name:req.body.name,
        type:req.body.type,
        description:req.body.description,
        worldId:req.body.worldId
    }).then(newInfo=>{
        res.json(newInfo)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});


module.exports = router;
