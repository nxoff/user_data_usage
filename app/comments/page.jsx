import CommentBox from "@/components/CommentBox"

async function getComments() {
  const comments = await prisma.comment.findMany({
    include: {
      author: {
        select: {username: true}
      }
    }
  })
  return comments
}

const Comments = async() => {
  const comments = await getComments()

  return (
    <>
      <h1>Comments!</h1>
      {
        comments.map(comment => {
          return (
            <CommentBox
            key={comment.id}
            authorName={comment.author.username}
            content={comment.content}
            likes={comment.likes}
            dislikes={comment.dislikes}
            />
          )
        })
      }
    </>
  )
}

export default Comments