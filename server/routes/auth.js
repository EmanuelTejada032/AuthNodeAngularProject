const {Router} = require("express");
const {body} = require("express-validator");
const { createUser, userLogin, renewToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");
const router = Router();


router.post('/register',[
    body('name').not().isEmpty().withMessage('name field is required').isLength({ min: 5 }).withMessage('name length should be at least 6 chars long'),
    body('email').isEmail().withMessage('Email field is required and should be a valid email'),
    body('password').isLength({ min: 10 }).withMessage('password field is required and should be 10 chars long'),
    validateFields
], createUser)

router.post('/login', [
    body('email').isEmail().withMessage('Email field is required and should be a valid email'),
    body('password').isLength({ min: 10 }).withMessage('password field is required and should be at least  10 chars long'),
    validateFields
] , userLogin)


router.get('/renewToken', renewToken)

module.exports = router;