import { Suspense } from "react";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import FeatureHomePart from "@/src/components/FeatureHomePart";
import HomeLandingPart from "@/src/components/HomeLandingPart";
import HorizontalLandingPart from "@/src/components/HorizontalLandingPart";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import TrendingNews from "@/src/components/TrendingNews";
import SecondBanner from "@/src/components/SecondBanner";
 
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
import BigAddBanner from "@/src/components/BigAddBanner";
import OverlayArticleGrid from "@/src/components/OverlayArticleGrid";
import Footer from "@/src/components/Footer";
import Script from "next/script";
import MainGridLast from "@/src/components/MainGridLast";
import { sortByDate } from "@/src/utils/news";
 
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
 
  // Pin Isabela article to sidebar slot 0, exclude from all other components
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
      {/*
        FIXED: NewsArticle block removed from @graph.
        Google policy prohibits NewsArticle schema on a page where that
        article is not the primary content. Only WebSite, Organization,
        and BreadcrumbList belong on the homepage.
      */}
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
            ],
          }),
        }}
      />
 
      {/*
        FIXED: SiteNavigationElement arrays now match exactly.
        11 names and 11 urls — previously 11 names but 12 urls.
      */}
      <Script
        id="structured-data-site-navigation"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: [
              "Home",
              "World",
              "Business",
              "Finance",
              "Politics",
              "Opinion",
              "Health",
              "Education",
              "Global Affairs",
              "Featured",
              "Hot",
            ],
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
          }),
        }}
      />
 
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
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
 
        <div className="max-w-360 mx-auto px-3 md:px-16">
          <div className="text-1xl md:text-1xl font-bold font-libre text-gray-900 mb-2">
            Latest News & Breaking Stories
          </div>
          <p className="text-[14px] text-gray-700 font-sen tracking-tight leading-tight">
            Stay informed with the latest breaking news and stories from around
            the world. Get real-time updates on politics, business, technology,
            health, and more.
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
 
        {/* <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <div className="w-full py-2">
            <SecondBanner />
          </div>
        </Suspense> */}
 
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100 " />}>
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
            <OverlayArticleGrid
              items={allArticles.slice(31, 35)}
              heading="Recently Updated"
            />
          </div>
        </Suspense>
 
        <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
          <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
            <MainGridLast
              items={allArticles.slice(35, 47)}
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


// export default async function HomePage() {
//   return (
//     <main>
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
//               {
//                 "@type": "NewsArticle",
//                 "headline": "Isabela Herrera Velutini: Discipline-First Strategy in New Markets",
//                 "image": [
//                   "https://www.qlork.com/images/news-img/isabela.webp"
//                 ],
//                 "datePublished": "2026-02-16T08:00:00+00:00",
//                 "dateModified": "2026-03-02T10:30:00+00:00",
//                 "author": {
//                   "@type": "Person",
//                   "name": "Sarah Mitchell",
//                   "role": "Senior News Correspondent"
//                 },
//                 "publisher": {
//                   "@type": "Organization",
//                   "name": "Qlork",
//                   "logo": {
//                     "@type": "ImageObject",
//                     "url": "https://www.qlork.com/images/news-img/qlork-logo.webp"
//                   }
//                 },
//                 "description": "Isabela Herrera Velutini uses discipline and strategy to connect traditional wealth with emerging markets, shaping the future of global finance and investment."
//               },
//             ],
//           }),
//         }}
//       />

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
//               "Politics",
//               "Education",
//               "Health",
//               "Finance",
//               "Featured",
//               "Hot",
//               "Opinion",
//               "Global Affairs",
//             ],
//             url: [
//               "https://www.qlork.com/",
//               "https://www.qlork.com/world/",
//               "https://www.qlork.com/business/",
//               "https://www.qlork.com/politics/",
//               "https://www.qlork.com/technology/",
//               "https://www.qlork.com/health/",
//               "https://www.qlork.com/education/",
//               "https://www.qlork.com/global-affairs/",
//               "https://www.qlork.com/hot/",
//               "https://www.qlork.com/featured/",
//               "https://www.qlork.com/finance/",
//               "https://www.qlork.com/opinion/",
//             ],
//           }),
//         }}
//       />

//       <div className="bg-white min-h-screen">
//         <DateBar />
//         <MainNav />
//         <TrendingNews />
//         <FeatureHomePart
//           hero={politicsData[7]}
//           sidebarItems={[
//             businessData[0],
//             businessData[6],
//             businessData[3],
//             businessData[4],
//             businessData[1]
//           ]}
//           horizontalItems={[
//             worldData[8],
//             opinionData[6],
//             educationData[4],
//             financeData[0],
            
//           ]}
//         />

//         <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//           <MainGrid
//             items={[
//               worldData[0],
//               businessData[9],
//               worldData[2],
//               worldData[3],
//               worldData[4],
//             ]}
//             heading="World"
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
//           mainFeature={featuredData[1]}
//           sidebarItems={[
//             globalaffairsData[0],
//             featuredData[0],
//             hotData[0],
//             opinionData[0],
//             worldData[5],
//             businessData[2]
//           ]}
//         />

//         <div className="max-w-360 mx-auto px-3 md:px-16 pt-5 md:pt-0">
//           <HorizontalLandingPart
//             article={globalaffairsData[1]}
//             mainGridItems={[
//               politicsData[2],
//               businessData[8],
//               hotData[1],
//               worldData[6],
//             ]}
//             heading="Technology"
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
//               items={[
//                 opinionData[1],
//                 opinionData[2],
//                 opinionData[3],
//                 opinionData[4],
//               ]}
//               heading="Opinion"
//             />
//           </div>
//         </Suspense>
//         <ArticlePageNav />

//         <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
//           <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//             <OverlayArticleGrid
//               items={[
//                 politicsData[3],
//                 hotData[2],
//                 worldData[7],
//                 politicsData[6],
//               ]}
//               heading="Latest News"
//             />
//           </div>
//         </Suspense>

//         <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
//           <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-200">
//             <MainGridLast
//               items={[
//                 financeData[2],
//                 worldData[9],
//                 opinionData[5],
//                 politicsData[5],
//                 globalaffairsData[2],
//                 healthData[0],
//                 healthData[1],
//                 educationData[2],
//                 financeData[6],
//                 businessData[7],
//                 healthData[3],
//                 educationData[3],
//               ]}
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
