const {User, BlogPost} = require("../models")
const router = require("express").Router()
router.get("/",function(req,res){
    res.render("index")
})
router.get("/login",function(req,res){
    res.render("login")
})
router.get("/signup",function(req,res){
    res.render("signup")
})
router.post("/signup",async function(req,res){
     const {username, password} = req.body; 

})
module.exports = router