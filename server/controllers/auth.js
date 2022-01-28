const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {generateJWT} = require('../helpers/jwt-generator')


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

        //Password Hash
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync( password, salt);

        //generate JWT
        console.log("new User ID", newUser.id);
        const JWT = await generateJWT(newUser.id, newUser.name);

        await newUser.save();

        return res.status(201).json({
            ok: true,
            msg: 'User succesfully created',
            uid: newUser.id,
            name,
            token: JWT
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