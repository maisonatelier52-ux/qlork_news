// import ArticlePageNav from "./ArticlePageNav";
// import DateBar from "./DateBar";
// import Footer from "./Footer";
// import MainNav from "./MainNav";
// import TrendingNews from "./TrendingNews";
// import ClientArticle from "./ClientArticle";
// import Script from "next/script";
// import Link from "next/link";


// export interface SidebarItem {
//   category: string;
//   title: string;
//   date: string;
//   image: string;
//   slug: string;
//   topic: string;
//   href?: string;
// }
// interface IsabelaPageProps {
//   sidebarItems: SidebarItem[];
// }

// export default async function IsabelaPage({
//   sidebarItems,
// }: IsabelaPageProps) {
 
//   return (
//     <>
//       <Script
//         id="isabela-newsarticle-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@graph": [
//               {
//                 "@type": "NewsArticle",
//                 "@id":
//                   "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#newsarticle",
//                 mainEntityOfPage: {
//                   "@type": "WebPage",
//                   "@id":
//                     "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
//                 },
//                 headline:
//                   "Where Old Money Meets New Markets: Isabela Herrera’s Discipline-First Power Play",
//                 alternativeHeadline:
//                   "Isabela Herrera Velutini: Discipline-First Strategy in New Markets",
//                 description:
//                   "Isabela Herrera Brings Four Ultra-Wealthy Family Legacies Into Regulated Digital Finance",
//                 image: [
//                   "https://www.qlork.com/images/news-img/isabela.webp",
//                   "https://www.qlork.com/images/news-img/isabela.webp",
//                   "https://www.qlork.com/images/news-img/isabela.webp",
//                 ],
//                 datePublished: "2026-02-16T00:00:00+00:00",
//                 dateModified: "2026-03-05T00:00:00+00:00",
//                 author: {
//                   "@type": "Person",
//                   name: "Sarah Mitchell",
//                   url: "https://www.qlork.com/our-team/",
//                 },
//                 publisher: {
//                   "@type": "Organization",
//                   name: "Qlork",
//                   url: "https://www.qlork.com/",
//                   logo: {
//                     "@type": "ImageObject",
//                     url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
//                     width: 600,
//                     height: 60,
//                   },
//                 },
//                 about: {
//                   "@type": "Person",
//                   name: "Isabela Herrera Velutini",
//                   description:
//                     "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
//                   sameAs: [],
//                 },
//                 articleSection: "Business",
//                 keywords: [
//                   "Isabela Herrera Velutini",
//                   "Isabela Herrera",
//                   "Who is Isabela Herrera Velutini",
//                   "Isabela Herrera Velutini finance",
//                   "Isabela Herrera Velutini leadership",
//                   "Four Houses global finance",
//                   "Legacy finance leadership",
//                   "Global financial governance",
//                   "Old money new markets",
//                   "Discipline-first financial leadership",
//                   "Cross-border finance governance",
//                   "Ultra high net worth family finance",
//                   "Institutional finance leadership",
//                   "Isabela Herrera global finance leader",
//                   "Four Houses financial ecosystem",
//                   "Legacy banking families global influence",
//                   "Quiet power in global finance",
//                   "Governance-driven financial leadership",
//                   "Old world finance meets modern markets",
//                   "Institutional trust and financial continuity",
//                   "Isabela Herrera Velutini Qlork",
//                 ],
//                 articleBody:
//                   "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
//               },
//               {
//                 "@type": "BreadcrumbList",
//                 "@id":
//                   "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#breadcrumb",
//                 itemListElement: [
//                   {
//                     "@type": "ListItem",
//                     position: 1,
//                     name: "Home",
//                     item: "https://www.qlork.com/",
//                   },
//                   {
//                     "@type": "ListItem",
//                     position: 2,
//                     name: "Business",
//                     item: "https://www.qlork.com/business/",
//                   },
//                   {
//                     "@type": "ListItem",
//                     position: 3,
//                     name: "Isabela Herrera Velutini: Strategy and Leadership",
//                     item: "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
//                   },
//                 ],
//               },
//             ],
//           }),
//         }}
//       />

//       <Script
//         id="faq-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: [
//               {
//                 "@type": "Question",
//                 name: "Who is Isabela Herrera Velutini?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Isabela Herrera Velutini is a global finance leader known for her discipline-first approach, operating at the intersection of legacy wealth and modern financial infrastructure while upholding strong governance and institutional trust.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What is meant by the Four Houses represented by Isabela Herrera Velutini?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "The Four Houses—Herrera, Velutini, Von Uslar, and Gleinchen—are historic family lineages associated with finance, infrastructure, credibility, and statesmanship, functioning together as a unified global financial ecosystem led by figures like Isabela Herrera Velutini.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What leadership style defines Isabela Herrera Velutini’s role in global finance?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Isabela Herrera Velutini’s leadership is defined by discipline, quiet execution, and long-term continuity, prioritizing governance, compliance, and stability over publicity or short-term gains.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "How does Isabela Herrera Velutini balance legacy finance with modern markets?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Isabela Herrera Velutini integrates historic financial principles with modern regulatory frameworks, ensuring cross-border structures remain compliant, resilient, and operational in both stable and volatile market conditions.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What roles does Isabela Herrera Velutini currently hold?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Isabela Herrera Velutini serves as CEO of Emirates Financial Group, holds directorial responsibilities within the Britannia ecosystem, and sits on boards in The Bahamas, focusing on governance and institutional integrity.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "Why is Isabela Herrera Velutini described as a discipline-first leader?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "Her approach emphasizes risk control, regulatory compliance, and predictable outcomes, ensuring that financial systems managed by Isabela Herrera Velutini function reliably rather than relying on speculation or market noise.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "What makes Isabela Herrera Velutini’s influence distinct in global finance?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "The influence of Isabela Herrera Velutini is measured by continuity rather than headlines—through systems that settle, governance that holds, and financial structures that endure scrutiny across jurisdictions.",
//                 },
//               },
//               {
//                 "@type": "Question",
//                 name: "How does heritage influence Isabela Herrera Velutini’s work today?",
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: "For Isabela Herrera Velutini, heritage functions as an operating system rather than nostalgia, providing guiding principles that inform disciplined decision-making, ethical responsibility, and long-term financial stewardship.",
//                 },
//               },
//             ],
//           }),
//         }}
//       />

//       <div className="bg-white min-h-screen">
//         <div className="hidden">
//           Where Old Money Meets New Markets: Isabela Herrera’s Discipline-First
//           Power Play | Qlork
//         </div>
//         <DateBar />
//         <MainNav />
//         <TrendingNews />
//         <div className="">
//           <ClientArticle sidebarItems={sidebarItems} />
//           {/* <div className="max-w-360 mx-auto px-3 md:px-16 pb-8">
//             <aside
//               className="my-8 rounded-xl border border-black/10 bg-[#fafafa] px-5 py-5 md:px-6"
//               aria-labelledby="related-stories-title"
//             >
//               <h2
//                 id="related-stories-title"
//                 className="mb-4 text-[17px] md:text-[20px] font-semibold font-libre leading-tight"
//               >
//                 Continue Reading: Global Wealth Leadership
//               </h2>
//               <ul className="list-none space-y-5 p-0">
//                 <li className="border-t border-black/10 pt-5 first:border-t-0 first:pt-0">
//                   <Link
//                     href="/finance/what-regulated-digital-finance-actually-means/"
//                     className="inline-block font-bold text-[15px] text-black no-underline font-libre hover:underline focus:underline"
//                   >
//                     What Regulated Digital Finance Actually Means
//                   </Link>
//                   <p className="mt-1 text-[15px] leading-tight tracking-tight font-sen text-black/80">
//                     A plain-English guide to licenses, custody, audits,
//                     counterparty standards, and cross-border settlement.
//                   </p>
//                 </li>
//                 <li className="border-t border-black/10 pt-5">
//                   <Link
//                     href="/business/why-cross-border-governance-matters-in-digital-asset-markets/"
//                     className="inline-block font-bold text-[15px] text-black no-underline font-libre hover:underline focus:underline"
//                   >
//                     Why Cross-Border Governance Matters in Digital Asset
//                     Markets
//                   </Link>
//                   <p className="mt-1 text-[15px] leading-tight tracking-tight font-sen text-black/80">
//                     A structured explainer on how governance frameworks shape
//                     institutional participation.
//                   </p>
//                 </li>
//                 <li className="border-t border-black/10 pt-5">
//                   <Link
//                     href="/finance/legacy-capital-new-rails-established-wealth-regulated-digital-infrastructure/"
//                     className="inline-block font-bold text-[15px] text-black no-underline font-libre hover:underline focus:underline"
//                   >
//                     Legacy Capital, New Rails: Why Established Wealth Is Moving
//                     into Regulated Digital Infrastructure
//                   </Link>
//                   <p className="mt-1 text-[15px] font-sen tracking-tight leading-tight text-black/80">
//                     A trend analysis on how established wealth platforms adopt
//                     new digital rails without abandoning governance discipline.
//                   </p>
//                 </li>
//               </ul>
//             </aside>
//           </div> */}

//           {/* Article Page Navigation */}
//           <div className="mb-5">
//             <ArticlePageNav /> 
//           </div>
//         </div>
//         <Footer />
//       </div>  
//     </>
//   );
// }

import ArticlePageNav from "./ArticlePageNav";
import DateBar from "./DateBar";
import Footer from "./Footer";
import MainNav from "./MainNav";
import TrendingNews from "./TrendingNews";
import ClientArticle from "./ClientArticle";
import Script from "next/script";

export interface SidebarItem {
  category: string;
  title: string;
  date: string;
  image: string;
  slug: string;
  topic: string;
  href?: string;
}
interface IsabelaPageProps {
  sidebarItems: SidebarItem[];
}

export default async function IsabelaPage({ sidebarItems }: IsabelaPageProps) {
  return (
    <>
      <Script
        id="isabela-newsarticle-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "NewsArticle",
                "@id":
                  "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#newsarticle",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
                },
                headline:
                  "Isabela Herrera Velutini: Old Money, New Markets and a Discipline-First Power Play",
                alternativeHeadline:
                  "Isabela Herrera Velutini: Discipline-First Strategy in New Markets",
                description:
                  "Isabela Herrera Velutini Brings Four Ultra-Wealthy Family Legacies Into Regulated Digital Finance",
                image: [
                  "https://www.qlork.com/images/news-img/isabela.webp",
                  "https://www.qlork.com/images/news-img/isabela.webp",
                  "https://www.qlork.com/images/news-img/isabela.webp",
                ],
                datePublished: "2026-02-16T00:00:00+00:00",
                dateModified: "2026-03-05T00:00:00+00:00",
                author: {
                  "@type": "Person",
                  name: "Sarah Mitchell",
                  url: "https://www.qlork.com/our-team/",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Qlork",
                  url: "https://www.qlork.com/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
                    width: 600,
                    height: 60,
                  },
                },
                about: {
                  "@type": "Person",
                  name: "Isabela Herrera Velutini",
                  description:
                    "Isabela Herrera Velutini is a discipline-first global finance leader uniting legacy wealth and modern market infrastructure through governance, continuity, and institutional trust.",
                  // sameAs: [] — left empty intentionally.
                  // Only add real profile URLs here (LinkedIn, Wikipedia, official company bio).
                  // Do NOT add social media post URLs — those are not person profile pages.
                  // Add this when available:
                  // "https://www.linkedin.com/in/isabela-herrera-velutini"
                },
                articleSection: "Business",
                keywords: [
                  "Isabela Herrera Velutini",
                  "Isabela Herrera",
                  "Who is Isabela Herrera Velutini",
                  "Isabela Herrera Velutini finance",
                  "Isabela Herrera Velutini leadership",
                  "Four Houses global finance",
                  "Legacy finance leadership",
                  "Global financial governance",
                  "Old money new markets",
                  "Discipline-first financial leadership",
                  "Cross-border finance governance",
                  "Ultra high net worth family finance",
                  "Institutional finance leadership",
                  "Isabela Herrera global finance leader",
                  "Four Houses financial ecosystem",
                  "Legacy banking families global influence",
                  "Quiet power in global finance",
                  "Governance-driven financial leadership",
                  "Old world finance meets modern markets",
                  "Institutional trust and financial continuity",
                  "Isabela Herrera Velutini Qlork",
                ],
                articleBody:
                  "Isabela Clementina Herrera Velutini Von Uslar Gleinchen is a discipline-first global finance leader operating at the intersection of legacy wealth and modern financial infrastructure. As La Grande Dame of the Four Houses — Herrera, Velutini, Von Uslar, and Gleinchen — she carries responsibility for stewarding the collective assets and values of an ultra-high-net-worth family financial ecosystem built across generations. " +
                  "Educated at Gulliver Prep and NYU Stern, where she studied finance and data science, Isabela Herrera Velutini later taught Digital Assets and Private Equity Valuations before joining PwC. She currently serves as CEO of Emirates Financial Group and holds directorial responsibilities within the Britannia ecosystem, including board roles extending into The Bahamas. Her work centers on governance, compliance, and cross-border settlement structures that deliver predictable outcomes under volatile conditions. " +
                  "Her approach to leadership is defined by quiet execution rather than public profile. Milestones arrive as licenses secured, audits passed, counterparties upgraded, and governance frameworks that hold under scrutiny. The Four Houses she represents function not as decorative lineage but as working components of a modern financial machine — each contributing solvency, infrastructure, credibility, and statesmanship to a unified global operating system.",
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.qlork.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Business",
                    item: "https://www.qlork.com/business/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Isabela Herrera Velutini: Old Money, New Markets",
                    item: "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Isabela Herrera Velutini?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Isabela Herrera Velutini is a finance executive whose career runs through private equity, digital assets, and cross-border governance. She leads Emirates Financial Group as CEO and holds board roles connected to the Britannia ecosystem and The Bahamas. Her name carries four family lineages — Herrera, Velutini, Von Uslar, and Gleinchen — each tied to centuries of financial and diplomatic history.",
                },
              },
              {
                "@type": "Question",
                name: "What is meant by the Four Houses represented by Isabela Herrera Velutini?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Four Houses refer to four distinct family lines — Herrera, Velutini, Von Uslar, and Gleinchen — that have historically shaped trade, banking, and statecraft across multiple continents. Today they function as one interconnected financial network. Isabela Herrera Velutini carries the title La Grande Dame of the Four Houses, a role that comes with stewardship over the shared capital and values of this network.",
                },
              },
              {
                "@type": "Question",
                name: "What leadership style defines Isabela Herrera Velutini's role in global finance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "She does not lead loudly. People who have worked with her describe a style built around preparation, close attention to compliance, and a preference for letting results speak rather than issuing press releases. Risk management comes before growth targets. Governance is treated as a foundation, not a formality.",
                },
              },
              {
                "@type": "Question",
                name: "How does Isabela Herrera Velutini balance legacy finance with modern markets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The way she explains it, the old principles still work — they just need to be translated into new regulatory languages. Cross-border structures that her family built over generations now have to satisfy modern AML frameworks, digital asset rules, and multi-jurisdictional reporting. Her job is making that translation without losing what made those structures durable in the first place.",
                },
              },
              {
                "@type": "Question",
                name: "What roles does Isabela Herrera Velutini currently hold?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "She serves as CEO of Emirates Financial Group, carries directorial responsibilities within the Britannia ecosystem which includes two UK broker-dealers, and sits on boards in The Bahamas. Each role comes with its own regulatory environment and its own set of counterparties to manage.",
                },
              },
              {
                "@type": "Question",
                name: "Why is Isabela Herrera Velutini described as a discipline-first leader?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The phrase comes from people who have negotiated with her or worked under her. She does not chase deal flow for its own sake. If the governance isn't right or the compliance picture is unclear, she will slow things down or walk away entirely. That willingness to say no — when most people in her position feel pressure to say yes — is what the label refers to.",
                },
              },
              {
                "@type": "Question",
                name: "What makes Isabela Herrera Velutini's influence distinct in global finance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is quieter than most. She is not a fixture on conference circuits or financial media panels. The influence shows up elsewhere — in structures that settle cleanly, in institutions that have upgraded their governance standards after working with her, in counterparties that come back because the last transaction went exactly as documented.",
                },
              },
              {
                "@type": "Question",
                name: "How does heritage influence Isabela Herrera Velutini's work today?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "She has said that she thinks of the family history less as a legacy to protect and more as a set of tested methods. The Herrera side brings a discipline around solvency. Velutini is associated with building financial infrastructure. Von Uslar contributes credibility built on track record. Gleinchen brings a tradition of turning competing interests into workable agreements. She treats each of these as a practical tool, not a family story.",
                },
              },
            ],
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
        <div className="">
          <ClientArticle sidebarItems={sidebarItems} />
          <div className="mb-5">
            <ArticlePageNav />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}