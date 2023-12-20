import connectDataBase from "@/utils/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDataBase();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { userName, email, password } = reqBody;
    if (!userName || !email || !password) {
      return NextResponse.json(
        { error: "Please provide all fields" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
