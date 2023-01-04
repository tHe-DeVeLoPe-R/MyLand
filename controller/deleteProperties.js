const router = require('express').Router()

const { property } = require('../models')

router.post("/delete-property/:id", async (req, res) => {
    const { id } = req.params;
    try {
        property_exists = await property.findOne({ where: { id } });
        if (property_exists) {
            property.destroy({ where: { id } })
            res.send("property deleted")
        } else {
            res.send("property not found");
        }

    } catch (error) {
        res.send("error while trying");
    }
})

module.exports = router