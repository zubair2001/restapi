const express = require("express");
require("./db/conn");

const MensRanking = require('./models/mens');

const app = express();
const port = process.env.PORT || 3000;

//we will handle post request now
app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        addingMensRecords.save();
    }catch(e){
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})