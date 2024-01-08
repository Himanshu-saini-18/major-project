const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const passportLoalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
      email:{
        type:String,
        required:true,
      }
});
userSchema.plugin(passportLoalMongoose);
module.exports= mongoose.model("User",userSchema);