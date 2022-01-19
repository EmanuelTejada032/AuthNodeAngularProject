const { response } = require("express");

const createUser = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: "User created"
    })
}


const registerUser = (req, res = response) => {
    
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
    registerUser,
    renewToken
}