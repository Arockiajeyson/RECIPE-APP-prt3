const mongoose =require('mongoose')

const mod =new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})
const modes =mongoose.model("Recipp",mod)
module.exports=modes