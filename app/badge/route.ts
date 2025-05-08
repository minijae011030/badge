import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") ?? "Default";

  const html = `
    <div style="
      display: inline-block;
      padding: 3px 8px;
      border-radius: 5px;
      background-color: gray;
      color: white;
      font-family: sans-serif;
      font-size: 12px;
    ">${text}</div>`;

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
