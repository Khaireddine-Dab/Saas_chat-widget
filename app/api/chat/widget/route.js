import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/widget.js");
  const js = fs.readFileSync(filePath, "utf-8");
  return new NextResponse(js, {
    headers: { "Content-Type": "application/javascript" },
  });
}
