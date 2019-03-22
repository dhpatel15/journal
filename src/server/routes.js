var controller = require('./controller');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/calendar', controller.calendar.get);
router.get('/recentFive', controller.recentFive.get);
router.post('/postJournal', controller.journal.post);



module.exports = router;
