const jtoken =require('jsonwebtoken')

const JWTtoken =async(req,res,next)=>{
    try {
        const header =req.headers.authorization
        const veri =await jtoken.verify(header,"jey")
        if(veri){
            req.user = veri.data
            next()
        }else{
            return res.json('invalid token')
        }
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports=JWTtoken