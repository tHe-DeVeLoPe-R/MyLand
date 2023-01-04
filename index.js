const express = require('express')
const { sequelize } = require('./models/index')
const router = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use("/", router);

(async function () {
    await sequelize.authenticate().then(() => {
        app.listen(3000, () => {
            console.log("server running on port 3000")
        })
        console.log("database connected")
        sequelize.sync({ alter: true })
        console.log("synced")

    }).catch((error) => {
        console.log(" while connecting ")
    })
}())