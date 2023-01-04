const router = require('express').Router();

const {users} = require('../models');

router.get("/login", async (req, res)=>{
    const {email, password} = req.body;

    try {
       let user = await users.findOne({where:{email}});

       if(user){
        if(password == user.password){
            res.send("user logged in");
        }else{
            res.send("wrong password or email");
        }
       }else{
        res.send("wrong email or password");
       }
    } catch (error) {
        res.send("error while trying");
    }
})

module.exports = router;