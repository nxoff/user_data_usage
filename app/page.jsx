import { currentUser } from "@clerk/nextjs/server"

import Link from "next/link"

const Home = async() => {
  const currUser = await currentUser()

  if (!currUser) return (
    <>
      <h3 style={{color: 'red'}}>You have to sign in first!</h3>
      <Link href="/sign-in">Sign In!</Link>
    </>
  )

  return (
    <>
      <h1>Welcome to the Home Page!</h1>
    </>
  )
}

export default Home