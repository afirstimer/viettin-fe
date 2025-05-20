export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    link: string;
  };
  category: string;
  categoryLink: string;
  imageUrl: string;
  tags: Array<{ name: string; link: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Reasons to Visit a Breast Specialist",
    slug: "reasons-to-visit-a-breast-specialist",
    excerpt: "There are a lot of women that are unaware of the numerous risks associated with their health and eventually ignore the importance of visiting a breast specialist regularly.",
    content: `<p>Etiam et imperdiet quam. In sit amet finibus lorem, ac ultricies enim. Aliquam volutpat enim diam, vitae elementum ipsum tempor sit amet. Ut pellentesque sem nulla, in blandit leo viverra a. Phasellus et lacus mattis, tincidunt metus sodales, tincidunt urna. Cras felis neque, iaculis vitae varius eu, luctus consectetur odio. However, this ideal is a dream, not reality, and a clever and profitable marketing ruse, not fact.</p>

<p>Sed mollis, arcu et posuere cursus, massa neque viverra nisl, a condimentum urna justo ac neque. Phasellus id ante laoreet, viverra erat eget, luctus urna.</p>

<ul>
  <li>Phasellus rhoncus felis ut justo laoreet</li>
  <li>Nulla volutpat, leo nec tempor tincidunt</li>
  <li>Sed tristique est quis urna sodales congue</li>
  <li>Nullam tempus elementum lacus</li>
  <li>Mauris sem enim, sagittis et lobortis sit amet</li>
  <li>Donec maximus velit vel dui placerat fringilla</li>
</ul>

<p>Nullam mollis ultrices est. Nulla in justo lacinia, scelerisque purus et, semper tortor. Donec bibendum leo vitae commodo porttitor. Proin tempus sollicitudin odio in feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices vitae nisl tristique commodo. Phasellus porttitor metus at mattis ultricies. In imperdiet nec nunc in tincidunt.</p>

<p>Curabitur faucibus dolor at dui lobortis, eget dictum nisi mattis. Fusce risus dui, fringilla non elit sit amet, lobortis interdum eros. Donec mattis lectus quis elit fermentum lacinia. Nullam at ligula semper ante mollis pretium. Nam euismod velit ut quam accumsan vestibulum. Etiam diam augue, dapibus ac placerat nec, accumsan eget nibh. Cras sodales, leo ut volutpat laoreet, velit enim pharetra magna, at dapibus lacus elit vel mi. Nullam a massa ac ligula scelerisque maximus. Quisque dictum quis lorem ut sodales. Duis at semper odio. Morbi in sapien vel lacus posuere mattis ac eget ante. Etiam viverra accumsan rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
    date: "June 21, 2023 at 8:12pm",
    author: {
      name: "Amanda Wells",
      role: "Doctor, Blogger",
      avatar: "https://ext.same-assets.com/408406297/2485529565.jpeg",
      link: "/team-member",
    },
    category: "News",
    categoryLink: "/blog-masonry?category=news",
    imageUrl: "https://ext.same-assets.com/3199890187/2585267170.jpeg",
    tags: [
      { name: "Health", link: "#" },
      { name: "News", link: "#" },
      { name: "Diagnostics", link: "#" },
    ],
  },
  {
    id: "2",
    title: "Preparing for an ECG in 8 Easy Steps",
    slug: "preparing-for-an-ecg-in-8-easy-steps",
    excerpt: "An ECG stands for an 'electrocardiogram,' which is a test that measures and records the electrical activity of the heart. It is used by doctors to obtain information about the heart's rhythm and structure.",
    content: `<p>Phasellus et lacus mattis, tincidunt metus sodales, tincidunt urna. Cras felis neque, iaculis vitae varius eu, luctus consectetur odio. However, this ideal is a dream, not reality, and a clever and profitable marketing ruse, not fact.</p>

<p>Sed mollis, arcu et posuere cursus, massa neque viverra nisl, a condimentum urna justo ac neque. Phasellus id ante laoreet, viverra erat eget, luctus urna.</p>

<h3>Preparing for Your ECG</h3>

<p>Here are 8 easy steps to help you prepare for an ECG:</p>

<ol>
  <li>Wear comfortable clothing that allows easy access to your chest</li>
  <li>Avoid using lotions, oils, or powders on your chest before the test</li>
  <li>Continue taking your regular medications unless instructed otherwise</li>
  <li>Avoid caffeine and tobacco products before the test</li>
  <li>Inform your doctor of all medications you are taking</li>
  <li>Tell your doctor if you have a pacemaker or other implanted device</li>
  <li>Try to relax before and during the procedure</li>
  <li>Ask questions if you have any concerns</li>
</ol>

<p>Nullam mollis ultrices est. Nulla in justo lacinia, scelerisque purus et, semper tortor. Donec bibendum leo vitae commodo porttitor. Proin tempus sollicitudin odio in feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices vitae nisl tristique commodo.</p>

<p>Curabitur faucibus dolor at dui lobortis, eget dictum nisi mattis. Fusce risus dui, fringilla non elit sit amet, lobortis interdum eros. Donec mattis lectus quis elit fermentum lacinia.</p>`,
    date: "June 21, 2023 at 8:12pm",
    author: {
      name: "Dr. Scott Riley",
      role: "Chief Medical Officer",
      avatar: "https://ext.same-assets.com/2747232763/2667539531.jpeg",
      link: "/team-member",
    },
    category: "News",
    categoryLink: "/blog-masonry?category=news",
    imageUrl: "https://ext.same-assets.com/3199890187/2619030105.jpeg",
    tags: [
      { name: "Health", link: "#" },
      { name: "News", link: "#" },
      { name: "ECG", link: "#" },
    ],
  },
  {
    id: "3",
    title: "Picking the Right Diagnostic Services for Efficient Results",
    slug: "picking-the-right-diagnostic-services",
    excerpt: "There have been a lot of cases in which people were not provided with accurate reports that eventually affected their medical treatment. There is always a need to choose diagnostic services wisely.",
    content: `<p>Phasellus et lacus mattis, tincidunt metus sodales, tincidunt urna. Cras felis neque, iaculis vitae varius eu, luctus consectetur odio. However, this ideal is a dream, not reality, and a clever and profitable marketing ruse, not fact.</p>

<p>Sed mollis, arcu et posuere cursus, massa neque viverra nisl, a condimentum urna justo ac neque. Phasellus id ante laoreet, viverra erat eget, luctus urna.</p>

<h3>What to Look for in Diagnostic Services</h3>

<p>When selecting diagnostic services, consider the following factors:</p>

<ul>
  <li>Accreditation and certification of the facility</li>
  <li>Qualifications and experience of technicians and radiologists</li>
  <li>Modern and well-maintained equipment</li>
  <li>Cleanliness and hygiene standards</li>
  <li>Turnaround time for results</li>
  <li>Cost and insurance coverage</li>
  <li>Location and accessibility</li>
</ul>

<p>Nullam mollis ultrices est. Nulla in justo lacinia, scelerisque purus et, semper tortor. Donec bibendum leo vitae commodo porttitor. Proin tempus sollicitudin odio in feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>Curabitur faucibus dolor at dui lobortis, eget dictum nisi mattis. Fusce risus dui, fringilla non elit sit amet, lobortis interdum eros. Donec mattis lectus quis elit fermentum lacinia. Nullam at ligula semper ante mollis pretium.</p>`,
    date: "June 21, 2023 at 8:12pm",
    author: {
      name: "Dr. Jane Fowler",
      role: "Clinical Laboratory Technologist",
      avatar: "https://ext.same-assets.com/1400060574/4064693346.jpeg",
      link: "/team-member",
    },
    category: "News",
    categoryLink: "/blog-masonry?category=news",
    imageUrl: "https://ext.same-assets.com/3199890187/2887035727.jpeg",
    tags: [
      { name: "Health", link: "#" },
      { name: "News", link: "#" },
      { name: "Tips", link: "#" },
    ],
  },
  {
    id: "4",
    title: "The Purpose and Procedure of X-ray Imaging",
    slug: "the-purpose-and-procedure-of-x-ray-imaging",
    excerpt: "X-ray imaging is one of the oldest and most commonly used forms of medical imaging. It helps doctors diagnose and treat medical conditions by providing detailed images of what's happening inside your body.",
    content: `<p>Cras tempor eu enim id pulvinar. Proin at imperdiet felis, vel vehicula neque. Nulla quis nisl facilisis ex dignissim euismod eu vel neque. However, this ideal is a dream, not reality, and a clever and profitable marketing ruse, not fact.</p>

<p>Sed mollis, arcu et posuere cursus, massa neque viverra nisl, a condimentum urna justo ac neque. Phasellus id ante laoreet, viverra erat eget, luctus urna.</p>

<h3>How X-rays Work</h3>

<p>X-rays are a form of electromagnetic radiation, similar to visible light but with higher energy, that can pass through most objects, including the body. Different tissues absorb different amounts of radiation:</p>

<ul>
  <li>Dense materials like bone or metal appear white on X-ray images</li>
  <li>Soft tissues like organs and muscles appear in shades of gray</li>
  <li>Air appears black on X-ray images</li>
</ul>

<h3>Common Uses for X-rays</h3>

<p>X-rays are commonly used to:</p>

<ul>
  <li>Diagnose fractures and other bone injuries</li>
  <li>Detect joint dislocations and arthritis</li>
  <li>Screen for lung conditions like pneumonia</li>
  <li>Detect certain types of cancer</li>
  <li>Guide procedures like orthopedic surgery</li>
</ul>

<p>Nullam mollis ultrices est. Nulla in justo lacinia, scelerisque purus et, semper tortor. Donec bibendum leo vitae commodo porttitor. Proin tempus sollicitudin odio in feugiat.</p>

<p>Curabitur faucibus dolor at dui lobortis, eget dictum nisi mattis. Fusce risus dui, fringilla non elit sit amet, lobortis interdum eros. Donec mattis lectus quis elit fermentum lacinia.</p>`,
    date: "June 21, 2023 at 8:12pm",
    author: {
      name: "Dr. James Wilson",
      role: "Radiology Technician",
      avatar: "https://ext.same-assets.com/1400060574/2667539531.jpeg",
      link: "/team-member",
    },
    category: "News",
    categoryLink: "/blog-masonry?category=news",
    imageUrl: "https://ext.same-assets.com/3199890187/1308551561.jpeg",
    tags: [
      { name: "Health", link: "#" },
      { name: "News", link: "#" },
      { name: "X-ray", link: "#" },
    ],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRecentPosts = (count: number = 4): BlogPost[] => {
  return [...blogPosts].slice(0, count);
};

export const getAllCategories = (): string[] => {
  const categories = new Set<string>();
  blogPosts.forEach((post) => categories.add(post.category));
  return Array.from(categories);
};

export const getAllTags = (): Array<{ name: string; link: string }> => {
  const tagsMap = new Map<string, { name: string; link: string }>();

  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagsMap.set(tag.name, tag);
    });
  });

  return Array.from(tagsMap.values());
};

export const months = [
  "Jan",
  "Mar",
  "Apr",
  "May",
  "Jul",
  "Sep",
  "Oct",
];

export const galleryImages = [
  "https://ext.same-assets.com/3199890187/3342358479.jpeg",
  "https://ext.same-assets.com/3199890187/1804822126.jpeg",
  "https://ext.same-assets.com/3199890187/436515673.jpeg",
  "https://ext.same-assets.com/3199890187/1347416741.jpeg",
  "https://ext.same-assets.com/3199890187/3346048104.jpeg",
  "https://ext.same-assets.com/3199890187/3210267283.jpeg"
];
