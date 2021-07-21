if (process.env.APP_URL !== 'http://localhost:3000') {
require('dotenv').config()
}
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()

// multer importado para tratar errorHandler de arquivo grande 
const multer = require('multer')


/**liberar request to XMLHttpRequest da origin do meu front end
app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://fbsdev-uploadss3.herokuapp.com')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers',  'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if ('OPTIONS' == req.method) {
  res.sendStatus(200)
  } else {
    app.use(cors())
    next()
  }
})

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
      console.log(error)
    }


// app.use(cors())
app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://fbsdev-uploadss3.herokuapp.com')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers',  'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if ('OPTIONS' == req.method) {
  res.sendStatus(200)
  } else {
    app.use(cors())
    next()
  }
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/files',express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.use(require('./routes'))

//process.env.port para o heroku escolher a porta que vai usar
app.listen(process.env.PORT || 3000)
// error handlers
// codigo de erro no upload caso arquivo for muito grande
app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
  res.status(418).json('File is too Large !!')
}})
