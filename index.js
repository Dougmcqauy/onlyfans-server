const express = require("express")
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")

const port = process.env.PORT || 8080

//db connection 
mongoose.connect('mongodb+srv://jonnysins2024:0774450965@cluster0.v50bq57.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true })
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Db is connected successfully")
});


//routes imports
const searchRoute = require("./routes/search")


//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

// initialising routes
app.use("/api/search",searchRoute);




app.listen(port,()=>{
  console.log("server running on port"+port)
})