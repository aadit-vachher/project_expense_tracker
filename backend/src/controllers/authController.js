const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const signup=async(req,res)=>{
  const {name,email,password}=req.body
  const userExists=await prisma.user.findUnique({where:{email}})
  if(userExists) return res.status(400).json({message:'Email already taken'})
  const hashedPassword=await bcrypt.hash(password,10)
  const user=await prisma.user.create({
    data:{name,email,password:hashedPassword}
  })
  const token=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.status(201).json({token})
}

const login=async(req,res)=>{
  const {email,password}=req.body
  const user=await prisma.user.findUnique({where:{email}})
  if(!user) return res.status(404).json({message:'User not found'})
  const isMatch=await bcrypt.compare(password,user.password)
  if(!isMatch) return res.status(400).json({message:'Invalid credentials'})
  const token=jwt.sign({userId:user.id},process.env.JWT_SECRET,{expiresIn:'7d'})
  res.json({token})
}

module.exports={signup,login}
