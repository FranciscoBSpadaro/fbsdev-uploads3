const mongoose = require('mongoose')
const aws = require('aws-sdk')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const s3 = new aws.S3()

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

PostSchema.pre('save', async function () {
  if (process.env.STORAGE_TYPE === 's3') {
    try {
      const response = await s3.putObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key
        })
        .promise()
      console.log(response.status)
    } catch (response_1) {
      console.log(response_1.status)
    }
  } 
})

PostSchema.pre('remove', async function () {
  if (process.env.STORAGE_TYPE === 's3') {
    try {
      const response = await s3.deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key
        })
        .promise()
      console.log(response.status)
    } catch (response_1) {
      console.log(response_1.status)
    }
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key)
    )
  }
})

module.exports = mongoose.model('Post', PostSchema)
