const jwt = require('../utils/jwt');
const service = require('../service/checkin');

function getJWT(req, res) {
    const { name } = req.params;
    const token = jwt.generateJWT(name)
    res.end(token);
}

function addCheckIn(req, res) {
    const { user, body: { coordinates } } = req;
    const { data, error } = service.addCheckIn(user.name, coordinates);

    if (error) {
        return res.status(500).end(error);
    }

    return res.status(200).end(data);
}

module.exports = {
    getJWT,
    addCheckIn
}