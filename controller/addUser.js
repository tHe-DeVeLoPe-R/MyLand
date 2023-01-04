const router = require('express').Router()

const { users } = require('../models')

router.post("/add-user", async (req, res) => {
    const { username, password, email, address, contact, role } = req.body;

    try {
    

        user_exists = await users.findOne({ where: { email } })

        if (user_exists) {
            res.send("user already exists")
        } else if (role == "admin") {
            res.send("cannot create admin")
        } else {

            created_user = await users.create({ username, password, email, address, contact, role })

            res.send(created_user)

        }
    } catch (error) {
        res.send("error while creating user")
    }
})

module.exports = router;