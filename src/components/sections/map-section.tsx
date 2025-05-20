"use client";

import React from "react";
import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section className="h-[400px] bg-gray-200 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-blue-200 opacity-80"></div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="mb-4 bg-white p-3 rounded-full inline-block shadow-md">
            <MapPin size={40} className="text-[hsl(var(--primary))]" />
          </div>
          <h3 className="text-lg font-bold mb-1">Công ty cổ phần xuất nhập khẩu thương mại dịch vụ thiết bị y tế Việt Tín</h3>
          <p className="text-gray-700">Số nhà 26, tổ 14, ngách 21/71 đường Võ Chí Công, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội</p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[url('https://ext.same-assets.com/2245889959/3726448606.webp')] bg-repeat opacity-10"></div>

      {/* Map Controls Mockup */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col bg-white rounded shadow">
        <button className="p-2 hover:bg-gray-100 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-4 z-20 flex flex-col bg-white rounded shadow">
        <button className="p-2 hover:bg-gray-100 border-b border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white px-3 py-1 rounded text-sm text-gray-600 shadow">
        Map data ©2025 Google
      </div>
    </section>
  );
}
