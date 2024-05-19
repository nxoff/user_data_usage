import prisma from "@/lib/prisma";

export async function getComments() {
  const comments = await prisma.comment.findMany({
    include: {
      author: {
        select: { username: true }
      }
    }
  });
  return comments;
}