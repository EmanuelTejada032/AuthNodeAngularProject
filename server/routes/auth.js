const {Router} = require('express');
const {body} = require('express-validator');
const { createUser, userLogin, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateToken } = require('../middlewares/validate-jwt');
const router = Router();


router.post('/register',[
    body('name').not().isEmpty().withMessage('name field is required').isLength({ min: 3 }).withMessage('name length should be at least 3 chars long'),
    body('email').isEmail().withMessage('Email field is required and should be a valid email'),
    body('password').isLength({ min: 6 }).withMessage('password field is required and should be 6 chars long'),
    validateFields
], createUser)

router.post('/login', [
    body('email').isEmail().withMessage('Email field is required and should be a valid email'),
    body('password').isLength({ min: 6 }).withMessage('password field is required and should be at least  10 chars long'),
    validateFields
] , userLogin)


router.get('/renewToken', validateToken, renewToken)

module.exports = router;