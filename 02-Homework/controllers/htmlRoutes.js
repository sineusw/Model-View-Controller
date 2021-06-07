const db = require("../models")
const router = require("express").Router()
router.get("/",function(req,res){
    res.render("index")
})
route.get("/login",function(req,res){
    res.render("login")
})
module.exports = router