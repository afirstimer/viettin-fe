"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, href }) => {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0 bg-[hsl(var(--primary))] transition-all duration-300 ease-in-out group-hover:h-1"></div>
    </Link>
  );
};

export function OurServices() {
  const services = [
    {
      title: "Trang Thiết Bị Y Khoa",
      imageUrl: "https://ext.same-assets.com/2245889959/3037898069.jpeg",
      href: "/services#pediatrics"
    },
    {
      title: "Máy Móc Y Tế",
      imageUrl: "https://ext.same-assets.com/2245889959/1533657753.jpeg",
      href: "/services#mri"
    },
    {
      title: "Vật Tư Y Tế",
      imageUrl: "https://ext.same-assets.com/2245889959/3710276196.jpeg",
      href: "/services#xray"
    },
    {
      title: "Trang Thiết Bị Y Khoa",
      imageUrl: "https://ext.same-assets.com/2245889959/2687006971.jpeg",
      href: "/services#laboratory"
    },
    {
      title: "Dụng Cụ Chuyên Khoa",
      imageUrl: "https://ext.same-assets.com/2245889959/925594589.jpeg",
      href: "/services#pregnancy"
    },
    {
      title: "Mẹ Và Bé",
      imageUrl: "https://ext.same-assets.com/1400060574/1371547517.jpeg",
      href: "/services#equipment"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--section-title))]">
            Danh mục sản phẩm
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tại Việt Tín Medic, bạn có thể trải nghiệm dịch vụ sản phẩm tốt nhất và toàn diện nhất. Vui lòng duyệt trang web để biết thêm thông tin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
