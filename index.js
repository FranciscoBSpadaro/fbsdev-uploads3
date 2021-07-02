require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()

// multer importado para tratar errorHandler de arquivo grande 
// const multer = require('multer')



/**
 * Database setup
 */

 try {
  mongoose.connect(
   process.env.MONGO_URL,
   {
     useUnifiedTopology: true,
     useNewUrlParser: true
    }
    )
    } catch (error) {
      handleError(error)
    }


app.use(cors())

 // liberar request to XMLHttpRequest da origin do meu front end
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)

app.use(require('./routes'))

//process.env.port para o heroku escolher a porta que vai usar
app.listen(process.env.PORT || 3000)
// error handlers
// codigo de erro no upload caso arquivo for muito grande
/* app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
  res.status(418).json('File is too Large !!')
}}) */