const router = require('express').Router();
const { property } = require('../models')

router.post('/add-property', async (req, res) => {
    const { purpose, p_type, city, location,
        area, price, unit, installments_available, possession_available, bedrooms,
        bathrooms, title, description, image_link, email, contact, userid } = req.body

    try {

        add_property = await property.create({
            purpose, p_type, city, location,
            area, price, unit, installments_available, possession_available, bedrooms,
            bathrooms, title, description, image_link, email, contact, userid
        })

        res.send(add_property)
    } catch (error) {
        res.send("error while trying")
    }
})

module.exports = router