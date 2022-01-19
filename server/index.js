const express = require("express");
const app = express();




app.get('/login', (req, res ) => {

    console.log(req)

    res.send({
        ok:true,
        msg:"everything ok",
        user: "5a5ds42135d4sd"
    });
});



const PORT = 5000 || process.env.PORT


app.listen( PORT , () =>{
    console.log(`Server listening por: ${PORT}`);
})