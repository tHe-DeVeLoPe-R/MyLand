const router = require('express').Router();

const { property } = require('../models');


router.post("/ascending-order", async (req, res) => {

    try {
        let all_properties = await property.findAll({
            order: [
                ["price", "ASC"]
            ]
        });
        if (all_properties) {
            res.send(all_properties)
        } else {
            res.send("no properties found in database")
        }
    } catch (error) {
        res.send("error while trying")
    }

})

module.exports = router;