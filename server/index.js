const express = require("express");
const app = express();




const authRoutes =  require('./routes/auth')








app.use("/api/auth",  authRoutes );





const PORT = 5000 || process.env.PORT


app.listen( PORT , () =>{
    console.log(`Server listening por: ${PORT}`);
})