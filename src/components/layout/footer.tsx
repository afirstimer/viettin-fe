"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LogoIcon from "@/components/icons/logo-icon";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white pt-12 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center mb-6">
              <LogoIcon className="w-12 h-12 text-white" />
              <div className="ml-2">
                <h2 className="text-2xl font-bold text-white uppercase">VIET TIN MEDIC</h2>
                <p className="text-sm text-blue-200">Chuyên cung cấp thiết bị y tế</p>
              </div>
            </Link>
            <div className="flex space-x-2 mt-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[hsl(var(--primary))] transition-colors"
              >
                <Rss size={18} />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Liên hệ</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-center">
                <span className="block">
                  Đang cập nhật
                </span>
              </p>
              <p className="flex items-center">
                <span className="block">
                  Số nhà 26, tổ 14 ngách 27/71 đường Võ Chí Công, Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội
                </span>
              </p>
              <p className="flex items-center">
                <span className="block">contact@viettinmedica.com</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase">Đăng ký nhận thư</h3>
            <p className="text-sm mb-4">
              Nhập địa chỉ email của bạn để nhận tin tức mới nhất, thông tin mới và các thông tin hữu ích khác, được gửi thẳng đến hộp thư đến của bạn.
            </p>
            <div className="flex w-full max-w-sm items-center">
              <Input
                type="email"
                placeholder="Your e-mail..."
                className="rounded-r-none bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-[#333] hover:bg-[#444] text-white"
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-white/70">
          <p>
            © 2025 VIET TIN MEDIC., JSC.{" "}
            <Link href="/privacy-policy" className="hover:text-white">
              Chính sách bảo mật
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
