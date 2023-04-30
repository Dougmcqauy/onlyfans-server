const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
    },
    realName:{
        type:String,
    },
    status:{
        type:String,
    },
    bio:{
        type:String,
    },
    avatar:{
        type:String,
    },
    cover:{
        type:String,
    },
    totalImages:{
        type:String,
    },
    totalVideos:{
        type:String,
    },
    totalLikes:{
        type:String,
    },
    profileStats:{
        type:Array,
    },
    price:{
        type:String,
    }

},
{timestamps:true})

module.exports = mongoose.model("User", UserSchema)