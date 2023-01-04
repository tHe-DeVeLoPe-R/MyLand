const router = require('express').Router();

const { users } = require('../models')

router.post("/delete-account/:id", async (req, res) => {
    const { id } = req.params;
    try {
        user = await users.findOne({ where: { id } });
        if (user) {
            users.destroy({ where: { id } });
            res.send("user deleted")
        } else {
            res.send("no user found")
        }
    } catch (error) {
        res.send("error while trying");
    }
})

module.exports = router