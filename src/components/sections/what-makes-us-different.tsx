"use client";

import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[hsl(var(--section-title))]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export function WhatMakesUsDifferent() {
  const features = [
    {
      icon: "https://ext.same-assets.com/2245889959/3335154128.png", // Doctor icon
      title: "Tư Vấn Uy Tín",
      description: "Chúng tôi có đội ngũ chuyên gia giàu kinh nghiệm luôn sẵn sàng tư vấn và hỗ trợ bạn chọn lựa thiết bị y tế phù hợp nhất với nhu cầu sử dụng."
    },
    {
      icon: "https://ext.same-assets.com/2245889959/3622823527.png", // Equipment icon
      title: "Thiết Bị Hiện Đại & Chính Hãng",
      description: "Toàn bộ thiết bị đều là hàng chính hãng, được nhập khẩu từ các nhà sản xuất uy tín, đảm bảo chất lượng và độ bền lâu dài trong môi trường y tế."
    },
    {
      icon: "https://ext.same-assets.com/2245889959/3622823527.png", // Emergency icon
      title: "Giao Hàng & Hỗ Trợ Nhanh Chóng",
      description: "Chúng tôi cam kết giao hàng nhanh toàn quốc, hỗ trợ kỹ thuật tận tình, sẵn sàng xử lý mọi yêu cầu khẩn cấp về thiết bị y tế trong thời gian ngắn nhất."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[hsl(var(--section-title))]">
          Điều gì khiến chúng tôi khác biệt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
