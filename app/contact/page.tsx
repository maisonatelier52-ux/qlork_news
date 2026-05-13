// import { Metadata } from "next";
// import DateBar from "@/src/components/DateBar";
// import MainNav from "@/src/components/MainNav";
// import Footer from "@/src/components/Footer";
// import TrendingNews from "@/src/components/TrendingNews";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.qlork.com"),
//   title: "Contact Us | Qlork",
//   description:
//     "Get in touch with the Qlork team. Reach out for news tips, editorial inquiries, advertising partnerships, or general questions.",
//   keywords: [
//     "contact qlork",
//     "news tips",
//     "editorial contact",
//     "advertising inquiry",
//     "qlork support",
//     "press contact",
//     "media inquiry",
//   ].join(", "),
//   openGraph: {
//     title: "Contact Us | Qlork",
//     description:
//       "Get in touch with the Qlork team for news tips, editorial inquiries, or advertising partnerships.",
//     url: "https://www.qlork.com/contact-us",
//     siteName: "Qlork",
//     type: "website",
//     locale: "en_US",
//     images: [
//       {
//         url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Contact Us | Qlork",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Contact Us | Qlork",
//     description:
//       "Get in touch with the Qlork team for news tips, editorial inquiries, or advertising.",
//     images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://www.qlork.com/contact-us",
//   },
//   icons: {
//     icon: "/images/qlork-favIcon.webp",
//     shortcut: "/images/qlork-favIcon.webp",
//     apple: "/images/qlork-favIcon.webp",
//   },
// };

// const contactCategories = [
//   {
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
//         />
//       </svg>
//     ),
//     title: "News Tips",
//     description:
//       "Have a story lead or breaking news tip? Our editorial team reviews every submission.",
//     email: "tips@qlork.com",
//   },
//   {
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
//         />
//       </svg>
//     ),
//     title: "Editorial",
//     description:
//       "Questions about our reporting, corrections, or editorial standards and practices.",
//     email: "editorial@qlork.com",
//   },
//   {
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
//         />
//       </svg>
//     ),
//     title: "Advertising",
//     description:
//       "Explore partnership opportunities, sponsored content, and advertising solutions.",
//     email: "ads@qlork.com",
//   },
//   {
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={1.5}
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
//         />
//       </svg>
//     ),
//     title: "General Inquiries",
//     description:
//       "For anything else — feedback, technical issues, or general questions about Qlork.",
//     email: "hello@qlork.com",
//   },
// ];

// export default function ContactPage() {
//   return (
//     <>
//       <div className="bg-white min-h-screen">
//         <DateBar />
//         <MainNav />
//         <TrendingNews />

//         <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

//           {/* Header */}
//           <div className="text-center mb-20">
//             <h1 className="text-4xl md:text-5xl font-extrabold font-libre tracking-tight mb-5">
//               Contact <span className="text-gray-900">Us</span>
//             </h1>
//             <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
//             <p className="text-[15px] text-gray-600 max-w-2xl font-sen tracking-tight leading-tight mx-auto">
//               We'd love to hear from you. Reach out to the right team and we'll get back to you as soon as possible.
//             </p>
//           </div>

//           <div className="space-y-10">

//             {/* Contact Category Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12 border-b border-gray-200">
//               {contactCategories.map((category) => (
//                 <div
//                   key={category.title}
//                   className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
//                       {category.icon}
//                     </div>
//                     <div>
//                       <h2 className="text-[16px] font-libre font-semibold text-gray-900 mb-1">
//                         {category.title}
//                       </h2>
//                       <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600 mb-3">
//                         {category.description}
//                       </p>
//                       <a
//                         href={`mailto:${category.email}`}
//                         className="text-[13px] font-sen font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
//                       >
//                         {category.email}
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Contact Form */}
//             <div className="pb-12 border-b border-gray-200">
//               <h2 className="text-[20px] font-libre font-semibold mb-2 flex items-center gap-3">
//                 <span className="w-1.5 h-6 bg-gray-900 rounded" />
//                 Send Us a Message
//               </h2>
//               <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600 mb-8 ml-5">
//                 Fill out the form below and our team will respond within 1–2 business days.
//               </p>

//               <form className="space-y-5" action="#" method="POST">
//                 {/* Name + Email row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
//                     >
//                       Full Name <span className="text-gray-400">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       placeholder="Jane Smith"
//                       className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
//                     >
//                       Email Address <span className="text-gray-400">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       placeholder="jane@example.com"
//                       className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors"
//                     />
//                   </div>
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label
//                     htmlFor="subject"
//                     className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
//                   >
//                     Subject <span className="text-gray-400">*</span>
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     defaultValue=""
//                     className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors appearance-none"
//                   >
//                     <option value="" disabled>
//                       Select a topic
//                     </option>
//                     <option value="news-tip">News Tip</option>
//                     <option value="editorial">Editorial / Correction</option>
//                     <option value="advertising">Advertising &amp; Partnerships</option>
//                     <option value="technical">Technical Issue</option>
//                     <option value="feedback">Feedback</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
//                   >
//                     Message <span className="text-gray-400">*</span>
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={6}
//                     placeholder="Tell us how we can help..."
//                     className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors resize-none"
//                   />
//                 </div>

//                 {/* Submit */}
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <p className="text-[12px] font-sen text-gray-500">
//                     Fields marked with <span className="text-gray-400">*</span> are required.
//                   </p>
//                   <button
//                     type="submit"
//                     className="px-8 py-3 bg-gray-900 text-white text-[14px] font-sen font-medium rounded-xl hover:bg-gray-700 active:scale-[0.98] transition-all duration-150"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Info footer block */}
//             <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
//               <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
//                 <span className="w-1.5 h-6 bg-gray-900 rounded" />
//                 Response Times
//               </h2>
//               <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
//                 <li className="flex items-start gap-2">
//                   <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
//                   <span><strong className="font-medium text-gray-900">News Tips:</strong> Reviewed within 24 hours. We may not respond to every submission individually.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
//                   <span><strong className="font-medium text-gray-900">Editorial:</strong> Corrections and clarifications are addressed within 1 business day.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
//                   <span><strong className="font-medium text-gray-900">Advertising:</strong> A member of our partnerships team will reach out within 2 business days.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
//                   <span><strong className="font-medium text-gray-900">General:</strong> Most inquiries receive a response within 2–3 business days.</span>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// }

import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Contact Qlork | News Tips, Editorial & Advertising Support",
  description:
    "Contact Qlork for news tips, editorial inquiries, advertising partnerships, technical support, and general questions.",
  keywords: [
    "contact qlork",
    "news tips",
    "editorial contact",
    "advertising inquiry",
    "qlork support",
    "press contact",
    "media inquiry",
  ].join(", "),
  openGraph: {
    title: "Contact Qlork | News Tips, Editorial & Advertising Support",
    description:
      "Contact Qlork for news tips, editorial inquiries, advertising partnerships, technical support, and general questions.",
    url: "https://www.qlork.com/contact",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Qlork | News Tips, Editorial & Advertising Support",
    description:
      "Contact Qlork for news tips, editorial inquiries, advertising partnerships, technical support, and general questions.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/contact",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

const contactCategories = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>
    ),
    title: "News Tips",
    description:
      "Have a story lead or breaking news tip? Our editorial team reviews every submission.",
    email: "tips@qlork.com",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
    title: "Editorial",
    description:
      "Questions about our reporting, corrections, or editorial standards and practices.",
    email: "editorial@qlork.com",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
    title: "Advertising",
    description:
      "Explore partnership opportunities, sponsored content, and advertising solutions.",
    email: "ads@qlork.com",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "General Inquiries",
    description:
      "For anything else — feedback, technical issues, or general questions about Qlork.",
    email: "hello@qlork.com",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Qlork | News Tips, Editorial & Advertising Support",
  url: "https://www.qlork.com/contact",
  description:
    "Contact Qlork for editorial inquiries, news tips, advertising, and support.",
  publisher: {
    "@type": "Organization",
    name: "Qlork",
    url: "https://www.qlork.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@qlork.com",
    },
    {
      "@type": "ContactPoint",
      contactType: "editorial",
      email: "editorial@qlork.com",
    },
    {
      "@type": "ContactPoint",
      contactType: "advertising",
      email: "ads@qlork.com",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold font-libre tracking-tight mb-5">
              Contact <span className="text-gray-900">Us</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            {/* SEO Fix #1: Keyword-rich intro paragraph matching title/H1 */}
            <p className="text-[15px] text-gray-600 max-w-2xl font-sen tracking-tight leading-tight mx-auto">
              Contact Qlork for news tips, editorial questions, advertising inquiries,
              technical support, or general feedback. The Qlork team responds to most
              contact requests within 1–3 business days.
            </p>
          </div>

          {/* SEO Fix #2: Semantic intro paragraph for keyword depth */}
          <div className="max-w-3xl mx-auto mb-14 text-gray-600 font-sen text-[15px] leading-relaxed text-center">
            <p>
              The Qlork contact page helps readers, journalists, advertisers, and
              partners connect with the right department. Whether you need editorial
              assistance, media support, advertising information, or technical help,
              the Qlork team is here to assist you.
            </p>
          </div>

          <div className="space-y-10">

            {/* Contact Category Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12 border-b border-gray-200">
              {contactCategories.map((category) => (
                <div
                  key={category.title}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-[16px] font-libre font-semibold text-gray-900 mb-1">
                        {category.title}
                      </h2>
                      <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600 mb-3">
                        {category.description}
                      </p>
                      <a
                        href={`mailto:${category.email}`}
                        className="text-[13px] font-sen font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
                        title={category.title}
                      >
                        {category.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="pb-12 border-b border-gray-200">
              <h2 className="text-[20px] font-libre font-semibold mb-2 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Send Us a Message
              </h2>
              <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600 mb-8 ml-5">
                Fill out the form below and our team will respond within 1–2 business days.
              </p>

              <form className="space-y-5" action="#" method="POST">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
                    >
                      Email Address <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
                  >
                    Subject <span className="text-gray-400">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="news-tip">News Tip</option>
                    <option value="editorial">Editorial / Correction</option>
                    <option value="advertising">Advertising &amp; Partnerships</option>
                    <option value="technical">Technical Issue</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-sen font-medium text-gray-700 mb-1.5"
                  >
                    Message <span className="text-gray-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 text-[14px] font-sen text-gray-900 border border-gray-200 rounded-xl bg-white placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[12px] font-sen text-gray-500">
                    Fields marked with <span className="text-gray-400">*</span> are required.
                  </p>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gray-900 text-white text-[14px] font-sen font-medium rounded-xl hover:bg-gray-700 active:scale-[0.98] transition-all duration-150"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Info footer block */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
              <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Response Times
              </h2>
              <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span><strong className="font-medium text-gray-900">News Tips:</strong> Reviewed within 24 hours. We may not respond to every submission individually.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span><strong className="font-medium text-gray-900">Editorial:</strong> Corrections and clarifications are addressed within 1 business day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span><strong className="font-medium text-gray-900">Advertising:</strong> A member of our partnerships team will reach out within 2 business days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span><strong className="font-medium text-gray-900">General:</strong> Most inquiries receive a response within 2–3 business days.</span>
                </li>
              </ul>
            </div>

            {/* SEO Fix #5: FAQ Section for keyword consistency & long-tail SEO */}
            <section className="pb-4">
              <h2 className="text-[20px] font-libre font-semibold mb-2 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Frequently Asked Questions
              </h2>
              <p className="text-[14px] font-sen tracking-tight leading-tight text-gray-600 mb-8 ml-5">
                Common questions about contacting Qlork.
              </p>

              <div className="space-y-6 font-sen">
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                    How do I contact Qlork?
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    You can contact Qlork using the contact form above or by emailing the
                    appropriate department directly. For news tips, reach out to{" "}
                    <a href="mailto:tips@qlork.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors" title="Email of qlork tip">tips@qlork.com</a>.
                    For editorial questions, email{" "}
                    <a href="mailto:editorial@qlork.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors" title="Email of qlork editorial">editorial@qlork.com</a>.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Does Qlork respond to news tips?
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Yes. The Qlork editorial team reviews all submitted news tips and media
                    inquiries. Tips are typically reviewed within 24 hours, though we may
                    not be able to respond to every submission individually.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                    How can I advertise on Qlork?
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Qlork offers a range of advertising and partnership opportunities
                    including display advertising, sponsored content, and branded
                    integrations. Contact our advertising team at{" "}
                    <a href="mailto:ads@qlork.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors" title="Email of qlork ads">ads@qlork.com</a>{" "}
                    for more information on media kits and rates.
                  </p>
                </div>

                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                    How do I request a correction to a Qlork article?
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Qlork is committed to accuracy. If you believe an article contains an
                    error, please contact our editorial team at{" "}
                    <a href="mailto:editorial@qlork.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors" title="Email of qlork editorial">editorial@qlork.com</a>{" "}
                    with the article URL and details of the correction. Editorial corrections
                    are addressed within 1 business day.
                  </p>
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-gray-900 mb-2">
                    Where is Qlork based?
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Qlork is an online news platform. For all location-independent
                    contact and support needs, use the contact form on this page or
                    reach the Qlork team at{" "}
                    <a href="mailto:hello@qlork.com" className="underline underline-offset-2 hover:text-gray-900 transition-colors" title="Email of qlork hello">hello@qlork.com</a>.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}