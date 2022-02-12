const { Router } = require('express');
const checkInController = require('../controller/checkin');
const jwtParser = require('../middlwares/jwtParser');

const router = Router();

router.get('/get-jwt/:name', checkInController.getJWT);
router.post('/', jwtParser, checkInController.addCheckIn);

module.exports = router;
