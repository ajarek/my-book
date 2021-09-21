const router = require('express').Router()
const ListBooks = require('../models/listBooks')

router.get('/delete/:id',(req,res)=>{
    const{id}=req.params
    ListBooks.deleteOne({_id:id})
    .then(()=>{
        console.log('Deleted record successfully!')
        res.redirect("/")
    })
     .catch((err)=>console.log(err))
    
})
module.exports=router