"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone, MapPin, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoIcon from "@/components/icons/logo-icon";

const menuItems = [
  { href: "/", label: "Trang chủ" },
  // { href: "/team", label: "Team" },
  // {
  //   href: "#",
  //   signal: "menu",
  //   label: "Thiết bị y tế",
  //   submenu: [
  //     {
  //       title: "Elements",
  //       items: [
  //         { href: "/typography", label: "Typography" },
  //         { href: "/forms", label: "Forms" },
  //         { href: "/buttons", label: "Buttons" },
  //         { href: "/grid-system", label: "Grid" },
  //         { href: "/tabs-and-accordions", label: "Tabs and Accordions" },
  //         { href: "/progress-bars", label: "Progress bars" },
  //         { href: "/icons", label: "Icons" },
  //         { href: "/tables", label: "Tables" },
  //       ],
  //     },
  //     {
  //       title: "Pages 1",
  //       items: [
  //         { href: "/team-member", label: "Team Member Profile" },
  //         { href: "/careers", label: "Careers" },
  //         { href: "/faq", label: "FAQ Page" },
  //         { href: "/pricing", label: "Pricing" },
  //         { href: "/coming-soon", label: "Coming Soon" },
  //         { href: "/maintenance", label: "Maintenance" },
  //         { href: "/under-construction", label: "Under Construction" },
  //         { href: "/login", label: "Login/Register" },
  //       ],
  //     },
  //     {
  //       title: "Pages 2",
  //       items: [
  //         { href: "/clients", label: "Clients" },
  //         { href: "/partners", label: "Partners" },
  //         { href: "/privacy-policy", label: "Privacy Policy" },
  //         { href: "/search-results", label: "Search Results" },
  //         { href: "/404", label: "404 Page" },
  //         { href: "/503", label: "503 Page" },
  //         { href: "/make-an-appointment", label: "Make an Appointment" },
  //       ],
  //     },
  //   ],
  // },
  { href: "/services", label: "Dịch vụ" },
  // { href: "/departments", label: "Departments" },
  // { href: "/timetable", label: "Timetable" },
  // {
  //   href: "#",
  //   label: "Gallery",
  //   submenu: [
  //     {
  //       items: [
  //         { href: "/grid-gallery", label: "Grid Gallery" },
  //         { href: "/grid-gallery-no-padding", label: "Gallery Without Padding" },
  //         { href: "/masonry-gallery", label: "Masonry Gallery" },
  //         { href: "/cobbles-gallery", label: "Cobbles Grid" },
  //       ],
  //     },
  //   ],
  // },
  {
    href: "/blog-404",
    label: "Bài viết",
    // submenu: [
    //   {
    //     items: [
    //       { href: "/blog-masonry", label: "Blog Masonry" },
    //       { href: "/blog-modern", label: "Blog Modern" },
    //       { href: "/blog-classic", label: "Blog Classic" },
    //       { href: "/blog-grid", label: "Blog Grid" },
    //       { href: "/single-post", label: "Single Post" },
    //     ],
    //   },
    // ],
  },
  { href: "/contacts", label: "Liên hệ" },
  { href: "/about", label: "Về chúng tôi" },
];

export function Header() {
  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false);
  const [isGalleryMenuOpen, setIsGalleryMenuOpen] = useState(false);
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    if (menu === "pages") {
      setIsPageMenuOpen(!isPageMenuOpen);
      setIsGalleryMenuOpen(false);
      setIsBlogMenuOpen(false);
    } else if (menu === "gallery") {
      setIsGalleryMenuOpen(!isGalleryMenuOpen);
      setIsPageMenuOpen(false);
      setIsBlogMenuOpen(false);
    } else if (menu === "blog") {
      setIsBlogMenuOpen(!isBlogMenuOpen);
      setIsPageMenuOpen(false);
      setIsGalleryMenuOpen(false);
    }
  };

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-white py-4">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <LogoIcon className="w-12 h-12 text-[hsl(var(--primary))]" />
            <div className="ml-2">
              <h1 className="text-2xl font-bold text-[hsl(var(--primary))] uppercase">
                VIET TIN MEDIC
              </h1>
              <p className="text-sm text-gray-500">Chuyên cung cấp dịch vụ thiết bị y tế</p>
            </div>
          </Link>

          {/* Contact Info */}
          {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="header-contact">
              <div className="header-contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-bold">1-800-1234-567</p>
                <p>1-800-3214-654</p>
              </div>
            </div>
            <div className="header-contact">
              <div className="header-contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="">Số nhà 26, tổ 14 ngách 27/71 đường Võ Chí Công</p>
                <p>Phường Nghĩa Đô, Quận Cầu Giấy, Hà Nội</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[hsl(var(--header-bg))] text-white">
        <div className="container-custom">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between h-16">
            <ul className="flex space-x-8">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.label === "Pages") toggleMenu("pages");
                    if (item.label === "Gallery") toggleMenu("gallery");
                    if (item.label === "Blog") toggleMenu("blog");
                  }}
                  onMouseLeave={() => {
                    if (item.label === "Pages") toggleMenu("pages");
                    if (item.label === "Gallery") toggleMenu("gallery");
                    if (item.label === "Blog") toggleMenu("blog");
                  }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-2 text-white hover:text-white/80 transition"
                  >
                    {item.label}
                    {/* {item.submenu && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )} */}
                  </Link>

                  {/* Dropdown for Pages */}
                  {/* {item.submenu && item.label === "Pages" && (
                    <div
                      className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg z-50 transition-all duration-300 ${isPageMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                      <div className="p-4 grid grid-cols-1 gap-4">
                        {item.submenu.map((submenu, subIndex) => (
                          <div key={subIndex}>
                            {submenu.title && (
                              <h5 className="text-gray-800 font-bold text-sm mb-2">
                                {submenu.title}
                              </h5>
                            )}
                            <ul>
                              {submenu.items.map((subItem, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-1 text-gray-600 hover:text-[hsl(var(--primary))] text-sm"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* Dropdown for Gallery */}
                  {/* {item.submenu && item.label === "Gallery" && (
                    <div
                      className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg z-50 transition-all duration-300 ${isGalleryMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                      <div className="p-4">
                        {item.submenu.map((submenu, subIndex) => (
                          <div key={subIndex}>
                            <ul>
                              {submenu.items.map((subItem, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-1 text-gray-600 hover:text-[hsl(var(--primary))] text-sm"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* Dropdown for Blog */}
                  {/* {item.submenu && item.label === "Blog" && (
                    <div
                      className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg z-50 transition-all duration-300 ${isBlogMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                        }`}
                    >
                      <div className="p-4">
                        {item.submenu.map((submenu, subIndex) => (
                          <div key={subIndex}>
                            <ul>
                              {submenu.items.map((subItem, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-1 text-gray-600 hover:text-[hsl(var(--primary))] text-sm"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}
                </li>
              ))}
            </ul>

            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="py-1 px-3 rounded bg-[hsl(var(--header-bg))] border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200 w-40"
              />
              <Search className="absolute right-3 top-1.5 h-4 w-4 text-blue-200" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden items-center justify-between h-16">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                <div className="py-4">
                  <Link href="/" className="flex items-center mb-6">
                    <LogoIcon className="w-10 h-10 text-[hsl(var(--primary))]" />
                    <div className="ml-2">
                      <h1 className="text-xl font-bold text-[hsl(var(--primary))] uppercase">
                        VIET TIN MEDIC
                      </h1>
                      <p className="text-xs text-gray-500">Chuyên cung cấp thiết bị y tế</p>
                    </div>
                  </Link>

                  <div className="space-y-4">
                    {menuItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-2">
                        <Link
                          href={item.href}
                          className="block py-2 text-foreground hover:text-[hsl(var(--primary))] transition"
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-[hsl(var(--primary))] mt-1" />
                      <div>
                        <p className="font-bold">1-800-1234-567</p>
                        <p className="text-sm">1-800-3214-654</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[hsl(var(--primary))] mt-1" />
                      <div>
                        <p className="font-bold">2130 Fulton Street</p>
                        <p className="text-sm">San Diego, CA 94117-1080 USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center">
              <LogoIcon className="w-8 h-8 text-white" />
              <div className="ml-2">
                <h1 className="text-lg font-bold text-white uppercase">
                  VIET TIN MEDIC
                </h1>
              </div>
            </Link>

            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
