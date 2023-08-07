import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);

  const author = url.searchParams.get("author");

  try {
    await connect();

    const posts = await Post.find(author && { author });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  await connect();
  const newPost = new Post(body);

  try {
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.log(err);
  }
};
