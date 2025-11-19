import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  getPostById,
} from '../services/posts.js'

 export function postsRoutes(app) {
    app.get('/posts', async (req, res) => {
        const { sortBy, sortOrder, author, tag } = req.query
        const options = { sortBy, sortOrder }
        try {