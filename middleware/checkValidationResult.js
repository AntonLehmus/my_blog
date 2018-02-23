const { check, validationResult } = require('express-validator/check');


module.exports = checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }
    next();
};