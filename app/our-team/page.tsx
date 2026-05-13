import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import AuthorCard from "@/src/components/AuthorCard";
import authorsData from "@/public/data/authors.json";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Meet Qlork Authors – Top Journalists & News Writers",
  description:
    "Discover the Qlork authors team: top journalists and news writers delivering breaking news, expert analysis, and in-depth reporting worldwide.",
  keywords: [
    "qlork authors",
    "journalists",
    "news writers",
    "breaking news reporters",
    "qlork team",
  ].join(", "),
  openGraph: {
    title: "Meet Qlork Authors – Top Journalists & News Writers",
    description:
      "Discover the Qlork authors team: top journalists and news writers delivering breaking news, expert analysis, and in-depth reporting worldwide.",
    url: "https://www.qlork.com/our-team",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Qlork Authors Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Qlork Authors – Top Journalists & News Writers",
    description:
      "Discover the Qlork authors team: top journalists and news writers delivering breaking news, expert analysis, and in-depth reporting worldwide.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.qlork.com/our-team",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

const authors = authorsData as Array<{
  name: string;
  email: string;
  bio: string;
  photo: string;
}>;

// ✅ Microdata fix: plain object rendered as inline <script> tag — crawlers read this synchronously
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.qlork.com/our-team#webpage",
      url: "https://www.qlork.com/our-team",
      name: "Meet Qlork Authors – Top Journalists & News Writers",
      description:
        "Discover the Qlork authors team: top journalists and news writers delivering breaking news, expert analysis, and in-depth reporting worldwide.",
      isPartOf: { "@id": "https://www.qlork.com/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qlork.com" },
          { "@type": "ListItem", position: 2, name: "Our Team", item: "https://www.qlork.com/our-team" },
        ],
      },
    },
    {
      "@type": "ItemList",
      name: "Qlork Authors",
      description: "Top journalists and news writers at Qlork.",
      itemListElement: authors.map((author, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: author.name,
          description: author.bio,
          email: author.email,
          image: `https://www.qlork.com${author.photo}`,
          worksFor: {
            "@type": "Organization",
            name: "Qlork",
            url: "https://www.qlork.com",
          },
          jobTitle: "Journalist",
        },
      })),
    },
  ],
};

export default function AuthorsPage() {
  return (
    <>
      {/* ✅ Microdata fix: inline <script> instead of next/script so crawlers parse it at render time */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="py-12 px-3 md:px-16 space-y-10 bg-gray-50">

          {/* ✅ Title Coherence + H1 Coherence fix:
              Keywords "meet", "qlork", "authors", "top", "journalists",
              "news writers" now appear in H1, subtitle paragraph, and the
              intro block below — giving them sufficient body-text density */}
          <div className="max-w-360 mx-auto text-center pb-4">
            <h1 className="text-2xl md:text-3xl font-libre font-bold text-gray-900 mb-2">
              Meet the Qlork Authors
            </h1>
            <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              Qlork brings together top journalists, seasoned news writers, and
              expert reporters committed to delivering accurate, in-depth stories
              from around the world. Meet the authors who power Qlork's newsroom.
            </p>
          </div>

          {/* ✅ Keyword-rich intro block — repeats "authors", "journalists",
              "writers", "qlork", "top", "meet" naturally in body text */}
          <div className="max-w-360 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pb-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                Top Journalists
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Our journalists bring years of field experience, covering
                breaking news and global affairs with precision and integrity.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                Expert News Writers
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Qlork's news writers craft clear, well-researched stories across
                politics, business, technology, health, and culture.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                The Qlork Standard
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Every Qlork author upholds strict editorial standards — verified
                facts, unbiased reporting, and journalism readers can trust.
              </p>
            </div>
          </div>

          {authors.map((author, index) => (
            <AuthorCard
              key={author.name}
              author={author}
              reverse={index % 2 === 1}
            />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}
// import { Metadata } from "next";
// import DateBar from "@/src/components/DateBar";
// import MainNav from "@/src/components/MainNav";
// import Footer from "@/src/components/Footer";
// import AuthorCard from "@/src/components/AuthorCard";
// import authorsData from "@/public/data/authors.json";
// import TrendingNews from "@/src/components/TrendingNews";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.qlork.com"),
//   title: "Authors | Qlork",
//   description:
//     "Meet the talented team of journalists and writers at Qlork. Our award-winning authors bring you in-depth reporting, analysis, and breaking news from around the world.",
//   keywords: [
//     "authors",
//     "journalists",
//     "writers",
//     "qlork authors",
//     "news reporters",
//     "journalism team",
//     "news writers",
//   ].join(", "),
//   openGraph: {
//     title: "Authors | Qlork",
//     description: "Meet the talented team of journalists and writers at Qlork.",
//     url: "https://www.qlork.com/our-team",
//     siteName: "Qlork",
//     type: "website",
//     locale: "en_US",
//     images: [
//       {
//         url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Authors | Qlork",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Authors | Qlork",
//     description: "Meet the talented team of journalists and writers at Qlork.",
//     images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://www.qlork.com/our-team",
//   },
//   icons: {
//     icon: "/images/qlork-favIcon.webp",
//     shortcut: "/images/qlork-favIcon.webp",
//     apple: "/images/qlork-favIcon.webp",
//   },
// };

// export default function AuthorsPage() {
//   const authors = authorsData as Array<{
//     name: string;
//     email: string;
//     bio: string;
//     photo: string;
//   }>;

//   return (
//     <>
//       <div className="bg-white min-h-screen">
//         <DateBar />
//         <MainNav />
//         <TrendingNews />
//         <section className="py-12 px-3 md:px-16 space-y-10 bg-gray-50">
//           {authors.map((author, index) => (
//             <AuthorCard
//               key={author.name}
//               author={author}
//               reverse={index % 2 === 1}
//             />
//           ))}
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// }
