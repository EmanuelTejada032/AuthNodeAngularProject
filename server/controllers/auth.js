const { response } = require("express");


const createUser = (req, res = response) => {
    const {name, email, password} = req.body;
    res.json({
        ok: true,
        msg: "User created"
    })
}


const userLogin = (req, res = response) => {
    const { email, password} = req.body;
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