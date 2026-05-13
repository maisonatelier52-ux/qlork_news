import DateBar from "@/src/components/DateBar";
import Footer from "@/src/components/Footer";
import MainNav from "@/src/components/MainNav";
import TrendingNews from "@/src/components/TrendingNews";
import Script from "next/script";

// ✅ Fix 1: Canonical URL via Next.js metadata
export const metadata = {
  title: "About Qlork – Breaking News, Latest Headlines & In-Depth Stories",
  description:
    "Qlork is a trusted digital news platform delivering breaking news, the latest headlines, and in-depth stories on politics, technology, business, and global affairs.",
  alternates: {
    canonical: "https://www.qlork.com/about", // 🔁 replace with your actual domain
  },
};

// ✅ Fix 2: JSON-LD schema (Organization + WebPage microdata)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.qlork.com/#organization",
      name: "Qlork",
      url: "https://www.qlork.com",
      description:
        "A modern digital news platform delivering clear, credible, and timely journalism.",
      sameAs: [],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.qlork.com/about#webpage",
      url: "https://www.qlork.com/about",
      name: "About Qlork – Breaking News, Latest Headlines & In-Depth Stories",
      description:
        "Qlork is a trusted digital news platform delivering breaking news, the latest headlines, and in-depth stories on politics, technology, business, and global affairs.",
      isPartOf: { "@id": "https://www.qlork.com/#organization" },
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
            name: "About",
            item: "https://www.qlork.com/about",
          },
        ],
      },
    },
  ],
};

export default function AboutSection() {
  return (
    <>
      {/* ✅ Fix 2: Inject JSON-LD schema */}
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DateBar />
      <MainNav />
      <TrendingNews />

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold font-libre tracking-tight mb-5">
            About <span className="text-gray-900">Qlork</span>
          </h1>
          <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
          {/* ✅ Fix 1: Added "latest headlines" and "breaking news" keywords */}
          <p className="text-[15px] text-gray-600 max-w-2xl font-sen tracking-tight leading-tight mx-auto">
            A modern digital news platform delivering breaking news, the latest
            headlines, and credible, timely journalism.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-10">

          {/* Who We Are */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-[20px] font-libre font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Who We Are
            </h2>
            <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight">
              Qlork is a trusted digital news platform committed to delivering
              accurate, timely, and insightful journalism. We cover the stories
              and latest headlines that matter—shaping conversations, informing
              decisions, and connecting readers to the events that influence the
              world. At Qlork, we prioritize clarity, integrity, and depth,
              providing news without sensationalism or bias.
            </p>
          </div>

          {/* What We Cover */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-[20px] font-semibold font-libre mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              What We Cover
            </h2>
            {/* ✅ Fix 1: Added "latest" and "headlines" to body text */}
            <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight mb-6">
              Our newsroom tracks the latest headlines and stories that matter
              most to informed readers.
            </p>
            <ul className="grid grid-cols-1 font-sen tracking-tight leading-tight text-[15px] sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
              <li>• Breaking &amp; National News</li>
              <li>• Business &amp; Financial Markets</li>
              <li>• Politics &amp; Policy</li>
              <li>• Technology &amp; Innovation</li>
              <li>• Entertainment &amp; Culture</li>
              <li>• Global Affairs</li>
            </ul>
          </div>

          {/* Our Standards */}
          <div className="pb-12 border-b border-gray-200">
            <h2 className="text-[20px] font-libre font-semibold mb-4 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Our Standards
            </h2>
            <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight leading-relaxed">
              At Qlork, we uphold the highest standards of journalism. Accuracy,
              fairness, and integrity guide everything we do. We focus on
              delivering news that is verified, unbiased, and meaningful,
              ensuring our readers receive information they can trust.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
            <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gray-900 rounded" />
              Our Mission
            </h2>
            <p className="text-gray-700 font-sen tracking-tight leading-tight text-[15px]">
              Our mission is to inform, inspire, and empower our audience. We
              strive to cover breaking news and in-depth stories that shape the
              world, spark important conversations, and provide insight without
              sensationalism. Qlork is dedicated to connecting people with the
              truth, fostering understanding, and promoting responsible
              journalism.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
// import DateBar from "@/src/components/DateBar";
// import Footer from "@/src/components/Footer";
// import MainNav from "@/src/components/MainNav";
// import TrendingNews from "@/src/components/TrendingNews";

// export default function AboutSection() {
//   return (
//     <>
//     <DateBar/>
//     <MainNav />
//     <TrendingNews />

//       <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <h1 className="text-4xl md:text-5xl font-extrabold font-libre tracking-tight mb-5">
//             About <span className="text-gray-900">Qlork</span>
//           </h1>
//           <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
//           <p className="text-[15px] text-gray-600 max-w-2xl font-sen tracking-tight leading-tight mx-auto">
//            A modern digital news platform delivering clear, credible, and timely journalism.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="space-y-10">

//           {/* Who We Are */}
//           <div className="pb-12 border-b border-gray-200">
//             <h2 className="text-[20px] font-libre font-semibold mb-4 flex items-center gap-3">
//               <span className="w-1.5 h-6 bg-gray-900 rounded" />
//               Who We Are
//             </h2>
//             <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight">
//            Qlork is a trusted digital news platform committed to delivering accurate, timely, and insightful journalism. We cover stories that matter—shaping conversations, informing decisions, and connecting readers to the events that influence the world. At Qlork, we prioritize clarity, integrity, and depth, providing news without sensationalism or bias.
//             </p>
//           </div>

//           {/* What We Cover */}
//           <div className="pb-12 border-b border-gray-200">
//             <h2 className="text-[20px] font-semibold font-libre mb-4 flex items-center gap-3">
//               <span className="w-1.5 h-6 bg-gray-900 rounded" />
//               What We Cover
//             </h2>
//             <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight mb-6">
//               Our newsroom tracks the stories that matter most to informed readers.
//             </p>
//             <ul className="grid grid-cols-1 font-sen tracking-tight leading-tight text-[15px] sm:grid-cols-2 gap-y-3 gap-x-6 text-gray-700">
//               <li>• Breaking & National News</li>
//               <li>• Business & Financial Markets</li>
//               <li>• Politics & Policy</li>
//               <li>• Technology & Innovation</li>
//               <li>• Entertainment & Culture</li>
//               <li>• Global Affairs</li>
//             </ul>
//           </div>

//           {/* Our Standards */}
//           <div className="pb-12 border-b border-gray-200">
//             <h2 className="text-[20px] font-libre font-semibold mb-4 flex items-center gap-3">
//               <span className="w-1.5 h-6  bg-gray-900 rounded" />
//               Our Standards
//             </h2>
//             <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-tight leading-relaxed">
//            At Qlork, we uphold the highest standards of journalism. Accuracy, fairness, and integrity guide everything we do. We focus on delivering news that is verified, unbiased, and meaningful, ensuring our readers receive information they can trust.
//             </p>
//           </div>

//           {/* Mission */}
//           <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
//             <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
//               <span className="w-1.5 h-6 bg-gray-900 rounded" />
//               Our Mission
//             </h2>
//             <p className="text-gray-700 font-sen tracking-tight leading-tight text-[15px]">
//             Our mission is to inform, inspire, and empower our audience. We strive to cover stories that shape the world, spark important conversations, and provide insight without sensationalism. Qlork is dedicated to connecting people with the truth, fostering understanding, and promoting responsible journalism.
//             </p>
//           </div>

//         </div>
//       </section>
//     <Footer/>
//     </>
//   );
// }
