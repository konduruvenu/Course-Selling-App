const express = require('express');
//const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = express();

app.use(express.json()); //to pass post requests
app.use(cors());

app.use("/admin",adminRouter);
app.use("/user",userRouter);



// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://venumadhavi333konduru:RzK4FtJxPFzSoubS@cluster0.4zoqhhi.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });



// User routes
app.listen(3000, () => console.log('Server running on port 3000'));

// mongodb+srv://venumadhavi333konduru:RzK4FtJxPFzSoubS@cluster0.4zoqhhi.mongodb.net/