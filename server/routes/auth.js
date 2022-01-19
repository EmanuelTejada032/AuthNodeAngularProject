const {Router} = require("express");
const { createUser, registerUser, renewToken } = require("../controllers/auth");
const router = Router();


router.post('/register', createUser)


router.post('/login', registerUser)

router.get('/renewToken', renewToken)

module.exports = router;