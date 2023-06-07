const express = require('express');
const router = express.Router();
const {User,World} = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
        const token = jwt.sign({
            username:newUser.username,
            userId:newUser.id
        },process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        res.json({token, user:newUser});
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
});

// User Login
router.post("/login", (req, res) => {
    User.findOne({
      where:{
        username:req.body.username
      }
    }).then((foundUser) => {
        if(!foundUser){
            return res.status(401).json({msg:"Invalid Username or Password"})
        } else if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"Invalid Username or Password"})
        } else{
        const token = jwt.sign({
            username:foundUser.username,
            userId:foundUser.id
        },process.env.JWT_SECRET,{
            expiresIn:"2h"
        })
        res.json({token, user:foundUser})
        };
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
});

// Verify Token
router.get("/verifytoken",(req,res)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET)
        User.findByPk(data.userId,{
            include:[World]
        }).then(foundUser=>{
            res.json(foundUser)
        });
    } catch (err) {
        console.log(err);
        res.status(403).json({ msg: "Invalid Token", err })
    }
})

// Update a User
router.put("/:id", (req, res) => {
    User.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    },{
        where:{id:req.params.id}
    })
    .then((newUser) => {
        res.json(newUser);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "ERROR", err });
    });
});

//Delete a User by ID
router.delete("/:id",(req,res)=>{
    User.destroy({
        where:{id:req.params.id}
    }).then(delUser=>{
        if(!delUser){
            return res.status(404).json({msg:"No User with this id."})
        }
        res.json(delUser)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;
