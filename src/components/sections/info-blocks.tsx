"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, FileText, Phone } from "lucide-react";

export function InfoBlocks() {
  return (
    <div className="bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-20">
          {/* Opening Hours */}
          <div className="bg-[hsl(var(--primary))] text-white p-6 rounded-md shadow-md flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-bold uppercase">Giờ làm việc</h3>
            </div>
            <div className="text-sm space-y-2 flex-grow">
              <div className="flex justify-between">
                <span>Thứ 2 - Thứ 6</span>
                <span>8:00am-7:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Thứ bảy</span>
                <span>9:00am-5:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Chủ nhật</span>
                <span>9:00am-3:00pm</span>
              </div>
            </div>
            <Link
              href="/timetable"
              className="mt-4 text-sm text-white hover:underline inline-block"
            >
              Liên hệ để được tư vấn sản phẩm
            </Link>
          </div>

          {/* Doctors Timetable */}
          <div className="bg-[hsl(var(--primary))] text-white p-6 rounded-md shadow-md flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-bold uppercase">THÔNG TIN SẢN PHẨM</h3>
            </div>
            <p className="text-sm flex-grow">
              Chúng tôi cung cấp đầy đủ thông tin kỹ thuật và hướng dẫn sử dụng cho từng thiết bị. Hãy kiểm tra thông tin trước khi mua để đảm bảo phù hợp nhu cầu.
            </p>
            <Link
              href="/timetable"
              className="mt-4 text-sm text-white hover:underline inline-block"
            >
              Xem chi tiết sản phẩm
            </Link>
          </div>

          {/* Appointments */}
          <div className="bg-[hsl(var(--primary))] text-white p-6 rounded-md shadow-md flex flex-col h-full">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-bold uppercase">ĐẶT HÀNG & BÁO GIÁ</h3>
            </div>
            <p className="text-sm flex-grow">
              Bạn có thể đặt hàng trực tiếp hoặc yêu cầu báo giá thiết bị theo nhu cầu riêng. Chúng tôi hỗ trợ nhanh chóng qua điện thoại, email hoặc form trực tuyến.
            </p>
            <Link
              href="/make-an-appointment"
              className="mt-4 text-sm text-white hover:underline inline-block"
            >
              Yêu cầu báo giá
            </Link>
          </div>

          {/* Emergency Cases */}
          <div className="bg-[hsl(var(--primary))] text-white p-6 rounded-md shadow-md flex flex-col h-full">
            <div className="flex items-center mb-4">
              <Phone className="h-6 w-6 mr-2" />
              <h3 className="text-lg font-bold uppercase">Tư vấn miễn phí</h3>
            </div>
            <div className="flex-grow">
              <p className="text-xl font-bold mb-1">1-800-1234-567</p>
              <p className="text-sm mb-4">Hotline tư vấn thiết bị</p>
            </div>
            <Link
              href="/contacts"
              className="mt-4 text-sm text-white hover:underline inline-block"
            >
              Hãy gọi ngay nếu bạn cần tư vấn nhanh về thiết bị y tế hoặc báo giá gấp.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
