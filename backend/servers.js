const cors = require('cors')
const dbConnect = require('./config/dbConnect')
const express = require('express')
const errorHandler  =require('./middleware/errorMiddleware')
const orderRoutes = require("./routes/orderRoutes");
const driverRoutes = require("./routes/driverRoutes");
const deliveryAdviceNoteRoutes = require("./routes/deliveryAdviceRoutes");
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 2500
const authRoutes = require('./routes/user_test_route');

dbConnect()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth', authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/deliveryAdviceNotes", deliveryAdviceNoteRoutes);



app.use(errorHandler)
app.listen(PORT , ()=>{
    console.log(`🤖 Server is up and running on port ${PORT} 🤖`);
})