import prisma from '../lib/prisma';

import { currentUser } from "@clerk/nextjs/server"

export const getStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

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