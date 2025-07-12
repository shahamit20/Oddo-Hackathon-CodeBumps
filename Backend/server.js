const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.PORT , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
   console.log('Mongodb connected successfully')
   app.listen(process.env.PORT || 9000, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
   });
}).catch((err)=>{
    console.log("Error connecting to mongodb");
})