if (process.env.NODE_ENV !== 'production') { // se ambiente for difente de produção então use o dotenv , no caso ambiente development
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

// database setup
/** 
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
    }*/


    async ()=>{
      try{
          const conn = await mongoose.connect(process.env.MONGO_URL,{
              //must add in order to not get any error masseges:
              useUnifiedTopology:true,
              useNewUrlParser: true,
              useCreateIndex: true
          })
          console.log(`mongo database is connected!!! ${conn.connection.host} `)
      }catch(error){
          console.error(`Error: ${error} `)
          process.exit(1) //passing 1 - will exit the proccess with error
      }
  
  }


    
// liberar request to XMLHttpRequest da origin do meu front end
/** 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS')
  app.use(cors())
  next()
})  */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

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
