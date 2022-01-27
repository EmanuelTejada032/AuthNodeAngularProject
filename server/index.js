const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");

require("dotenv").config();


const app = express();
dbConnection();


const authRoutes =  require('./routes/auth');



app.use(express.static('public'))


app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth',  authRoutes );





const PORT = process.env.PORT || 5000


app.listen( PORT , () =>{
    console.log(`Server listening por: ${PORT}`);
})