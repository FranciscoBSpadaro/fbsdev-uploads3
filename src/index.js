require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()
// multer importado para tratar errorHandler de arquivo grande 
const multer = require('multer')


/**
 * Database setup
 */
mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.use(require('./routes'))


app.listen(3000)
// codigo de erro no upload caso arquivo for muito grande
app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
  res.status(418).send('File is Too Large!')
}})