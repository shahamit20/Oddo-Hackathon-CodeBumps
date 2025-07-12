const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/swaps", require("./routes/swapRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));


mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
   console.log('Mongodb connected successfully')
   app.listen(process.env.PORT || 9000, ()=>{
    console.log(`Server running on PORT ${process.env.PORT}`)
   });
}).catch((err)=>{
    console.log("Error connecting to mongodb" , err);
})
