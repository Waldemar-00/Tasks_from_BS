const posts = [
  {
    id: 137,
    post: 'Not for me',
  },
  {
    id: 982,
    post: "It's not good deal",
  },
  {
    id: 88,
    post: 'I ready to work',
  },
]
const findPost = (id, posts) => posts.find((post) => post.id === id)
console.log(findPost(88, posts))
console.log(findPost(99, posts))
