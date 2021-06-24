const {User, BlogPost} = require("../models");
const bcrypt = require('bcrypt')
const router = require("express").Router()
router.get("/",function(req,res){
    res.render("index")
})
router.get("/login",function(req,res){
    res.render("login")
})
router.post("/login", async function(req,res){
    const {username, password} = req.body;
    try{
        const user = await User.findOne({
            where:{
                username
            }
        })

        if(!user){
             return res.render("login", {message: "Invalid credentials"})
        }

        // check if password match 
        if(bcrypt.compareSync(password, user.password)){
            req.session.userId=user.id
           return res.redirect("/dashboard")
        } else{
            return res.render("login", {message: "Invalid credentials"})
        }

    }
    catch(e){ 
        res.status(500).send()
    }
}); 

router.get("/signup",function(req,res){
    res.render("signup")
})
router.post("/signup",async function(req,res){
     const {username, password} = req.body;
     try{
         const newUser = await User.create({username,password})
         req.session.save(()=>{
             req.session.userId = newUser.id
         })
         res.json(newUser)
         res.redirect("/dashboard")
     } catch(e){
         return res.render("signup", {message: "user already exists"})

     }

})


router.delete("/logout", (req, res)=>{
    req.session.destroy()
    res.json('Logged out successfully')
})

router.get("/dashboard",function(req,res){
    res.render("dashboard", {userId: req.session.userId})
})

module.exports = router