const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const addExpense=async(req,res)=>{
  const {amount,category,description}=req.body
  const userId=req.user.userId
  const exp=await prisma.expense.create({
    data:{amount:Number(amount),category,description,userId}
  })
  res.status(201).json(exp)
}
const getExpenses=async(req,res)=>{
  const userId=req.user.userId
  const data=await prisma.expense.findMany({where:{userId}})
  res.json(data)
}
module.exports={addExpense,getExpenses}
