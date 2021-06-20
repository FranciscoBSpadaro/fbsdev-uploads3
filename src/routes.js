const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const Post = require('./models/Post')

routes.get('/posts', async (req, res) => {
  const posts = await Post.find()

  return res.json(posts)
})

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key, location: url = '' } = req.file

  const post = await Post.create({
    name,
    size,
    key,
    url
  })

  return res.json(post)
})
// adicionado try e catch caso nao achar o id do objeto para deletar para nao derrubar o servidor
routes.delete('/posts/:id', async (req, res) => {
  try{
  const post = await Post.findById(req.params.id)
  await post.remove()
  return res.status(200).send('Image Deleted')
  }
  catch (error) {
  return res.status(400).send('ID Not Found or invalid ')
}

return res.send();
});


module.exports = routes
