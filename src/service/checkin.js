const CheckInModel = require('../db/models/checkIn');

async function addCheckIn(name, coordinates) {
    try {
        const data = await CheckInModel.create({
            name,
            location: { type: 'Point', coordinates }
        });
        return { data };
    } catch (error) {
        return { error: err }
    }
};

module.exports = {
    addCheckIn
}
