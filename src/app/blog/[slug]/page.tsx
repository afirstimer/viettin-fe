"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { ChevronRight, Calendar, Share2, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getRecentPosts, BlogPost } from "@/data/blog-posts";
import { useParams } from "next/navigation";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    link: string;
  };
  date: string;
  content: string;
  replies?: Comment[];
}

// Sample comments data
const comments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Betty Wade",
      avatar: "https://ext.same-assets.com/408406297/2412689519.jpeg",
      link: "/team-member",
    },
    date: "June 21, 2023 at 8:12pm",
    content: "Curabitur faucibus dolor at dui lobortis, eget dictum nisi mattis. Fusce risus dui, fringilla non elit sit amet, lobortis interdum eros. Donec mattis lectus quis elit fermentum lacinia. Nullam at ligula semper ante mollis pretium. Nam euismod velit ut quam accumsan vestibulum. Etiam diam augue, dapibus ac placerat nec, accumsan eget nibh.",
    replies: [
      {
        id: "2",
        author: {
          name: "Amanda Wells",
          avatar: "https://ext.same-assets.com/408406297/2485529565.jpeg",
          link: "/team-member",
        },
        date: "June 21, 2023 at 8:12pm",
        content: "Nullam a massa ac ligula scelerisque maximus.",
      },
    ],
  },
];

export default function SinglePost() {
  const params = useParams();
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (!slug) return;
    const slugValue = params.slug as string; // add a type assertion
    if (!slugValue) return; // add a null check
    const foundPost = getPostBySlug(slugValue);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [params.slug]);

  if (!post) {
    return (
      <main>
        <Header />
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-8">The blog post you are looking for does not exist.</p>
          <Link
            href="/blog-masonry"
            className="inline-block bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-md hover:bg-[hsl(var(--primary))/0.9] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Recent blog posts (excluding the current one)
  const recentPosts = getRecentPosts(3).filter(p => p.id !== post.id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main>
      <Header />

      {/* Page Header Banner */}
      <div className="relative h-[345px] bg-[url('https://ext.same-assets.com/3199890187/1611793020.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Single Post</h1>
          <div className="flex items-center text-white/90 text-sm mt-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <Link href="/blog-masonry" className="hover:text-white">
              Blog
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Single Post</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Post Content (2/3 width) */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-md shadow-sm overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>

                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
                  <span className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="mr-4">by <Link href={post.author.link} className="text-[hsl(var(--primary))]">{post.author.name}</Link></span>
                  <Link href={post.categoryLink} className="text-[hsl(var(--primary))]">{post.category}</Link>
                </div>

                <div className="mb-8 relative aspect-video">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div
                  className="prose prose-blue max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 py-4 border-b border-gray-200 mb-6">
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

                {/* Share */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
                  <span className="font-medium">Share:</span>
                  <div className="flex space-x-2">
                    <Link href="#" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Twitter className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link href="#" className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Author Box */}
                <div className="bg-gray-50 p-6 rounded-md mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative h-20 w-20 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">
                        <Link href={post.author.link} className="hover:text-[hsl(var(--primary))]">
                          {post.author.name}
                        </Link>
                      </h4>
                      <p className="text-gray-500 text-sm mb-2">{post.author.role}</p>
                      <p className="text-gray-700 text-sm">
                        Nullam mollis ultrices est. Nulla in justo lacinia, scelerisque purus et, semper tortor. Donec bibendum leo vitae commodo porttitor. Proin tempus sollicitudin odio in feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recent Blog Posts */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Recent Blog Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recentPosts.slice(0, 2).map((recentPost) => (
                      <div key={recentPost.id} className="bg-white border border-gray-200 rounded-md overflow-hidden group">
                        <Link href={`/blog/${recentPost.slug}`} className="block relative aspect-video">
                          <Image
                            src={recentPost.imageUrl}
                            alt={recentPost.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </Link>
                        <div className="p-4">
                          <Link href={`/blog/${recentPost.slug}`}>
                            <h4 className="font-bold mb-2 hover:text-[hsl(var(--primary))] transition-colors line-clamp-1">
                              {recentPost.title}
                            </h4>
                          </Link>
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{recentPost.date}</span>
                            <span className="mx-2">•</span>
                            <Link href={recentPost.categoryLink} className="hover:text-[hsl(var(--primary))]">
                              {recentPost.category}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Comments</h3>

                  {comments.map((comment) => (
                    <div key={comment.id} className="mb-8">
                      <div className="flex mb-4">
                        <div className="flex-shrink-0 mr-4">
                          <Link href={comment.author.link} className="block relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={comment.author.avatar}
                              alt={comment.author.name}
                              fill
                              className="object-cover"
                            />
                          </Link>
                        </div>
                        <div className="flex-grow">
                          <Link href={comment.author.link} className="font-bold hover:text-[hsl(var(--primary))]">
                            {comment.author.name}
                          </Link>
                          <p className="text-sm text-gray-500 mb-2">{comment.date}</p>
                          <p className="text-gray-700">{comment.content}</p>
                          <button className="text-sm text-[hsl(var(--primary))] font-medium mt-2 hover:underline">
                            Reply
                          </button>
                        </div>
                      </div>

                      {/* Comment Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="ml-16 border-l-2 border-gray-200 pl-6">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex mb-4">
                              <div className="flex-shrink-0 mr-4">
                                <Link href={reply.author.link} className="block relative h-12 w-12 rounded-full overflow-hidden">
                                  <Image
                                    src={reply.author.avatar}
                                    alt={reply.author.name}
                                    fill
                                    className="object-cover"
                                  />
                                </Link>
                              </div>
                              <div className="flex-grow">
                                <Link href={reply.author.link} className="font-bold hover:text-[hsl(var(--primary))]">
                                  {reply.author.name}
                                </Link>
                                <p className="text-sm text-gray-500 mb-2">{reply.date}</p>
                                <p className="text-gray-700">{reply.content}</p>
                                <button className="text-sm text-[hsl(var(--primary))] font-medium mt-2 hover:underline">
                                  Reply
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Send a Comment</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-[hsl(var(--primary))] text-white px-6 py-2 rounded-md hover:bg-[hsl(var(--primary))/0.9] transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </article>
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
