const { response } = require('express'); // To access all response properties when using req. on methods (To get better typed data)
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
                message: 'There is already a user with this email'
            })
        }
        
        const newUser = new User(req.body);

        //Password Hash
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync( password, salt);

        //generate JWT
        const JWT = await generateJWT(newUser.id, newUser.name);

        await newUser.save();

        return res.status(201).json({
            ok: true,
            message: 'User succesfully created',
            uid: newUser.id,
            name,
            email: newUser.email,
            token: JWT
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Server error, we are working on it, wait a little until it\'s fixed'
        });    
    }

    
}


const userLogin = async (req, res = response) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
           return res.status(400).json({
                ok: false,
                message: 'Wrong credentials, verify user or password'
            });    
        }
        const validatePassword = bcrypt.compareSync(password, user.password);
        if(!validatePassword){
            return res.status(400).json({
                 ok: false,
                 message: 'Wrong credentials, verify user or password'
             });    
         }

        const JWT = await generateJWT(user.id, user.name);

        return res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            email: user.email,
            token: JWT
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Server error, we are working on it, wait a little until it\'s fixed'
        })
    }
}

const renewToken = async (req, res = response) => {
    const {uid, name } = req;
    const JWT = await generateJWT(uid, name);
    console.log(JWT);
    const user = await User.findOne({uid});
    res.json({
        ok: true,
        message: 'Renew token',
        uid,
        name,
        email: user.email,
        newToken: JWT
    })
}

module.exports = {
    createUser,
    userLogin,
    renewToken
}