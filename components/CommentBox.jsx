const CommentBox = ({ authorName,  content, likes, dislikes}) => {
  return (
    <section className="comment-box">
      <h3>{authorName}</h3>
      <p>{content}</p>
      <span>{likes}</span>
      <span>{dislikes}</span>
    </section>
  )
}

export default CommentBox