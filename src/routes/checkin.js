const { Router } = require('express');
const checkInController = require('../controller/checkin');

const router = Router();

router.get('/get-jwt', checkInController.getJWT);
router.post('/', checkInController.addCheckIn);

module.exports = router;
