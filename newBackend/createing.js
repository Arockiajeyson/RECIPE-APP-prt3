const schema =require('./recipeSchema')
const express =require('express')
const jtokens =require('./JWT')

const app =express()
app.get('/getingDa',jtokens,async(req,res)=>{
    try {
        const filAll =await schema.find()
        return res.json(filAll)
    } catch (error) {
        return res.json(error.message)
    }
})
app.post('/postingData',jtokens,async(req,res)=>{
    try {
        // console.log(req.body)
        const creating = await schema.create(req.body)
        creating.save()
        return res.json('created')
    } catch (error) {
        res.json(error.message)
    }
})
module.exports=app