const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'test secret'

function generateJWT(name) {
    return jwt.sign({ name }, SECRET, { algorithm: 'HS256', expiresIn: '1d' });
}

module.exports.generateJWT = generateJWT;
