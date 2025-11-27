const express=require('express')
require('dotenv').config()
const cors=require('cors')
const authRoutes=require('./routes/authRoutes')
const authMid=require('./middleware/authMid')  
const favoriteRoutes=require('./routes/favoriteRoutes')
const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)

const expenseRoutes=require('./routes/expenseRoutes')
app.use('/api/expense',expenseRoutes)

app.get('/',(req,res)=>res.send('Backend running'))
app.use('/api/favorite',favoriteRoutes)
const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
