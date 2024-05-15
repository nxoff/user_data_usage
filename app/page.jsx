import { currentUser } from "@clerk/nextjs/server"

const Home = async() => {
  const user = await currentUser()

  if (!user) return <div style={{color: 'red'}}>Not Signed In</div>

  return (
    <>
      <h1>Title</h1>
    </>
  )
}

export default Home