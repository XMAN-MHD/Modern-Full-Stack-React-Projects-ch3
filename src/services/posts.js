import { Post } from '../db/models/post.js'

// CREATE
export async function createPost({ title, author, contents, tags }) {
  const post = new Post({ title, author, contents, tags })
  return await post.save()
}

// READ
async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  const sortValue = sortOrder === 'ascending' ? 1 : -1
  const sort = { [sortBy]: sortValue }
  return await Post.find(query).sort(sort)
}

// List all posts
export async function listAllPosts(options) {
  return await listPosts({}, options)
}

// List posts by author
export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

// List posts by tags
export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

// Get single post
export async function getPostById(postId) {
  return await Post.findById(postId)
}

// UPDATE
export async function updatePost(postId, update) {
  // Remove undefined fields from the update object
  const updateFields = {}
  for (const key of ['title', 'author', 'contents', 'tags']) {
    if (update[key] !== undefined) {
      updateFields[key] = update[key]
    }
  }
  return await Post.findOneAndUpdate(
    { _id: postId },
    { $set: updateFields },
    { new: true, runValidators: true },
  )
}