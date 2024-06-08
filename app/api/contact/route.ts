"use server";
import adminNotification from "../../../lib/contactMailTemplate";
import { sendEmail } from "../../../lib/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstname, lastname, mobile, email, query } = await request.json();

    if (!firstname || !mobile || !email) {
      return NextResponse.json(
        { status: 400, message: "Contact details required" },
        { status: 400 }
      );
    }
    // Send Email
    await sendEmail(
      "amanjaat7668@gmail.com",
      "New user contacted",
      adminNotification(firstname, lastname, mobile, email, query)
    );

    return NextResponse.json(
      {
        success: true,
        message: "Email send successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
      },
      {
        status: 500,
      }
    );
  }
}
