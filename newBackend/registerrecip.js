const express =require('express')
const by=require('bcrypt')
const app =express()
const Schema=require('./Schemares')
app.post('/',async(req,res)=>{
    try {
        const finding =await Schema.findOne({email:req.body.email})
        if(finding){
            return res.json('email id is already there so please try with new one')
        }else{
            const hashing =await by.hash(req.body.password,10)
            req.body.password=hashing
            const add =await Schema.create(req.body)
            return res.json('register')
        }
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app