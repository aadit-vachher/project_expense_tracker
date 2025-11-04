const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const signup=async(req,res)=>{
  const {name,email,password}=req.body
  const data1=await prisma.user.findUnique({where:{email}})
  if(data1){
    return res.status(400).json({message:'Email taken'})
  } 
  const hashpass=await bcrypt.hash(password,10)
  const user=await prisma.user.create({
    data:{name,email,password:hashpass}
  })
  const tok=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
  console.log(tok) 
  res.status(201).json({tok})
}

const login=async(req,res)=>{
  const {email,password}=req.body
  const user=await prisma.user.findUnique({where:{email}})
  if(!user) return res.status(404).json({message:'User not found'})
  const check=await bcrypt.compare(password,user.password)
  if(!check) return res.status(400).json({message:'Invalid credentials'})
  const tok=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.json({tok})
}

module.exports={signup,login}
