const { Router } = require('express');
const checkInController = require('../controller/checkin');
const jwtParser = require('../middlwares/jwtParser');
const { validateName } = require('../middlwares/schemaValidator');

const router = Router();

router.get('/get-jwt/:name', validateName, checkInController.getJWT);
router.get('/get-nearby-users', checkInController.getNearbyUsers);
router.post('/', jwtParser, checkInController.addCheckIn);

module.exports = router;
