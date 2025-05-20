"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getRecentPosts, months, galleryImages } from "@/data/blog-posts";

export function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const recentPosts = getRecentPosts(4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Would normally navigate to search results page
    // This is a placeholder for now
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-12">
      {/* Search Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 uppercase">Search in Blog</h3>
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Archive Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 uppercase">Archive</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            {months.slice(0, Math.ceil(months.length / 2)).map((month, index) => (
              <div key={index} className="flex items-center text-gray-700 hover:text-[hsl(var(--primary))]">
                <ChevronRight className="h-4 w-4 mr-1 text-[hsl(var(--primary))]" />
                <Link href={`#${month.toLowerCase()}`}>{month} 2023</Link>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {months.slice(Math.ceil(months.length / 2)).map((month, index) => (
              <div key={index} className="flex items-center text-gray-700 hover:text-[hsl(var(--primary))]">
                <ChevronRight className="h-4 w-4 mr-1 text-[hsl(var(--primary))]" />
                <Link href={`#${month.toLowerCase()}`}>{month} 2023</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 uppercase">Gallery</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <Link href="#" key={index} className="relative aspect-square block overflow-hidden rounded-md group">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[hsl(var(--primary))] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div>
        <h3 className="text-lg font-bold mb-4 uppercase">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start">
              <ChevronRight className="mt-1 h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 hover:text-[hsl(var(--primary))] font-medium line-clamp-1"
                >
                  {post.title}
                </Link>
                <span className="text-sm text-gray-500 block">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative h-[500px] w-full rounded-md overflow-hidden">
        <Image
          src="https://ext.same-assets.com/408406297/2177411938.jpeg"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
          <p className="mb-4">Contact our team for any medical inquiries</p>
          <Link
            href="/make-an-appointment"
            className="inline-block bg-white text-[hsl(var(--primary))] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
