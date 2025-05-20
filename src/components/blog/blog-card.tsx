"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  variant?: "grid" | "masonry";
}

export function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  return (
    <article
      className={`bg-white rounded-md shadow-sm overflow-hidden transition-shadow hover:shadow-md ${
        variant === "masonry" ? "flex flex-col h-full" : ""
      }`}
    >
      {/* Image */}
      <Link
        href={`/blog/${post.slug}`}
        className="block relative aspect-video overflow-hidden"
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-[hsl(var(--primary))] transition-colors">
            {post.title}
          </h3>
        </Link>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="mx-2">•</span>
          <Link
            href={post.categoryLink}
            className="hover:text-[hsl(var(--primary))]"
          >
            {post.category}
          </Link>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
          {post.tags.map((tag, index) => (
            <Link
              key={index}
              href={tag.link}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
