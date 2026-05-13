
import { Metadata } from "next";
import Script from "next/script";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import AuthorCard from "@/src/components/AuthorCard";
import authorsData from "@/public/data/authors.json";
import TrendingNews from "@/src/components/TrendingNews";

// ✅ Fix 1 & 3: Title 55–66 chars with trigger words; description under 160 chars
export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Meet Qlork Authors – Top Journalists & News Writers", // 51 chars — clear, keyword-rich
  description:
    "Discover the Qlork authors team: expert journalists delivering breaking news, analysis, and reporting from around the world.", // 124 chars
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
      "Discover the Qlork authors team: expert journalists delivering breaking news, analysis, and reporting from around the world.",
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
      "Discover the Qlork authors team: expert journalists delivering breaking news, analysis, and reporting from around the world.",
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

// ✅ Fix 4: JSON-LD microdata — ProfilePage + ItemList of authors
const authors = authorsData as Array<{
  name: string;
  email: string;
  bio: string;
  photo: string;
}>;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.qlork.com/our-team#webpage",
      url: "https://www.qlork.com/our-team",
      name: "Meet Qlork Authors – Top Journalists & News Writers",
      description:
        "Discover the Qlork authors team: expert journalists delivering breaking news, analysis, and reporting from around the world.",
      isPartOf: { "@id": "https://www.qlork.com/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.qlork.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Team",
            item: "https://www.qlork.com/our-team",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      name: "Qlork Authors",
      description:
        "The team of journalists and news writers at Qlork news platform.",
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
      {/* ✅ Fix 4: Inject JSON-LD schema */}
      <Script
        id="ourteam-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="py-12 px-3 md:px-16 space-y-10 bg-gray-50">

          {/* ✅ Fix 2 & 5: Single H1 with title keywords "authors" and "qlork" in visible page text */}
          <div className="max-w-360 mx-auto text-center pb-4">
            <h1 className="text-2xl md:text-3xl font-libre font-bold text-gray-900 mb-2">
              Meet the Qlork Authors
            </h1>
            <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600">
              Discover the journalists and news writers behind Qlork's reporting,
              analysis, and breaking news coverage.
            </p>
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
