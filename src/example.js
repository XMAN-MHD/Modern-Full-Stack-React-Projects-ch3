import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const posts = await Post.find({})
const firstPostId = posts[0]._id

await Post.findByIdAndUpdate(firstPostId, {
  $set: { title: 'Hello Mongoose again!' },
})

const firstPost = await Post.findById(firstPostId)

console.log(firstPost)
