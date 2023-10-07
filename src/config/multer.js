const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')

//variaveis ambiente STORAGE_TYPE local ou s3
const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb) => {
       console.log(file);
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)
        // criando novo nome ao arquivo , com codigo hexadecimal e remover o nome todo do arquivo e manter apenas o ponto final e a extensão
        file.key = `${hash.toString('hex')}-${file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)}`

        cb(null, file.key)
      })
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const fileName = `${hash.toString('hex')}-${file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)}`

        cb(null, fileName)
      })
    }
  })
}

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 1024 * 1024 * 8 //8mb
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/bmp',
      'image/gif'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)   // if allowedMimes 200 ok
    } else {
      cb(null, false) // retorna msg de erro definido no routes.post catch error ' invalid request '
    }
  }
}
