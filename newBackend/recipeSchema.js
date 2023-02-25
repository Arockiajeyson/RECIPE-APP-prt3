const mongoose =require('mongoose')

const mod =new mongoose.Schema({
    Title:{type:String},
    Author:{type:String},
    Img:{type:String},
    Ingredients:{type:String},
    Instructions:{type:String}
})
const modes =mongoose.model("Creatingscg",mod)
module.exports=modes