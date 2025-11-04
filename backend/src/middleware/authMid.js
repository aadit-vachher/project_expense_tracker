const jwt=require('jsonwebtoken')
const authMid=(req,res,next)=>{
  try{
    const tok=req.headers.authorization?.split(' ')[1]
    if(!tok){
      return res.status(401).json({message:'No token'})}
    const decoded=jwt.verify(tok,process.env.JWT_SECRET)
    req.user=decoded
    next()
  }catch(err){
    res.status(401).json({message:'Invalid token'})
  }
}

module.exports=authMid
