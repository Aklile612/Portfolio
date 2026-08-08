import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), "app/assets/font/Pacifico-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#ffffff",
          fontSize: 96,
          fontFamily: "Pacifico",
          lineHeight: 1,
        }}
      >
        AA
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pacifico",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
