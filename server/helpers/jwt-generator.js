const jwt = require('jsonwebtoken')

const generateJWT = (uid, name) => {
    const payload = {uid, name};

    // Using a promise to return token if everything ok, and return error if something wrong by resolving or rejecting promise
    //instead of working with the callbacks
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn:'24h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(token);
        });
    })
}


module.exports = {
    generateJWT
}
