import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSlider } from "@/components/sections/hero-slider";
import { InfoBlocks } from "@/components/sections/info-blocks";
import { WhatMakesUsDifferent } from "@/components/sections/what-makes-us-different";
import { OurServices } from "@/components/sections/our-services";
import { Testimonials } from "@/components/sections/testimonials";
import { PediatricBanner } from "@/components/sections/pediatric-banner";
import { LatestBlogPosts } from "@/components/sections/latest-blog-posts";
import { MapSection } from "@/components/sections/map-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSlider />
      <InfoBlocks />
      <WhatMakesUsDifferent />

      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--section-title))]">
              All Kinds<br />of Diagnostics
            </h2>
            <p className="text-gray-600">
              Medina offers the regions most comprehensive range of diagnostic services, from MRI to X-ray.
            </p>
            <a
              href="/make-an-appointment"
              className="inline-block mt-6 bg-transparent hover:bg-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:text-white border border-[hsl(var(--primary))] px-6 py-3 rounded-md transition-colors duration-300 uppercase text-sm font-bold"
            >
              free consultation
            </a>
          </div>
        </div>
      </section> */}

      <OurServices />
      <Testimonials />
      <PediatricBanner />
      <LatestBlogPosts />
      <MapSection />
      <Footer />
    </main>
  );
}
