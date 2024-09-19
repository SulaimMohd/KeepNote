const keepNoteModal = require('../Model/KeepNoteModal')


module.exports = {
  addNote:async function(req, res){
    try {
      const body = req.body
      console.log(body)
      const dbRes = await keepNoteModal.create(body)
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

      const dbRes = await keepNoteModal.find({color: color})
      console.log(dbRes)

      res.json(dbRes)
    } catch (err) {
      console.log(err)
    }
  }
}