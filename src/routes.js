const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const Post = require('./models/Post')

routes.get('/posts', async (req, res) => {
  try{
  const posts = await Post.find()
  return res.json(posts)
  }
  catch (error) {
  return res.status(500).json('Server Error')
}
})
// adicionado try catch para evitar error para request vazio
routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  try{
  const { originalname: name, size, key, location: url = '' } = req.file

  const post = await Post.create({
    name,
    size,
    key,
    url
  })

  return res.json(post)
}
catch (error) {
  return res.status(400).json('Invalid Request')
}
})
// adicionado try e catch caso nao achar o id do objeto para deletar para nao derrubar o servidor
routes.delete('/posts/:id', async (req, res) => {
  try{
  const post = await Post.findById(req.params.id)
  await post.remove()
  return res.status(200).json('Image Deleted')
  }
  catch (error) {
  return res.status(400).json('ID Not Found or invalid ')
}
});


module.exports = routes
