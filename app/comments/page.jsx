import '@/styles/comments.css'

import CommentBox from "@/components/CommentBox"
import { getComments } from '../api/comments'

const COMMENT_CHARACTERS_CUT = 47

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
              comment.content.length >= COMMENT_CHARACTERS_CUT ? true : false
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