import { NextResponse } from "next/server";
import { processTravelEnquiry } from "@/lib/email/send";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await processTravelEnquiry(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
          errors: result.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
      enquiryId: result.enquiryId,
    });
  } catch (error) {
    console.error("[API /api/enquiry Internal Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't process your enquiry right now. Please try again or reach out directly to ashishnathtiwari12@gmail.com.",
      },
      { status: 500 }
    );
  }
}
