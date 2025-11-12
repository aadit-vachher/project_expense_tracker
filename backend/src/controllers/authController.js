const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const signup=async(req,res)=>{
  const {name,email,password}=req.body
  try{
    const data1=await prisma.user.findUnique({where:{email}})
    if(data1){
    return res.status(400).json({message:'Email taken'})
  } 
  const hashpass=await bcrypt.hash(password,10)
  const user=await prisma.user.create({
    data:{name,email,password:hashpass}
  })
  const token=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
  console.log(token) 
  res.status(201).json({token})
}
catch(err){
  res.status(500).json({message:'Signup failed'})
}}
const login=async(req,res)=>{
  const {email,password}=req.body
  let user
  try{
    user=await prisma.user.findUnique({where:{email}})
    if(!user) return res.status(404).json({message:'User not found'})
    const check=await bcrypt.compare(password,user.password)
    if(!check) return res.status(400).json({message:'Invalid credentials'})
    const token=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
    res.json({token}) 
  }catch(err){
    console.log(err)
    res.status(500).json({message:'Login failed'})
  }
}


module.exports={signup,login}
