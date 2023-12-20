import connectDataBase from "@/utils/dbConfig/dbConfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDataBase();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);
    const { email, password } = reqBody;
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide all fields" },
        { status: 204 }
      );
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { error: "User does not exists" },
        { status: 400 }
      );
    }
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      userName: user.userName,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: " Login Successfully",
      success: true,
      token,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
