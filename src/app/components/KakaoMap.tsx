"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (
          container: HTMLElement,
          options: { center: unknown; level: number }
        ) => {
          setCenter: (coords: unknown) => void;
          relayout: () => void;
        };
        LatLng: new (lat: number, lng: number) => unknown;
        Marker: new (options: { map: unknown; position: unknown }) => unknown;
        InfoWindow: new (options: {
          content: string;
        }) => { open: (map: unknown, marker: unknown) => void };
        services: {
          Geocoder: new () => {
            addressSearch: (
              address: string,
              callback: (result: { y: string; x: string }[], status: string) => void
            ) => void;
          };
          Status: { OK: string };
        };
      };
    };
  }
}

const ACADEMY_ADDRESS = "대구 수성구 상록로 67-1";
const FALLBACK_LAT = 35.8487;
const FALLBACK_LNG = 128.7113;

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    if (!apiKey) {
      setError(true);
      return;
    }

    // Prevent duplicate script loading
    if (document.querySelector('script[src*="dapi.kakao.com"]')) {
      if (window.kakao?.maps) {
        initMap();
      }
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      initMap();
    };

    script.onerror = () => {
      setError(true);
    };

    document.head.appendChild(script);
  }, []);

  function initMap() {
    window.kakao.maps.load(() => {
      if (!mapRef.current) return;

      const fallbackCenter = new window.kakao.maps.LatLng(
        FALLBACK_LAT,
        FALLBACK_LNG
      );

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: fallbackCenter,
        level: 3,
      });

      // Use geocoder to find exact location
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(ACADEMY_ADDRESS, (result, status) => {
        let coords = fallbackCenter;

        if (status === window.kakao.maps.services.Status.OK) {
          coords = new window.kakao.maps.LatLng(
            parseFloat(result[0].y),
            parseFloat(result[0].x)
          );
        }

        const marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:8px 12px;font-size:13px;font-weight:600;white-space:nowrap;">미술마을 미술학원</div>',
        });
        infowindow.open(map, marker);

        map.setCenter(coords);
      });

      setLoaded(true);
    });
  }

  if (error) {
    return <MapFallback />;
  }

  return (
    <div className="relative w-full">
      <div
        ref={mapRef}
        className="w-full h-[350px] sm:h-[400px] rounded-2xl overflow-hidden border border-border"
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl border border-border">
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <svg
              className="animate-spin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="32"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm">지도를 불러오는 중...</span>
          </div>
        </div>
      )}
    </div>
  );
}

function MapFallback() {
  return (
    <div className="w-full h-[350px] sm:h-[400px] rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-border flex flex-col items-center justify-center gap-4 px-6">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="#E85D3A"
        />
      </svg>
      <p className="text-lg font-semibold text-center">대구 수성구 상록로 67-1 1층</p>
      <p className="text-sm text-text-secondary">미술마을 미술학원</p>
      <a
        href="https://map.naver.com/p/search/%EB%AF%B8%EC%88%A0%EB%A7%88%EC%9D%84%EB%AF%B8%EC%88%A0%ED%95%99%EC%9B%90/place/1156604364"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white text-sm font-medium rounded-xl hover:bg-green-600 transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="currentColor"
          />
        </svg>
        네이버 지도에서 찾기
      </a>
    </div>
  );
}
