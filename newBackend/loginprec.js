const express =require('express')

const app =express()
const Schema=require('./Schemares')
const byc=require('bcrypt')
const jsontoken=require('jsonwebtoken')
app.post('/',async(req,res)=>{
    try {
        const finding =await Schema.findOne({email:req.body.email})
        if(finding){
            const comp=await byc.compare(req.body.password,finding.password)
            if(comp){
                const token =await jsontoken.sign({
                    exp:Math.floor(Date.now()/1000) +(60 * 60),
                    data:finding._id
                },"jey")
                return res.json(["logged-in",token])
            }else{
                return res.json('password Worng')
            }
        }else{
            return res.json('register first')
        }
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app