const express = require('express');
const router = express.Router();
const {User,World} = require('../models');
const bcrypt = require("bcrypt");
//--  /api/users

// Get specific User by ID
router.get("/:id",(req,res)=>{
    User.findByPk(req.params.id,{
        include:[World]
    }).then(user=>{
        if(!user){
            return res.status(404).json({msg:"No user with that id exists."})
        }
        res.json(user)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new User
router.post("/", (req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
    .then((newUser) => {
        res.json(newUser);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
});

module.exports = router;
