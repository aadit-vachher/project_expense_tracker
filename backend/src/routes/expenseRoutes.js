const express=require('express')
const router=express.Router()
const {addExpense,getExpenses}=require('../controllers/expenseController')
const authMid=require('../middleware/authMid')
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

router.post('/addexpense',authMid,addExpense)      
router.get('/allexpenses',authMid,getExpenses)   
router.delete('/deleteexpense/:id',authMid,async(req,res)=>{
  const {id}=req.params
  const userId=req.user.userId
  try{
    await prisma.expense.deleteMany({
      where:{id:Number(id),userId:userId}
    })
    res.json({message:'Deleted'})
  }catch(err){
    res.status(400).json({message:'Delete failed'})
  }
})

module.exports=router
