const express=require('express');
const app=express();
const cors=require('cors');
const dotEnv=require('dotenv');
const mongoose=require('mongoose');

//configure cors
app.use(cors());

///configure express
app.use(express());

//configure dotEnv
dotEnv.config({path:"./.env"});

const hostname=process.env.HOST_NAME;
const port=process.env.PORT;
require('./DB/corn');

app.use(express.json());

///using router files
app.use(require('./Router/auth'));

app.listen(port,hostname,()=>
{
    console.log(`the server url is http://${hostname}:${port}`)
})
