"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  categoryLink: string;
  imageUrl: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  category,
  categoryLink,
  imageUrl,
  slug,
}) => {
  return (
    <article className="bg-white rounded-md shadow-md overflow-hidden">
      <Link href={`/single-post?slug=${slug}`} className="block relative aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6">
        <Link href={`/single-post?slug=${slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-[hsl(var(--primary))] transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <Link href={categoryLink} className="hover:text-[hsl(var(--primary))]">
            {category}
          </Link>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      </div>
    </article>
  );
};

export function LatestBlogPosts() {
  const blogPosts = [
    {
      title: "Lý do nên đến gặp bác sĩ chuyên khoa",
      excerpt: "Có rất nhiều phụ nữ không nhận thức được nhiều rủi ro liên quan đến sức khỏe của họ và cuối cùng bỏ qua tầm quan trọng của việc đi khám...",
      date: "21/06/2023 at 8:12pm",
      category: "News",
      categoryLink: "/blog-masonry",
      imageUrl: "https://ext.same-assets.com/2245889959/3710276196.jpeg",
      slug: "reasons-to-visit-a-breast-specialist",
    },
    {
      title: "Dịch vụ chẩn đoán đúng đắn cho kết quả hiệu quả",
      excerpt: "Đã có rất nhiều trường hợp người dân không được cung cấp báo cáo chính xác, cuối cùng ảnh hưởng đến việc điều trị y tế của họ. Luôn luôn có...",
      date: "21/06/2023 at 8:12pm",
      category: "News",
      categoryLink: "/blog-masonry",
      imageUrl: "https://ext.same-assets.com/2245889959/2687006971.jpeg",
      slug: "picking-the-right-diagnostic-services",
    },
    {
      title: "Chuẩn bị cho ECG trong 8 bước đơn giản: Lời khuyên từ các bác sĩ chẩn đoán của chúng tôi",
      excerpt: "ECG là viết tắt của \"điện tâm đồ\", là một xét nghiệm đo và ghi lại hoạt động điện của tim. Bác sĩ sử dụng nó để có được...",
      date: "21/06/2023 at 8:12pm",
      category: "News",
      categoryLink: "/blog-masonry",
      imageUrl: "https://ext.same-assets.com/2245889959/925594589.jpeg",
      slug: "preparing-for-an-ecg-in-8-easy-steps",
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(var(--section-title))]">
          Bài viết mới nhất
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white"
          >
            <Link href="/blog-grid">
              Xem tất cả bài viết
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
