const yup = require('yup');

const nameSchema = yup.object().shape({
    name: yup.string().required().min(1).max(5).matches(/^[A-Za-z]+$/),
});

function validateName(req, res, next) {
    const { name } = req.params;

    console.log('=== : ', nameSchema.isValidSync({ name }));
    nameSchema.isValidSync({ name }) ?
        next() :
        next(new Error('Invalid name'));
}

// TODO: add validators for remaining APIs

module.exports = {
    validateName
}