var controller = require('./controller');
var router = require('express').Router();


router.get('/dates', controller.dates.get);
router.post('/dates', controller.dates.post);



module.exports = router;
