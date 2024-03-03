const express = require('express');
const cors = require("cors");
const mainRoute = require('./routes/index');


const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1/", mainRoute);

app.listen(3000, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ 3000) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);

