import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Editorial Policy | Qlork",
  description:
    "Learn about Qlork's Editorial Policy — the principles, standards, and processes that guide how we report, verify, and publish news.",
  keywords: [
    "editorial policy",
    "qlork editorial",
    "journalism standards",
    "news reporting guidelines",
    "editorial independence",
    "newsroom policy",
    "media standards",
  ].join(", "),
  openGraph: {
    title: "Editorial Policy | Qlork",
    description:
      "Learn about Qlork's Editorial Policy — the principles and standards that guide our journalism.",
    url: "https://www.qlork.com/editorial-policy",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Editorial Policy | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | Qlork",
    description:
      "Learn about Qlork's Editorial Policy and the standards that guide our reporting.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/editorial-policy",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

const pillars = [
  {
    label: "Accuracy",
    description:
      "Every claim we publish is verified through multiple reliable sources before going live.",
  },
  {
    label: "Independence",
    description:
      "Editorial decisions are made free from commercial, political, or advertiser influence.",
  },
  {
    label: "Fairness",
    description:
      "We present all sides of a story and give subjects the opportunity to respond.",
  },
  {
    label: "Transparency",
    description:
      "We are open about our methods, sources, and any potential conflicts of interest.",
  },
];

const sections = [
  {
    title: "1. Our Editorial Mission",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork exists to inform the public with accurate, fair, and timely
        journalism. Our editorial team is committed to covering stories that
        matter — from local developments to global affairs — with the depth and
        clarity our readers deserve. Every article we publish reflects a
        commitment to the public interest, not to any political party,
        corporation, or ideology.
      </p>
    ),
  },
  {
    title: "2. Editorial Independence",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Qlork maintains a strict separation between its editorial and
          commercial operations. Advertising relationships, sponsorships, and
          business partnerships have no bearing on how news is selected,
          reported, or presented. Our journalists and editors make all
          content decisions independently.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>No advertiser may influence story selection or framing</li>
          <li>Sponsored content is always clearly labeled as such</li>
          <li>
            Editorial staff are prohibited from accepting gifts or payments
            from sources
          </li>
          <li>
            Ownership or investor interests do not direct news coverage
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Source Standards",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          We hold our sourcing to rigorous standards. Claims are verified
          against at least two independent sources wherever possible. Anonymous
          sources are used sparingly and only when the information is of
          significant public importance and cannot be obtained otherwise.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>
            Primary sources — official documents, data, direct interviews —
            are preferred
          </li>
          <li>
            Anonymous sources are disclosed to an editor before publication
          </li>
          <li>
            We do not republish unverified claims from social media or
            unofficial channels
          </li>
          <li>
            Wire reports and syndicated content are reviewed for accuracy
            before use
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Conflict of Interest",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Journalists and editors at Qlork are required to disclose any
          personal, financial, or professional relationships that could
          influence their reporting. When a conflict cannot be avoided, the
          affected staff member is recused from the relevant coverage.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>
            Staff must disclose investments, affiliations, or relationships
            relevant to their beat
          </li>
          <li>
            Family or personal relationships with news subjects must be
            declared
          </li>
          <li>
            Political activities that could compromise perceived impartiality
            are restricted
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Headline and Image Standards",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Headlines must accurately reflect the content of the article without
        exaggeration, sensationalism, or clickbait. Images are selected to
        fairly represent the subject matter and are properly credited.
        Manipulated or misleading visuals are never used. Captions must be
        accurate and contextually appropriate.
      </p>
    ),
  },
  {
    title: "6. Opinion and Analysis",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Opinion pieces and analysis are clearly labeled to distinguish them
        from straight news reporting. The views expressed in opinion columns
        belong to the individual authors and do not represent the official
        position of Qlork. Analysis pieces are grounded in verified facts
        and are subject to the same editorial review process as news articles.
      </p>
    ),
  },
  {
    title: "7. Editorial Review Process",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Every article published on Qlork passes through a structured review
          process before it is live on the site.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>
            <strong className="font-medium text-gray-900">Draft:</strong>{" "}
            Reporter files the initial story
          </li>
          <li>
            <strong className="font-medium text-gray-900">Desk Edit:</strong>{" "}
            Section editor reviews for accuracy, fairness, and clarity
          </li>
          <li>
            <strong className="font-medium text-gray-900">
              Fact Check:
            </strong>{" "}
            Key claims are independently verified
          </li>
          <li>
            <strong className="font-medium text-gray-900">Legal Review:</strong>{" "}
            Applied to sensitive or legally complex stories
          </li>
          <li>
            <strong className="font-medium text-gray-900">
              Final Approval:
            </strong>{" "}
            Senior editor signs off before publication
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Contact the Editorial Team",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Readers who have questions about our editorial decisions, wish to flag
        inaccuracies, or want to understand our reporting methods are
        encouraged to reach out. You can contact our editorial team directly
        at{" "}
        <a
          href="mailto:editorial@qlork.com"
          className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          editorial@qlork.com
        </a>
        . We take all feedback seriously and respond to substantive inquiries
        within one business day.
      </p>
    ),
  },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-libre font-extrabold tracking-tight mb-5">
              Editorial <span className="text-gray-900">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-[15px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              The principles, standards, and processes that guide every story
              we report and every word we publish.
            </p>
          </div>

          <div className="space-y-10">
            {/* Intro banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-relaxed">
                At Qlork, editorial integrity is non-negotiable. This policy
                sets out the standards our journalists, editors, and
                contributors are held to — ensuring that every article we
                publish serves our readers, not our interests.
              </p>
            </div>

            {/* Four pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-12 border-b border-gray-200">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
                >
                  <h3 className="text-[16px] font-libre font-semibold text-gray-900 mb-2">
                    {pillar.label}
                  </h3>
                  <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Policy sections */}
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-8 space-y-4"
              >
                <h2 className="text-[15px] md:text-[20px] font-semibold font-libre text-gray-900 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-gray-900 rounded flex-shrink-0" />
                  {section.title}
                </h2>
                <div className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-tight">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
              <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Policy Updates
              </h2>
              <p className="text-gray-700 font-sen tracking-tight leading-tight text-[15px]">
                This Editorial Policy is reviewed annually by the Qlork senior
                editorial team and updated as the media landscape evolves.
                Significant changes will be communicated to our staff and noted
                on this page. Last reviewed: May 2025.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}