const express=require('express')
const router=express.Router()
const authMid=require('../middleware/authMid')
const {getFavorites,addFavorite,updateFavorite,deleteFavorite}=require('../controllers/favoriteController')

router.get('/all',authMid,getFavorites)
router.post('/add',authMid,addFavorite)
router.put('/update/:id',authMid,updateFavorite)
router.delete('/delete/:id',authMid,deleteFavorite)
module.exports=router
