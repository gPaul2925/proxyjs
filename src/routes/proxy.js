const { Router } = require('express');
const { getProxy } = require('../controllers/proxyController');
const { userViewForm, getMyIp } = require('../controllers/viewController');
const router = Router();

router.get('/proxy', getProxy);
router.get('/', userViewForm);


module.exports = router;