const { checkSchema, validationResult } = require('express-validator');

const addContactShema = {
    email: {
        isEmail: {
            errorMessage : "this email is invalid"
        }
    },
    subject: {
        notEmpty: {
            errorMessage : "Subject cannot be empty"
        }
    },
    content: {
        notEmpty: {
            errorMessage: "Content cannot be empty"
        }
    }
};

//custom errors messages
const customErrors = errors => {
    const myErrors = {};
    errors.map((error) => {
       
        myErrors[error.param] = {msg: error.msg};
    });

    return myErrors;
};

//validation Middeleware
const validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({
            errors: customErrors(errors.errors)
        });
    };
};

exports.contactValidation = validate(checkSchema(addContactShema));