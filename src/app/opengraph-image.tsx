import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "미술마을 미술학원";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf9f7",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            backgroundColor: "#f5ede4",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            backgroundColor: "#e8836a",
            opacity: 0.1,
          }}
        />

        {/* Logo text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#1a1a1a",
              letterSpacing: "-2px",
            }}
          >
            미술마을
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#1a1a1a",
              opacity: 0.7,
            }}
          >
            미술학원
          </div>
          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: "#e8836a",
              borderRadius: 2,
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#e8836a",
            }}
          >
            모든 아이는 예술가입니다
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#1a1a1a",
              opacity: 0.4,
              marginTop: 16,
            }}
          >
            대구 수성구 상록로 67-1 1층
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
