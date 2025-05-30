import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") ?? "Default";

  const paddingX = 10;
  const paddingY = 5;
  const fontSize = 12;

  const approxCharWidth = 7;
  const textWidth = text.length * approxCharWidth;
  const badgeWidth = textWidth + paddingX * 2;
  const badgeHeight = fontSize + paddingY * 2;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${badgeWidth}" height="${badgeHeight}">
  <rect rx="3" width="${badgeWidth}" height="${badgeHeight}" fill="#b0b0b0"/>
  <text
    x="${paddingX}"
    y="${badgeHeight / 2 + 1}"
    font-size="${fontSize}"
    fill="white"
    dominant-baseline="middle"
    font-family="monospace"
    textLength="${textWidth}"
  >
    ${text}
  </text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache",
    },
  });
}
