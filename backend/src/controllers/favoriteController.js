const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()
const getFavorites=async(req,res)=>{
  const userId=req.user.userId
  try{
    const data=await prisma.favorite.findMany({
      where:{userId},
      orderBy:{createdAt:'desc'}
    })
    res.status(200).json(data)
  }catch(err){
    res.status(500).json({message:'Could not fetch favourites'})
  }
}

const addFavorite=async(req,res)=>{
  const userId=req.user.userId
  const {amount,category,description,date}=req.body
  try{
    const fav=await prisma.favorite.create({
      data:{
        amount:Number(amount),
        category,
        description,
        date:date?new Date(date):new Date(),
        userId
      }
    })
    res.status(201).json(fav)
  }catch(err){
    res.status(500).json({message:'Could not add favourite'})
  }
}

const updateFavorite=async(req,res)=>{
  const userId=req.user.userId
  const {id}=req.params
  const {amount,category,description}=req.body
  try{
    const fav=await prisma.favorite.updateMany({
      where:{id:Number(id),userId},
      data:{
        amount:Number(amount),
        category,
        description
      }
    })
    if(fav.count===0) return res.status(404).json({message:'Favourite not found'})
    res.json({message:'Favourite updated'})
  }catch(err){
    res.status(500).json({message:'Could not update favourite'})
  }
}

const deleteFavorite=async(req,res)=>{
  const userId=req.user.userId
  const {id}=req.params
  try{
    const fav=await prisma.favorite.deleteMany({
      where:{id:Number(id),userId}
    })
    if(fav.count===0) return res.status(404).json({message:'Favourite not found'})
    res.json({message:'Favourite deleted'})
  }catch(err){
    res.status(500).json({message:'Could not delete favourite'})
  }
}

module.exports={getFavorites,addFavorite,updateFavorite,deleteFavorite}
