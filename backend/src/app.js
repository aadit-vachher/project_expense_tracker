const express=require('express')
require('dotenv').config()
const cors=require('cors')
const authRoutes=require('./routes/authRoutes')
const authMid=require('./middleware/authMid')  

const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)

app.get('/',(req,res)=>res.send('Backend running'))

const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
