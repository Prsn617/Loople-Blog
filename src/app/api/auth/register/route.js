import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    console.log(err.message);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
