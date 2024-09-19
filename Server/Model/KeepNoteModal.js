const { default: mongoose } = require('mongoose')
const mogoose = require('mongoose')

const keepNoteSchema  = mongoose.Schema({
  title:{
    type:String
  },
  discription:{
    type:String
  },
  color:{
    type:String
  },
  colorName:{
    type:String
  }
})

module.exports = mongoose.model('Notes',keepNoteSchema)