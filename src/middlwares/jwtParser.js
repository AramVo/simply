const jwt = require('express-jwt');

const SECRET = process.env.SECRET || 'test secret'

module.exports =  jwt({ secret: SECRET, algorithms: ['HS256'] })
