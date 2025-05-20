"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight } from "lucide-react";

// Team member component
const TeamMember = ({
  name,
  role,
  imageUrl,
  link,
}: {
  name: string;
  role: string;
  imageUrl: string;
  link: string;
}) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden group">
      <div className="relative h-[270px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-[hsl(var(--primary))] text-white p-5 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-white/80 mb-3">{role}</p>
        <Link
          href={link}
          className="inline-block text-sm hover:underline transition-all"
        >
          view full profile
        </Link>
      </div>
    </div>
  );
};

// Achievement item component
const AchievementItem = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-[hsl(var(--primary))] text-white p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

export default function About() {
  const teamMembers = [
    // {
    //   name: "Dr. Scott Riley",
    //   role: "Chief Medical Officer, Pathologist",
    //   imageUrl: "https://ext.same-assets.com/2747232763/3011387110.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Martha Schmidt",
    //   role: "EKG Technician",
    //   imageUrl: "https://ext.same-assets.com/2747232763/1441055134.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Sam McMillan",
    //   role: "Histotechnologist",
    //   imageUrl: "https://ext.same-assets.com/2747232763/2653795614.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Mary Smith",
    //   role: "Phlebotomist",
    //   imageUrl: "https://ext.same-assets.com/2747232763/3927053152.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Jane Fowler",
    //   role: "Clinical Laboratory Technologist",
    //   imageUrl: "https://ext.same-assets.com/2747232763/1500652132.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Eric Snyder",
    //   role: "MRI Technologist",
    //   imageUrl: "https://ext.same-assets.com/2747232763/2280083447.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. Kate Hudson",
    //   role: "Medical Laboratory Technician",
    //   imageUrl: "https://ext.same-assets.com/2747232763/2693655591.jpeg",
    //   link: "/team-member",
    // },
    // {
    //   name: "Dr. James Wilson",
    //   role: "Radiology Technician",
    //   imageUrl: "https://ext.same-assets.com/2747232763/3485200858.jpeg",
    //   link: "/team-member",
    // },
  ] as [];

  return (
    <main>
      <Header />

      {/* Page Header Banner */}
      <div className="relative h-[345px] bg-[url('https://ext.same-assets.com/2171350763/1611793020.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))] opacity-50"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Về chúng tôi</h1>
          <div className="flex items-center text-white/90 text-sm mt-4">
            <Link href="/" className="hover:text-white">
              Trang chủ
            </Link>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Về chúng tôi</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--section-title))]">
                Về Viet Tin Medic
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Viet Tin Medic là đơn vị chuyên cung cấp thiết bị y tế chất lượng cao dành cho gia đình, phòng khám, bệnh viện và các cơ sở y tế trên toàn quốc. Với phương châm “Chất lượng là sức khỏe”, chúng tôi cam kết mang đến các sản phẩm chính hãng, được kiểm định nghiêm ngặt về độ an toàn và hiệu quả.
                </p>
                <p>
                  Chúng tôi không chỉ đơn thuần là nơi bán thiết bị y tế – mà là người bạn đồng hành cùng bạn trên hành trình chăm sóc sức khỏe chủ động và an toàn.
                </p>
              </div>
            </div>

            {/* Founder Profile */}
            {/* <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-xl font-bold mb-6 uppercase text-gray-600">
                The Heart of Medical Center
              </h3>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 h-32 w-32 relative rounded-full overflow-hidden">
                  <Image
                    src="https://ext.same-assets.com/2747232763/2667539531.jpeg"
                    alt="Dr. Scott Riley"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold">Dr. Scott Riley</h4>
                <p className="text-gray-600 mb-2">Chief Medical Officer, Founder</p>
                <p className="text-[hsl(var(--primary))] font-bold mb-4">1-800-1234-567</p>
                <p className="text-gray-700 mb-6">
                  Proin accumsan ultricies tincidunt. Morbi semper enim a nulla vulputate pellentesque. Sed nulla tellus, gravida vel placerat vel, euismod at neque.
                </p>
                <Link
                  href="/team-member"
                  className="inline-block bg-[hsl(var(--primary))] text-white px-6 py-2 rounded-md hover:bg-[hsl(var(--primary))/90] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src="https://ext.same-assets.com/2245889959/2687006971.jpeg"
                alt="Medical Equipment"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold mb-10 text-[hsl(var(--section-title))]">
                Tại sao chọn Viet Tin Medic?
              </h2>

              <div className="space-y-6">
                <AchievementItem
                  title="Sản phẩm chính hãng, đầy đủ giấy tờ."
                  icon={<Award size={24} />}
                />
                <AchievementItem
                  title="Giao hàng nhanh toàn quốc."
                  icon={<Award size={24} />}
                />
                <AchievementItem
                  title="Tư vấn miễn phí bởi chuyên viên có chuyên môn."
                  icon={<Award size={24} />}
                />
                <AchievementItem
                  title="Hỗ trợ kỹ thuật, bảo hành tận nơi."
                  icon={<Award size={24} />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--section-title))]">
            Đội ngũ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {teamMembers.length > 0 ? teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                link={member.link}
              />
            )) : (
              <p className="col-span-4 text-center">Đang cập nhật...</p>
            )} */}

            <p className="col-span-4 text-center">Đang cập nhật...</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--section-title))]">
            Đánh giá được xác thực
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="relative">
                <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 italic">
                  Tôi đã mua máy đo huyết áp tại Viet Tin Medic và rất hài lòng. Sản phẩm chính hãng, giao hàng nhanh, có nhân viên hướng dẫn tận tình. Sẽ tiếp tục ủng hộ!
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://ext.same-assets.com/2747232763/2412689519.jpeg"
                      alt="Betty Wade"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Trần Thị Minh</h4>
                    <p className="text-gray-600 text-sm">Hà Nội</p>
                  </div>
                </div>
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="relative">
                <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 italic">
                  Dịch vụ tư vấn cực kỳ chuyên nghiệp. Mình không rành thiết bị y tế nhưng được giải thích rất dễ hiểu. Mua xong còn được hỗ trợ kỹ thuật tận nhà.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://ext.same-assets.com/2747232763/1264072729.jpeg"
                      alt="Bryan Green"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Nguyễn Văn Hòa</h4>
                    <p className="text-gray-600 text-sm">TP.HCM</p>
                  </div>
                </div>
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="relative">
                <div className="text-[hsl(var(--primary))] text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 italic">
                  Mình là bác sĩ phòng khám tư, đã nhập nhiều thiết bị từ Viet Tin Medic. Giá cạnh tranh, bảo hành rõ ràng, nhân viên hỗ trợ kỹ thuật tận tâm.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://ext.same-assets.com/2747232763/3779453654.jpeg"
                      alt="Joan Anderson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Nguyễn Thị Hà</h4>
                    <p className="text-gray-600 text-sm">Hải Phòng</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
