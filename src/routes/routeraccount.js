const accountcontroller= require('../controllers/controllaccount');
const ex = require('express');

const router = ex.Router();

router.get('/account',accountcontroller.getaccount);
router.get('/:account_id',accountcontroller.getaccountByID);

module.exports = router;
