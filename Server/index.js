const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const rout = require('./Router/routs')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL).then(()=> console.log("dbConnected"))



app.use(cors())
app.use(morgan('combined'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(rout)
app.use('/*', (req, res)=> res.status(404).send('Note found'))


app.listen(PORT, ()=> console.log('server listening at 3000'))