const mongoose = require("mongoose");



const dbConnection = async() => {
    try {
        mongoose.connect(process.env.LOCALCONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("Database is up");
    } catch (error) {
        console.log(error);
        throw new Error('Database error on start');
    }
}

module.exports = {
    dbConnection
}