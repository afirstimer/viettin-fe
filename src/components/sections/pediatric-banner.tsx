"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PediatricBanner() {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/2245889959/3037898069.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-lg text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-asap">
            Dụng Cụ <br />Y Tế
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Chúng tôi cung cấp rất nhiều sản phẩm y tế khác nhau theo yêu cầu của bạn
          </p>
          <Button
            asChild
            className="bg-white text-[hsl(var(--primary))] hover:bg-white/90 hover:text-[hsl(var(--primary))] px-6 py-5 text-sm uppercase font-bold"
          >
            <Link href="/make-an-appointment">
              Tư vấn miễn phí
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
