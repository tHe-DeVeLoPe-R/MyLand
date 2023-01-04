const router = require('express').Router()

const { property } = require('../models')

router.post("/show-property/:area", async (req, res) => {
    const { area } = req.params;
    try {
        let properties = await property.findAll({ where: { area } });

        if (properties.length > 0) {
            res.send(properties);
        } else {
            res.send("properties not found with marla " + area);
        }

    } catch (error) {
        res.send("error while trying");
    }
})

module.exports = router