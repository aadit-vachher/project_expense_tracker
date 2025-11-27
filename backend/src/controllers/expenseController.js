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




const getExpenses = async (req, res) => {
  const userId = req.user.userId
  const sort = req.query.sort
  const category = req.query.category
  let where = { userId }
  if (category) where.category = category
  let orderBy
  if (sort === 'asc') orderBy = { amount: 'asc' }
  if (sort === 'desc') orderBy = { amount: 'desc' }
  try {

    const data = await prisma.expense.findMany({
      where,
      orderBy: orderBy ? orderBy : undefined
    })
    res.status(200).json(data)
  } catch(err){
    res.status(500).json({ message: 'Could not fetch expenses' })
  }
}


module.exports={addExpense,getExpenses}
