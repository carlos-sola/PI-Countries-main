const {Router} = require ('express');
const activityControllers = require('../controllers/activity');

const router = Router();

router.post('/', activityControllers.createActivity);

module.exports = router;