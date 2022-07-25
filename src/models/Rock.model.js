const mongoose = require("mongoose");

const rockSchema = new mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    img3:{type:String,required:true},
    img4:{type:String,required:true},
    img5:{type:String,required:true},
    img6:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    rating:{type:Number,required:true},
    review:{type:Number,required:true},
    price:{type:Number,required:true},
    price1:{type:Number,required:true},
    save:{type:Number,required:true},
    discount:{type:Number,required:true},

},{
    versionKey:false,
    timestamps:true
})

const Rock = mongoose.model("rock",rockSchema);
module.exports = Rock;