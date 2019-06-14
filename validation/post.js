const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput (data) {
    let errors = {};

    data.body = validText(data.text) ? data.text : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body of post must not be empty";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}