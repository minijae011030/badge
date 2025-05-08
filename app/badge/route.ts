import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") ?? "Default";

  const paddingX = 8;
  const paddingY = 4;
  const fontSize = 12;

  const approxCharWidth = 7;
  const textWidth = text.length * approxCharWidth;
  const badgeWidth = textWidth + paddingX * 2;
  const badgeHeight = fontSize + paddingY * 2;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${badgeWidth}" height="${badgeHeight}">
  <rect rx="4" width="${badgeWidth}" height="${badgeHeight}" fill="gray"/>
  <text
    x="${paddingX}"
    y="${badgeHeight / 2}"
    font-family="sans-serif"
    font-size="${fontSize}"
    fill="white"
    dominant-baseline="middle"
    lengthAdjust="spacing"
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
