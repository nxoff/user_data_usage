'use client'

import '@/styles/signIn.css'
import { useRef, useState } from 'react'

const SignIn = () => {
  const usernameRef = useRef('')
  const emailRef = useRef('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formUsername = usernameRef.current.value
    const formEmail = emailRef.current.value

    try {
      fetch('../api/add-user', {method: 'POST', headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({formUsername, formEmail})
    })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <h1>Welcome to the Sign In Page!</h1>
      <form onSubmit={handleSubmit}>
        <h3>Choose Username</h3>
        <input type="text" name="username" placeholder="username" ref={usernameRef} />
        <h3>Type Your Email</h3>
        <input type="text" name="email" placeholder="email" ref={emailRef} />
        <input type="submit" value="Sign In -->" />
      </form>
    </section>
  )
}

export default SignIn

