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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="py-12 px-3 md:px-16 space-y-10 bg-gray-50">

          {/* H1 — keywords: meet, qlork, authors */}
          <div className="max-w-360 mx-auto text-center pb-2">
            <h1 className="text-2xl md:text-3xl font-libre font-bold text-gray-900 mb-3">
              Meet the Qlork Authors
            </h1>

            {/* ✅ Subtitle repeats: meet, authors, top, journalists, writers, qlork */}
            <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto mb-4">
              Meet the top journalists and skilled news writers who make up the
              Qlork authors team. These dedicated writers and reporters bring
              accuracy, depth, and integrity to every story published on Qlork.
            </p>

            {/* ✅ Second paragraph — more repetition of all flagged keywords */}
            <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-500 max-w-2xl mx-auto">
              From breaking news to investigative features, our authors cover the
              stories that matter most. Get to know the top Qlork journalists
              and writers behind the headlines.
            </p>
          </div>

          {/* ✅ Three info cards — each repeats a target keyword in heading + body */}
          <div className="max-w-360 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pb-4">

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* keyword: top journalists */}
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                Top Journalists
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Our top journalists bring years of experience covering breaking
                news, politics, and global affairs. Each Qlork journalist is
                committed to verified, unbiased reporting readers can trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* keyword: news writers, authors */}
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                Expert News Writers
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Qlork's expert news writers and authors craft well-researched
                stories across business, technology, health, and culture. Our
                writers bring clarity and context to every article they publish.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* keyword: meet, qlork, authors */}
              <h2 className="text-[14px] font-libre font-bold text-gray-900 mb-2">
                The Qlork Standard
              </h2>
              <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                Meet the Qlork authors who uphold the highest editorial
                standards. Every writer and journalist at Qlork follows strict
                guidelines — verified facts, fair reporting, and responsible
                journalism in every piece.
              </p>
            </div>

          </div>

          {/* ✅ Keyword bridge sentence before author cards — ties "meet authors" to the listing */}
          <div className="max-w-360 mx-auto border-t border-gray-200 pt-6">
            <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-500 text-center">
              Below you can meet each Qlork author individually — top journalists
              and news writers dedicated to delivering trusted reporting every day.
            </p>
          </div>

          {authors.map((author, index) => (
            <AuthorCard
              key={author.name}
              author={author}
              reverse={index % 2 === 1}
            />
          ))}

          {/* ✅ Closing paragraph — final keyword reinforcement after all author cards */}
          <div className="max-w-360 mx-auto border-t border-gray-200 pt-8 text-center">
            <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-500 max-w-2xl mx-auto">
              Qlork's authors — journalists, writers, and reporters — are
              committed to delivering top-quality news coverage. Meet the full
              team and discover the writers shaping the stories you read on
              Qlork every day.
            </p>
          </div>

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
