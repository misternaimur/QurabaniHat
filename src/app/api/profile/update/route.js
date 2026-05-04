/** @format */

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const payload = {};

    if (typeof body?.name === "string" && body.name.trim()) {
      payload.name = body.name.trim();
    }

    if (typeof body?.image === "string" && body.image.trim()) {
      payload.image = body.image.trim();
    }

    if (Object.keys(payload).length === 0) {
      return NextResponse.json(
        { message: "Nothing to update." },
        { status: 400 },
      );
    }

    const data = await auth.api.updateUser({
      body: payload,
      headers: await headers(),
    });

    return NextResponse.json({
      message: "Profile updated successfully.",
      ...data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error?.message || "Failed to update profile.",
      },
      { status: 500 },
    );
  }
}
