const router = require('express').Router()
const ListBooks = require('../models/listBooks')

router.get('/compose',(req,res)=>{
    res.render('addBook')
})
.post('/compose',(req,res)=>{
    const{title,author}=req.body
    if(!title || !author  )
     return res.send('Plase enter all the required credetnials!')
     const newListBooks =new ListBooks({title,author})
     newListBooks.save()
     .then(()=>{
         console.log('Record Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})
module.exports=router