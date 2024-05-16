import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const res = await req.json()
  const {username, email} = res
  console.log(username, email)

  // const result = await prisma.User.create({
  //   data: {
  //     email: res
  //   }
  // })

  // return NextResponse.json({result})
  return NextResponse.json({data: res})
}