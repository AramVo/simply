const jwt = require('../utils/jwt');
const service = require('../service/checkin');

function getJWT(req, res) {
    const { name } = req.params;
    const token = jwt.generateJWT(name)
    res.end(token);
}

async function addCheckIn(req, res) {
    const { user, body: { coordinates } } = req;
    const { data, error } = await service.addCheckIn(user.name, coordinates);

    if (error) {
        return res.status(500).end(error);
    }

    return res.status(200).json(data);
}

async function getNearbyUsers(req, res) {
    const { coordinates } = req.query;
    const { error, data } = await service.getNearbyUsers(JSON.parse(coordinates));

    if (error) {
        return res.status(500).end(error);
    }

    return res.status(200).json(data);
}

module.exports = {
    getJWT,
    addCheckIn,
    getNearbyUsers
}