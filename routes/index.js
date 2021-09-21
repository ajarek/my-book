const router = require('express').Router()
const ListBooks = require('../models/listBooks')
const mysort = { author:1}

router.get('/',async(req,res)=>{
    const allRecord=await ListBooks.find({}).sort(mysort)
    res.render('displayBooks',{books:allRecord}) 
})
module.exports=router