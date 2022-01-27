const { response } = require('express');
const User = require('../models/User');


const createUser = async (req, res = response) => {
    const {name, email, password} = req.body;

    try {

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'There is already a user with this email'
            })
        }

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).json({
            ok: true,
            msg: 'User succesfully created',
            uid: newUser.id,
            name
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Server error, we are working on it, wait a little until it\'s fixed'
        });    
    }

    
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