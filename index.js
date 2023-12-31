const express=require('express');
require("dotenv").config();
var cors=require('cors')
const app=express();
const port=process.env.port || 5000;
const connectToMongo=require('./db');
// const mongoURI="mongodb://localhost:27017/notebook";
// const mongoURI="mongodb+srv://someshgupta9234:somesh@91@cluster1.95fp9ij.mongodb.net/"

app.use(cors());
app.use(express.json());
//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port,()=>{
    console.log(`it is listening at ${port}`);
})
connectToMongo(process.env.dbUrl);
