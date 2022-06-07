const express = require('express');
const cors = require('cors');
const path = require("path");
const { dbConnection } = require('./db/config');

require('dotenv').config();


const app = express();
dbConnection();


const authRoutes =  require('./routes/auth');



app.use(express.static('public'))


app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth',  authRoutes );

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})



const PORT = process.env.PORT || 5000


app.listen( PORT , () =>{
    console.log(`Server listening por: ${PORT}`);
})