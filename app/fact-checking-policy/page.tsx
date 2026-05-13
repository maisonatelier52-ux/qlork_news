import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Fact-Checking Policy | Qlork – How We Verify Every Story",
  description:
    "Discover how Qlork verifies the facts in every story we publish. Our rigorous fact-checking policy ensures accuracy and builds reader trust.",
  keywords: [
    "fact-checking policy",
    "qlork fact check",
    "news verification",
    "journalism fact check",
    "source verification",
    "media accuracy",
    "misinformation prevention",
  ].join(", "),
  openGraph: {
    title: "Fact-Checking Policy | Qlork – How We Verify Every Story",
    description: "Discover how Qlork verifies the facts in every story we publish.",
    url: "https://www.qlork.com/fact-checking-policy",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Fact-Checking Policy | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fact-Checking Policy | Qlork – How We Verify Every Story",
    description: "Discover how Qlork fact-checks every story before publication.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.qlork.com/fact-checking-policy",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.qlork.com/fact-checking-policy",
      url: "https://www.qlork.com/fact-checking-policy",
      name: "Fact-Checking Policy | Qlork – How We Verify Every Story",
      description:
        "Discover how Qlork verifies the facts in every story we publish. Our rigorous fact-checking policy ensures accuracy and builds reader trust.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.qlork.com/#website" },
      dateModified: "2025-05-01",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qlork.com" },
          { "@type": "ListItem", position: 2, name: "Fact-Checking Policy", item: "https://www.qlork.com/fact-checking-policy" },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.qlork.com/#website",
      url: "https://www.qlork.com",
      name: "Qlork",
      description: "Accurate, fair, and timely journalism.",
      inLanguage: "en-US",
      publisher: { "@id": "https://www.qlork.com/#organization" },
    },
    {
      "@type": "NewsMediaOrganization",
      "@id": "https://www.qlork.com/#organization",
      name: "Qlork",
      url: "https://www.qlork.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "factcheck@qlork.com",
        contactType: "Fact-Checking",
      },
      verificationFactCheckingPolicy: "https://www.qlork.com/fact-checking-policy",
      ethicsPolicy: "https://www.qlork.com/ethics-policy",
      correctionsPolicy: "https://www.qlork.com/corrections-policy",
    },
  ],
};

const steps = [
  {
    step: "01",
    title: "Source Identification",
    description:
      "Reporters identify and document all primary sources — official records, data sets, and direct interviews — before writing begins.",
  },
  {
    step: "02",
    title: "Independent Verification",
    description:
      "A second journalist or editor verifies key claims against sources not supplied by the original reporter.",
  },
  {
    step: "03",
    title: "Subject Right of Reply",
    description:
      "Individuals or organisations named in a story are contacted for comment before publication wherever possible.",
  },
  {
    step: "04",
    title: "Senior Editorial Sign-Off",
    description:
      "A senior editor reviews all verified material and approves the final published version.",
  },
];

const sections = [
  {
    title: "1. Why Fact-Checking Matters",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        In an era of rapid information and widespread misinformation, a rigorous
        fact-checking policy is one of the most important things a news
        organisation can maintain. At Qlork, every claim, statistic, name, date,
        and quote in our reporting is checked before it reaches our readers.
        Fact-checking is not an optional step — it is built into the foundation
        of how every Qlork story is produced and how we verify every article
        before publication.
      </p>
    ),
  },
  {
    title: "2. What We Fact-Check",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        <li>All statistical claims, figures, and data cited in articles</li>
        <li>Direct quotes attributed to named or unnamed individuals</li>
        <li>Claims made by public figures, organisations, or official sources</li>
        <li>Historical context and background presented as established fact</li>
        <li>Headlines and sub-headings to ensure they accurately represent the body of the story</li>
        <li>Image captions and metadata for accuracy and fair representation</li>
      </ul>
    ),
  },
  {
    title: "3. Types of Sources We Accept",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Not all sources carry equal weight. Qlork evaluates sources based on
          their reliability, authority, and independence. Here is how we verify
          each story's sources before publication.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-[15px] font-libre font-semibold text-gray-900 mb-2">
              Primary Sources (Preferred)
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
              <li>Official government documents, reports, and legislation</li>
              <li>Peer-reviewed academic and scientific research</li>
              <li>On-the-record interviews with direct witnesses or subjects</li>
              <li>Verified data from established statistical bodies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-libre font-semibold text-gray-900 mb-2">
              Secondary Sources (Used with Caution)
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
              <li>Reputable news organisations with established editorial standards</li>
              <li>Statements from press offices, subject to independent verification</li>
              <li>Expert analysis cited alongside primary evidence</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-libre font-semibold text-gray-900 mb-2">
              Sources We Do Not Use
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
              <li>Unverified social media posts as standalone evidence</li>
              <li>Anonymous blogs or websites without editorial oversight</li>
              <li>AI-generated content presented as factual source material</li>
              <li>Propaganda materials from parties with a vested interest in the outcome</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "4. Handling Breaking News",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Breaking news presents unique challenges for verification. When covering
        a rapidly developing story, Qlork clearly labels preliminary reports and
        updates them as facts are confirmed. We do not publish unverified casualty
        figures, identities, or causes. If a claim cannot be independently
        verified, we say so explicitly rather than presenting speculation as fact.
        Speed is never prioritised over accuracy — this is how we verify every
        breaking story responsibly.
      </p>
    ),
  },
  {
    title: "5. Viral Claims and Misinformation",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        When a claim is circulating widely online and our journalists assess it
        as potentially misleading or false, Qlork investigates it as a standalone
        fact-check story. These pieces apply our full verification policy —
        consulting primary sources, reaching out to relevant experts, and
        publishing our methodology alongside the verdict. We clearly label all
        such pieces as fact-check articles.
      </p>
    ),
  },
  {
    title: "6. Transparency in Our Process",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Where relevant, Qlork includes links to primary source documents, data,
        and reports so readers can review the evidence themselves. We believe in
        showing how we verify every story — our work is open to scrutiny. If you
        believe a fact cited in our reporting is incorrect, we encourage you to
        contact us with supporting evidence at{" "}
        {/* ✅ Fix: title attribute added */}
        <a
          href="mailto:factcheck@qlork.com"
          title="Email Qlork Fact-Checking Team"
          className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          factcheck@qlork.com
        </a>
        .
      </p>
    ),
  },
];

export default function FactCheckingPolicyPage() {
  return (
    <>
      {/* ✅ Fix: inline <script> — crawlers parse synchronously */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-libre font-extrabold tracking-tight mb-5">
              Fact-Checking <span className="text-gray-900">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            {/* ✅ Fix: "how", "verify", "story" added to subtitle */}
            <p className="text-[15px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              Discover how Qlork's fact-checking policy works — the exact steps
              we use to verify every story and every claim before publication.
            </p>
          </div>

          <div className="space-y-10">
            {/* ✅ Fix: intro box repeats "how", "verify", "story" in visible body text */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-relaxed">
                Misinformation spreads fast. This page explains how Qlork's
                fact-checking policy works — and how we verify every story,
                statistic, and source before it reaches our readers. Accuracy
                is not optional at Qlork; it is the foundation of every story
                we publish.
              </p>
            </div>

            <div className="pb-12 border-b border-gray-200">
              <h2 className="text-[20px] font-libre font-semibold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Our Verification Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {steps.map((step) => (
                  <div
                    key={step.step}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
                  >
                    <span className="text-[11px] font-sen font-semibold tracking-widest text-gray-400 uppercase">
                      Step {step.step}
                    </span>
                    <h3 className="text-[16px] font-libre font-semibold text-gray-900 mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {sections.map((section, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl p-8 space-y-4">
                <h2 className="text-[15px] md:text-[20px] font-semibold font-libre text-gray-900 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-gray-900 rounded flex-shrink-0" />
                  {section.title}
                </h2>
                <div className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-tight">
                  {section.content}
                </div>
              </div>
            ))}

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
              <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Dispute a Fact with Qlork
              </h2>
              <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    If you believe information in one of our stories is factually
                    incorrect, email Qlork's fact-checking team at{" "}
                    {/* ✅ Fix: title attribute added */}
                    <a
                      href="mailto:factcheck@qlork.com"
                      title="Email Qlork Fact-Checking Team"
                      className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
                    >
                      factcheck@qlork.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    Include the article URL, the specific claim you dispute, and
                    any primary source evidence supporting your position
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    Qlork's editorial team reviews all fact-check submissions and
                    responds within one business day
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}