const {Router} = require ('express');
const countriesControllers = require('../controllers/countries');

const router = Router();
router.get('/',countriesControllers.getAll);
router.get('/:id',countriesControllers.getById);

module.exports = router;