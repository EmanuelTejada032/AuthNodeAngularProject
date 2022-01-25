const { response } = require("express");
const {validationResult} = require("express-validator");


const createUser = (req, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.array()
        })
    }
    const {name, email, password} = req.body;
    console.log(name, email, password);
    res.json({
        ok: true,
        msg: "User created"
    })
}


const userLogin = (req, res = response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.array()
        })
    }
    const { email, password} = req.body;
    console.log(email, password);
    res.json({
        ok: true,
        msg: "User logged in"
    })
}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: "Renew token"
    })
}

module.exports = {
    createUser,
    userLogin,
    renewToken
}