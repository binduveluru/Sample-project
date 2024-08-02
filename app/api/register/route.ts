import { NextResponse } from "next/server";
import {genSaltSync,hashSync } from "bcrypt";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//Registration API
export const POST = async (request: Request) => {
    try {
    const body = await request.json();
    const { fullname,username,email,password,role } = body;
   
    const user = await prisma.user.findUnique({
      where: {

        email: email,
      },
    });
    if (user){
      return new NextResponse(
        JSON.stringify({ message: "User already exists"}),
        { status: 201 }
      )
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {...body, password: hashedPassword}
    });
    // await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating user",
        error,
      }),
      {
        status: 500,
      }
    );
  }
};