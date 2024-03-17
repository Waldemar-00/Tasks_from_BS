const posts = [
  {
    id: 77,
    text: 'Some text',
    numComments: 17,
  },
  {
    id: 177,
    text: 'Some text',
    numComments: 27,
  },
  {
    id: 277,
    text: 'Some text',
    numComments: 37,
  },
]
function filterPostsWithReduce(posts, numComments) {
  return posts.reduce((postIds, post) => {
    if (post.numComments > numComments) {
      return [...postIds, post.id]
      //return postIds.concat(post.id)
    }
    return postIds //[...postIds]
  }, [])
}
console.log(filterPostsWithReduce(posts, 10))
console.log(filterPostsWithReduce(posts, 17))
console.log(filterPostsWithReduce(posts, 27))
