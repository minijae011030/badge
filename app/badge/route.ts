import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") ?? "Default";

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24" role="img">
    <rect rx="5" height="24" width="${text.length * 8 + 16}" fill="gray"/>
    <text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      text-anchor="middle"
      font-family="sans-serif"
      font-size="12"
      fill="white"
    >${text}</text>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache",
    },
  });
}
