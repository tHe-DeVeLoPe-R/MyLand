const router = require('express').Router();
const addUser = require('../controller/addUser');
const login = require('../controller/loginUser');
const deleteAccount = require('../controller/deleteAccount');
const addProperty = require('../controller/addProperty');
const editProperty = require('../controller/editProperty');
const deleteProperty = require('../controller/deleteProperties');
const showPropertyByArea = require('../controller/showbyArea');
const showPropertyByPrice = require('../controller/showbyPrice');

router.use("/", addUser);
router.use("/", login);
router.use("/", deleteAccount);
router.use("/", addProperty);
router.use("/", deleteProperty);
router.use("/", editProperty);
router.use("/", showPropertyByArea);
router.use("/", showPropertyByPrice);

module.exports = router