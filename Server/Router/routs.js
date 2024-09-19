const express = require('express')
const KeepNoteController = require('../Controllers/KeepNoteController')

const rout = express.Router()

rout.get('/allNotes', KeepNoteController.getAllNotes)
rout.get('/fillteredNote/:color', KeepNoteController.filteredNotes)
rout.delete('/deleteAllNotes', KeepNoteController.deleteAllNotes)
rout.delete('/deleteById/:id', KeepNoteController.deleteById)
rout.post('/addNote',KeepNoteController.addNote)

module.exports = rout