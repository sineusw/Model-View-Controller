const {User, BlogPost} = require("../models");
const router = require("express").Router();


router.get("/new-post", (req, res)=>{
    req.rend('newpost')
})








module.exports = router