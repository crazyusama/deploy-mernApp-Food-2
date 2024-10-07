const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
require('./models/db')
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./error');
const reservationRouter = require('./routes/reservationRoute');



PORT = process.env.PORT || 9090 ;

app.use(bodyParser.json());
app.use(cors());
app.use(errorMiddleware)
app.use("/api",reservationRouter)

app.listen(PORT,()=>{
    console.log("PORT is succcessfully runin")
})