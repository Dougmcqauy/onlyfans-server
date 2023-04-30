const mongoose = require("mongoose");

const UsernamesSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    }

},
{timestamps:true})

module.exports = mongoose.model("Usernames", UsernamesSchema)