const { body, param } = require('express-validator/check')

exports.validate = (method) => {
    switch (method) {
        case 'storeUser':
        {
            return [
              
                body('email', 'Invalid email').exists().isEmail(),
               
            ]
        }
    
    }
}
