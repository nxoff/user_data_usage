'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const CommentBox = ({ authorName,  content, likes, dislikes, toWrap}) => {
  // const [commentContentWrap, setCommentContentWrap] = useState(false)
  const [wrappedContent, setWrappedContent] = useState(content)

  // useEffect(() => {
  //   if (content.length >= 29) {
  //     setCommentContentWrap(true)
  //   }
  // }, [])

  // for (let i = 0; i < content.length; i++) {
  //   console.log(content.charAt(i));
  // }

  return (
    <header className="comment-box">
      <div className="comment-content-wrapper">
        <h2>{authorName}</h2>
        {
          toWrap ?
          <>
            <p style={{height: '20px'}}>{content.slice(0, 48)}
              <span className="comment-read-more">czytaj dalej</span>
            </p>
          </>
          :
          <p style={{height: '20px'}}>{content}</p>
        }
      </div>
      <section className="comments-interactive-section">
        <div className="likes-wrapper">
          <Image
            src='heart.svg'
            width={20}
            height={20}
            alt="like"
          />
          <span>{likes}</span>
        </div>
        <div className="dislikes-wrapper">
          <Image
            src='dislike.svg'
            width={20}
            height={20}
            alt="like"
          />
          <span>{dislikes}</span>
        </div>
      </section>
    </header>
  )
}

export default CommentBox