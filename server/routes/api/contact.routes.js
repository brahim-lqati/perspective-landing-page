const express = require('express');
const router= express.Router();
//middleware validation
const { contactValidation } = require('../../middleware/contactValidation');

//contact controller
const contactController = require('../../controller/contactController');

router.post('/contact', contactValidation, contactController.store);

module.exports = router;

