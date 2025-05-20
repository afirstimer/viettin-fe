"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Tôi đã mua máy đo huyết áp tại Viet Tin Medic và rất hài lòng. Sản phẩm chính hãng, giao hàng nhanh, có nhân viên hướng dẫn tận tình. Sẽ tiếp tục ủng hộ!",
    name: "Nguyễn Văn Hòa",
    title: "Hà Nội",
    avatarUrl: "https://ext.same-assets.com/2245889959/2412689519.jpeg",
  },
  {
    quote: "Máy tạo oxy dùng ổn định, đóng gói kỹ. Giao hàng hơi trễ 1 ngày nhưng nhân viên có gọi báo trước và xin lỗi. Đánh giá cao cách phục vụ.",
    name: "Phạm Quốc Dũng",
    title: "Đà Nẵng",
    avatarUrl: "https://ext.same-assets.com/2245889959/1264072729.jpeg",
  },
  {
    quote: "Mình là bác sĩ phòng khám tư, đã nhập nhiều thiết bị từ Viet Tin Medic. Giá cạnh tranh, bảo hành rõ ràng, nhân viên hỗ trợ kỹ thuật tận tâm.",
    name: "Vũ Trung Kiên",
    title: "Hải Phòng",
    avatarUrl: "https://ext.same-assets.com/2245889959/1264072729.jpeg",
  },
  {
    quote: "Dịch vụ tư vấn cực kỳ chuyên nghiệp. Mình không rành thiết bị y tế nhưng được giải thích rất dễ hiểu. Mua xong còn được hỗ trợ kỹ thuật tận nhà.",
    name: "Trần Thị Minh",
    title: "TP.HCM",
    avatarUrl: "https://ext.same-assets.com/2245889959/2412689519.jpeg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(var(--section-title))]">
          Đánh giá khách hàng
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow text-center">
                    <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4">&ldquo;</div>
                    <p className="text-gray-700 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-[hsl(var(--primary))]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-[hsl(var(--primary))]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-[hsl(var(--primary))]" : "bg-gray-300"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
