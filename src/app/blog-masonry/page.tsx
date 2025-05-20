"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { Pagination } from "@/components/blog/pagination";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export default function BlogMasonry() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle URL query parameter for pagination
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, []);

  return (
    <main>
      <Header />

      {/* Page Header Banner */}
      <div className="relative h-[345px] bg-[url('https://ext.same-assets.com/3199890187/1611793020.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Blog Masonry</h1>
          <div className="flex items-center text-white/90 text-sm mt-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="/blog-masonry" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Blog Masonry</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} variant="masonry" />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl="/blog-masonry"
              />
            </div>

            {/* Sidebar (1/3 width) */}
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
