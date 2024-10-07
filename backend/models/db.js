const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("database is connected")
}).catch((err)=>{
    console.log('database connection is failed',err)
})