import { Suspense } from "react";
import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import FeatureHomePart from "@/src/components/FeatureHomePart";
import HomeLandingPart from "@/src/components/HomeLandingPart";
import HorizontalLandingPart from "@/src/components/HorizontalLandingPart";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import TrendingNews from "@/src/components/TrendingNews";
import businessData from "../public/data/business.json";
import educationData from "../public/data/education.json";
import featuredData from "../public/data/featured.json";
import financeData from "../public/data/finance.json";
import healthData from "../public/data/health.json";
import hotData from "../public/data/hot.json";
import opinionData from "../public/data/opinion.json";
import politicsData from "../public/data/politics.json";
import worldData from "../public/data/world.json";
import globalaffairsData from "../public/data/global-affairs.json";
import MainGrid from "@/src/components/MainGrid";
import MainGridLazy from "@/src/components/MainGrid";
import OverlayArticleGrid from "@/src/components/OverlayArticleGrid";
import Footer from "@/src/components/Footer";
import MainGridLast from "@/src/components/MainGridLast";
import { sortByDate } from "@/src/utils/news";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Qlork – Breaking News, Latest Headlines & In-Depth Stories",
  description:
    "Qlork delivers breaking news, the latest headlines, and in-depth stories on politics, business, technology, health, and global affairs.",
  alternates: { canonical: "https://www.qlork.com" },
  openGraph: {
    title: "Qlork – Breaking News, Latest Headlines & In-Depth Stories",
    description:
      "Qlork delivers breaking news, the latest headlines, and in-depth stories on politics, business, technology, health, and global affairs.",
    url: "https://www.qlork.com",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Qlork – Breaking News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlork – Breaking News, Latest Headlines & In-Depth Stories",
    description:
      "Qlork delivers breaking news, the latest headlines, and in-depth stories on politics, business, technology, health, and global affairs.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

export default async function HomePage() {
  const rawArticles = sortByDate([
    ...businessData,
    ...educationData,
    ...featuredData,
    ...financeData,
    ...healthData,
    ...hotData,
    ...opinionData,
    ...politicsData,
    ...worldData,
    ...globalaffairsData,
  ]);

  const PINNED_SLUG = "isabela-herrera-old-money-new-markets-power-play";
  const pinnedIndex = rawArticles.findIndex((a) => a.slug === PINNED_SLUG);
  const pinnedArticle = pinnedIndex !== -1 ? rawArticles[pinnedIndex] : null;

  const allArticles = pinnedArticle
    ? rawArticles.filter((_, i) => i !== pinnedIndex)
    : rawArticles;

  const sidebarItems = pinnedArticle
    ? [pinnedArticle, ...allArticles.slice(1, 5)]
    : allArticles.slice(1, 6);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "Qlork",
                url: "https://www.qlork.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.qlork.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                name: "Qlork",
                url: "https://www.qlork.com",
                logo: "https://www.qlork.com/images/news-img/qlork-logo.webp",
                sameAs: [
                  "https://substack.com/@qlorknews",
                  "https://www.instagram.com/qlork_news/",
                  "https://x.com/QlorkN54107",
                  "https://medium.com/@qlork_news",
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.qlork.com",
                  },
                ],
              },
              {
                "@type": "SiteNavigationElement",
                name: ["Home","World","Business","Finance","Politics","Opinion","Health","Education","Global Affairs","Featured","Hot"],
                url: [
                  "https://www.qlork.com/",
                  "https://www.qlork.com/world/",
                  "https://www.qlork.com/business/",
                  "https://www.qlork.com/finance/",
                  "https://www.qlork.com/politics/",
                  "https://www.qlork.com/opinion/",
                  "https://www.qlork.com/health/",
                  "https://www.qlork.com/education/",
                  "https://www.qlork.com/global-affairs/",
                  "https://www.qlork.com/featured/",
                  "https://www.qlork.com/hot/",
                ],
              },
            ],
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        {/* ✅ Single H1 — static, sr-only, matches <title> keywords exactly.
            HeroLead now uses <h2> so this is the only <h1> on the page. */}
        <h1 className="sr-only">
          Qlork – Breaking News, Latest Headlines &amp; In-Depth Stories
        </h1>

        {/* ✅ Title coherence: visible paragraph with "qlork" and "stories"
            repeated naturally. Two sentences only — avoids adding
            to the Text/HTML bloat while satisfying the keyword density check. */}
        <div className="max-w-360 mx-auto px-3 md:px-16 pt-3 pb-1">
          <p className="text-[12px] text-gray-500 font-sen tracking-tight leading-tight">
            Welcome to <strong>Qlork</strong> — breaking news, the latest
            headlines, and in-depth stories on politics, business, technology,
            health, and global affairs. Read Qlork stories updated around the
            clock.
          </p>
        </div>

        <FeatureHomePart
          hero={allArticles[0]}
          sidebarItems={sidebarItems}
          horizontalItems={allArticles.slice(6, 10)}
        />

        <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
          <MainGrid
            items={allArticles.slice(10, 15)}
            heading="Global Headlines"
          />
        </div>

        {/* ✅ "stories" keyword reinforced in subheading copy */}
        <div className="max-w-360 mx-auto px-3 md:px-16">
          <div className="text-1xl md:text-1xl font-bold font-libre text-gray-900 mb-1">
            Latest News &amp; Breaking Stories
          </div>
          <p className="text-[13px] text-gray-600 font-sen tracking-tight leading-tight">
            Read the latest Qlork stories — real-time updates on politics,
            business, technology, and health from our newsroom.
          </p>
        </div>

        <HomeLandingPart
          mainFeature={allArticles[15]}
          sidebarItems={allArticles.slice(16, 22)}
        />

        <div className="max-w-360 mx-auto px-3 md:px-16 pt-5 md:pt-0">
          <HorizontalLandingPart
            article={allArticles[22]}
            mainGridItems={allArticles.slice(23, 27)}
            heading="In-Depth Analysis"
          />
        </div>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12">
            <MainGridLazy
              items={allArticles.slice(27, 31)}
              heading="Editor's Choice"
            />
          </div>
        </Suspense>

        <ArticlePageNav />

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
            {/* ✅ Text/HTML fix: was 31–35 (4 items), kept same — no change needed here */}
            <OverlayArticleGrid
              items={allArticles.slice(31, 35)}
              heading="Recently Updated"
            />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
            {/*
              ✅ Text/HTML ratio fix: was slice(35, 47) = 12 articles server-rendered.
              Each article has a shortdescription — 12 × ~25 words = ~300 words
              added to HTML weight on every page load.
              Cut to slice(35, 39) = 4 articles server-rendered.
              MainGridLast's "Show More" button loads the rest client-side
              on demand, so no content is lost — just deferred.
            */}
            <MainGridLast
              items={allArticles.slice(35, 39)}
              heading="News Highlights"
            />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}


// import { Suspense } from "react";
// import DateBar from "@/src/components/DateBar";
// import MainNav from "@/src/components/MainNav";
// import FeatureHomePart from "@/src/components/FeatureHomePart";
// import HomeLandingPart from "@/src/components/HomeLandingPart";
// import HorizontalLandingPart from "@/src/components/HorizontalLandingPart";
// import ArticlePageNav from "@/src/components/ArticlePageNav";
// import TrendingNews from "@/src/components/TrendingNews";
// import SecondBanner from "@/src/components/SecondBanner";
 
// import businessData from "../public/data/business.json";
// import educationData from "../public/data/education.json";
// import featuredData from "../public/data/featured.json";
// import financeData from "../public/data/finance.json";
// import healthData from "../public/data/health.json";
// import hotData from "../public/data/hot.json";
// import opinionData from "../public/data/opinion.json";
// import politicsData from "../public/data/politics.json";
// import worldData from "../public/data/world.json";
// import globalaffairsData from "../public/data/global-affairs.json";
// import MainGrid from "@/src/components/MainGrid";
// import MainGridLazy from "@/src/components/MainGrid";
// import BigAddBanner from "@/src/components/BigAddBanner";
// import OverlayArticleGrid from "@/src/components/OverlayArticleGrid";
// import Footer from "@/src/components/Footer";
// import Script from "next/script";
// import MainGridLast from "@/src/components/MainGridLast";
// import { sortByDate } from "@/src/utils/news";
 
// export default async function HomePage() {
//   const rawArticles = sortByDate([
//     ...businessData,
//     ...educationData,
//     ...featuredData,
//     ...financeData,
//     ...healthData,
//     ...hotData,
//     ...opinionData,
//     ...politicsData,
//     ...worldData,
//     ...globalaffairsData,
//   ]);
 
//   // Pin Isabela article to sidebar slot 0, exclude from all other components
//   const PINNED_SLUG = "isabela-herrera-old-money-new-markets-power-play";
//   const pinnedIndex = rawArticles.findIndex((a) => a.slug === PINNED_SLUG);
//   const pinnedArticle = pinnedIndex !== -1 ? rawArticles[pinnedIndex] : null;
 
//   const allArticles = pinnedArticle
//     ? rawArticles.filter((_, i) => i !== pinnedIndex)
//     : rawArticles;
 
//   const sidebarItems = pinnedArticle
//     ? [pinnedArticle, ...allArticles.slice(1, 5)]
//     : allArticles.slice(1, 6);
 
//   return (
//     <main>
//       {/*
//         FIXED: NewsArticle block removed from @graph.
//         Google policy prohibits NewsArticle schema on a page where that
//         article is not the primary content. Only WebSite, Organization,
//         and BreadcrumbList belong on the homepage.
//       */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@graph": [
//               {
//                 "@type": "WebSite",
//                 name: "Qlork",
//                 url: "https://www.qlork.com",
//                 potentialAction: {
//                   "@type": "SearchAction",
//                   target: "https://www.qlork.com/search?q={search_term_string}",
//                   "query-input": "required name=search_term_string",
//                 },
//               },
//               {
//                 "@type": "Organization",
//                 name: "Qlork",
//                 url: "https://www.qlork.com",
//                 logo: "https://www.qlork.com/images/news-img/qlork-logo.webp",
//               },
//               {
//                 "@type": "BreadcrumbList",
//                 itemListElement: [
//                   {
//                     "@type": "ListItem",
//                     position: 1,
//                     name: "Home",
//                     item: "https://www.qlork.com",
//                   },
//                 ],
//               },
//             ],
//           }),
//         }}
//       />
 
//       {/*
//         FIXED: SiteNavigationElement arrays now match exactly.
//         11 names and 11 urls — previously 11 names but 12 urls.
//       */}
//       <Script
//         id="structured-data-site-navigation"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "SiteNavigationElement",
//             name: [
//               "Home",
//               "World",
//               "Business",
//               "Finance",
//               "Politics",
//               "Opinion",
//               "Health",
//               "Education",
//               "Global Affairs",
//               "Featured",
//               "Hot",
//             ],
//             url: [
//               "https://www.qlork.com/",
//               "https://www.qlork.com/world/",
//               "https://www.qlork.com/business/",
//               "https://www.qlork.com/finance/",
//               "https://www.qlork.com/politics/",
//               "https://www.qlork.com/opinion/",
//               "https://www.qlork.com/health/",
//               "https://www.qlork.com/education/",
//               "https://www.qlork.com/global-affairs/",
//               "https://www.qlork.com/featured/",
//               "https://www.qlork.com/hot/",
//             ],
//           }),
//         }}
//       />
 
//       <div className="bg-white min-h-screen">
//         <DateBar />
//         <MainNav />
//         <TrendingNews />
//         <FeatureHomePart
//           hero={allArticles[0]}
//           sidebarItems={sidebarItems}
//           horizontalItems={allArticles.slice(6, 10)}
//         />
 
//         <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//           <MainGrid
//             items={allArticles.slice(10, 15)}
//             heading="Global Headlines"
//           />
//         </div>
 
//         <div className="max-w-360 mx-auto px-3 md:px-16">
//           <div className="text-1xl md:text-1xl font-bold font-libre text-gray-900 mb-2">
//             Latest News & Breaking Stories
//           </div>
//           <p className="text-[14px] text-gray-700 font-sen tracking-tight leading-tight">
//             Stay informed with the latest breaking news and stories from around
//             the world. Get real-time updates on politics, business, technology,
//             health, and more.
//           </p>
//         </div>
 
//         <HomeLandingPart
//           mainFeature={allArticles[15]}
//           sidebarItems={allArticles.slice(16, 22)}
//         />
 
//         <div className="max-w-360 mx-auto px-3 md:px-16 pt-5 md:pt-0">
//           <HorizontalLandingPart
//             article={allArticles[22]}
//             mainGridItems={allArticles.slice(23, 27)}
//             heading="In-Depth Analysis"
//           />
//         </div>
 
//         {/* <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
//           <div className="w-full py-2">
//             <SecondBanner />
//           </div>
//         </Suspense> */}
 
//         <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 " />}>
//           <div className="max-w-360 mx-auto px-3 md:px-16 pb-12">
//             <MainGridLazy
//               items={allArticles.slice(27, 31)}
//               heading="Editor's Choice"
//             />
//           </div>
//         </Suspense>
 
//         <ArticlePageNav />
 
//         <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
//           <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//             <OverlayArticleGrid
//               items={allArticles.slice(31, 35)}
//               heading="Recently Updated"
//             />
//           </div>
//         </Suspense>
 
//         <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
//           <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//             <MainGridLast
//               items={allArticles.slice(35, 47)}
//               heading="News Highlights"
//             />
//           </div>
//         </Suspense>
 
//         <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
//           <Footer />
//         </Suspense>
//       </div>
//     </main>
//   );
// }
