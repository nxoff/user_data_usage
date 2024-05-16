import '@/styles/comments.css'

import CommentBox from "@/components/CommentBox"
import prisma from "@/lib/prisma"

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
      <section className='comments-container'>
      {
        comments.map(comment => {
          return (
            <CommentBox
            key={comment.id}
            authorName={comment.author.username}
            content={comment.content}
            likes={comment.likes}
            dislikes={comment.dislikes}
            toWrap={
              comment.content.length >= 29 ? true : false
            }
            />
          )
        })
      }
      </section>
    </>
  )
}

export default Comments