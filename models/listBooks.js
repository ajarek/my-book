const mongoose=require('mongoose')
const myBooksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   author:{
        type:String,
        required:true
    },
        
})
module.exports = new mongoose.model('myBooks',myBooksSchema)