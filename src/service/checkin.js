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

async function getNearbyUsers(coordinates) {
    try {
        const data = await CheckInModel
            .aggregate([
            {
              $geoNear: {
                 near: { type: "Point", coordinates },
                 distanceField: "dist.calculated",
                 maxDistance: 1000,
                 includeLocs: "dist.location",
                 spherical: true
              }
            }
         ])
         .sort({ createdAt: -1 })

        return { data };
    } catch (error) {
        return { error: err }
    }
};

module.exports = {
    addCheckIn,
    getNearbyUsers
}
