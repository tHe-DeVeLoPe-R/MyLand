const router = require('express').Router();

const {users} = require('../models');

router.get("/admin-login", async (req, res)=>{
    const {email, password, role} = req.body;

    try {
       let admin = await users.findOne({where:{email , role}});

       if(admin){
        if(password == admin.password){
            res.send("admin logged in");
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