const router = require('express').Router();
const { property } = require('../models')

router.post("/edit-property/:id", async (req, res) => {
    const { ...body } = req.body;
    const {id} = req.params;

    try {

        edit_property = await property.update({
            purpose: body.purpose, p_type: body.p_type, city: body.city, location: body.location,
            area: body.area, price: body.price, unit: body.unit, installments_available: body.installments_available,
            possession_available: body.possession_available, bedrooms: body.bedrooms,
            bathrooms: body.bedrooms, title: body.title, description: body.description,
            image_link: body.image_link, email: body.email, contact: body.email,
            userid: body.userid
        }, {
            where: { id }
        })

        res.send(edit_property)
    } catch (error) {
        res.send("error while trying")
    }
})

module.exports = router