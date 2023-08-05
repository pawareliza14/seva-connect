const {signUpAsCustomer,login}= require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/login').post(login);
router.route('/customer').post(signUpAsCustomer);

module.exports = router;