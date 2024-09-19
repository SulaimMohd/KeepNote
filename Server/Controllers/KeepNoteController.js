const keepNoteModal = require('../Model/KeepNoteModal');
const findColorName = require('../Util/findColor');

const stringToColour = (str) => {
  let hash = 0;
  str.split('').forEach(char => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash)
  })
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, '0')
  }
  return colour
}

module.exports = {
  addNote:async function(req, res){
    try {
      
      const body = req.body
      console.log(body)
      const colorName = await findColorName(body.color)
      const dbRes = await keepNoteModal.create({...body, colorName:colorName})
      return res.status(200).send('Note added Successfully')
    } catch (err) {
      console.log(err)
    }
  },
  getAllNotes:async function(req,res){
    try {
      const dbRes = await keepNoteModal.find({})
      return res.json(dbRes)
    } catch (err) {
      console.log(err)
    }
  },
  filteredNotes:async function(req, res){
    try {
      const {color} = req.params
      console.log(color)

      const dbRes = await keepNoteModal.find({colorName: color})
      console.log(dbRes)

      res.json(dbRes)
    } catch (err) {
      console.log(err)
    }
  },
  deleteAllNotes:async function(req, res){
    try {
      await keepNoteModal.deleteMany({})
      res.send('Notes Are cleard')
    } catch (err) {
      console.log(err)
    }
  },
  deleteById:async function(req, res){
    try {
      const {id} = req.params
      await keepNoteModal.deleteOne({_id:id})
      res.send('Note Deleted')
    } catch (err) {
      console.log(err)
    }
  }
}