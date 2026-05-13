// app/corrections-policy/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Corrections Policy | Qlork",
  description:
    "Read Qlork's Corrections Policy. We are committed to transparency — when we get something wrong, we fix it promptly and openly.",
  keywords: [
    "corrections policy",
    "qlork corrections",
    "news corrections",
    "editorial corrections",
    "journalism accuracy",
    "publishing corrections",
    "error correction",
  ].join(", "),
  openGraph: {
    title: "Corrections Policy | Qlork",
    description:
      "Read Qlork's Corrections Policy. When we get something wrong, we fix it promptly and openly.",
    url: "https://www.qlork.com/corrections-policy",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Corrections Policy | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy | Qlork",
    description:
      "Read Qlork's Corrections Policy and how we handle errors in our reporting.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/corrections-policy",
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
      "@id": "https://www.qlork.com/corrections-policy",
      url: "https://www.qlork.com/corrections-policy",
      name: "Corrections Policy | Qlork",
      description:
        "Read Qlork's Corrections Policy. We are committed to transparency — when we get something wrong, we fix it promptly and openly.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.qlork.com/#website",
      },
      dateModified: "2025-05-01",
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
            name: "Corrections Policy",
            item: "https://www.qlork.com/corrections-policy",
          },
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
      publisher: {
        "@id": "https://www.qlork.com/#organization",
      },
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
        email: "corrections@qlork.com",
        contactType: "Corrections",
      },
      correctionsPolicy: "https://www.qlork.com/corrections-policy",
      ethicsPolicy: "https://www.qlork.com/editorial-policy",
    },
  ],
};

const correctionTypes = [
  {
    label: "Factual Error",
    description:
      "Incorrect names, dates, figures, or statements of fact. Corrected immediately with a visible note appended to the article.",
  },
  {
    label: "Clarification",
    description:
      "Language that was technically accurate but misleading in context. A clarification note is added explaining the update.",
  },
  {
    label: "Retraction",
    description:
      "Significant errors that undermine the article's core premise. The article is withdrawn and a retraction notice published in its place.",
  },
  {
    label: "Update",
    description:
      "New information that changes the context of a story. An editor's note is appended with the date and nature of the update.",
  },
];

const sections = [
  {
    title: "1. Our Commitment to Accuracy",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork is committed to publishing accurate, verified journalism. We
        recognise, however, that errors can occur. When they do, we believe
        the only appropriate response is swift, transparent correction. Qlork
        does not silently edit published articles. Every material change to a
        published piece is acknowledged openly so our readers can trust what
        they read — including our mistakes.
      </p>
    ),
  },
  {
    title: "2. How We Handle Corrections",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          When an error is identified — whether by a reader, a source, or our
          own staff — Qlork follows a consistent corrections process:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>
            The error is reported to the section editor responsible for the
            article
          </li>
          <li>
            The editor assesses the nature and severity of the error within
            one hour of notification
          </li>
          <li>
            Minor factual corrections are made and labeled within four hours
          </li>
          <li>
            Significant errors requiring editorial review are addressed within
            one business day
          </li>
          <li>
            The original journalist and any affected parties are notified
          </li>
          <li>
            Corrections are never deleted — the full correction history remains
            visible on the article
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. What We Do Not Do",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        <li>
          Qlork does not silently alter articles without an appended correction
          note
        </li>
        <li>
          We do not delete articles to conceal errors — retractions are
          published in place of removed content
        </li>
        <li>
          We do not alter headlines, captions, or metadata without noting the
          change
        </li>
        <li>
          We do not delay corrections to protect a story's performance or
          traffic
        </li>
      </ul>
    ),
  },
  {
    title: "4. Correction Labels",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          All corrections are appended to the affected article in a clearly
          visible label. The label includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>The date and time the correction was published</li>
          <li>A description of what was incorrect</li>
          <li>A description of what the correct information is</li>
          <li>
            For retractions: a full statement explaining why the article has
            been withdrawn
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Social Media and Syndicated Content",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        When a corrected article has been shared on Qlork's social media
        channels, we will post a follow-up noting the correction. For
        syndicated content distributed to partner outlets, Qlork notifies the
        syndication partner promptly so the correction can be applied
        upstream. We cannot always guarantee corrections are reflected in
        third-party publications, but we make every effort to ensure they are.
      </p>
    ),
  },
  {
    title: "6. Reader-Submitted Corrections",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork welcomes and takes seriously all correction requests from our
        readers. If you believe something we have published is factually
        incorrect, please contact us at{" "}
        <a
          href="mailto:corrections@qlork.com"
          className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          corrections@qlork.com
        </a>{" "}
        with the article URL, the specific error, and any supporting evidence.
        Every submission is reviewed by a senior editor. We will acknowledge
        your report and inform you of the outcome.
      </p>
    ),
  },
  {
    title: "7. Disputes",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        If a correction request is reviewed and the Qlork editorial team
        determines the original reporting was accurate, we will explain our
        reasoning to the person who raised the concern. We are always open to
        re-examining our conclusions if new evidence is presented. Persistent
        disputes may be escalated to the Editor-in-Chief for a final decision.
      </p>
    ),
  },
];

export default function CorrectionsPage() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <Script
        id="corrections-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">
          {/* Header */}
          <div className="text-center mb-16">
            {/* ✅ h1 — top of heading hierarchy */}
            <h1 className="text-4xl md:text-5xl font-libre font-extrabold tracking-tight mb-5">
              Corrections <span className="text-gray-900">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            {/* ✅ "Qlork" keyword naturally present in visible page text */}
            <p className="text-[15px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              Qlork's corrections policy: when we get something wrong, we fix
              it quickly, openly, and without excuses.
            </p>
          </div>

          <div className="space-y-10">
            {/* Intro banner — "qlork" + "corrections" + "policy" all visible here */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-relaxed">
                Transparency is a cornerstone of responsible journalism. Qlork
                does not hide errors — we acknowledge them, correct them, and
                learn from them. This corrections policy explains exactly how
                Qlork handles mistakes in our published work.
              </p>
            </div>

            {/* Correction type cards */}
            {/* ✅ h2 wraps the cards section so h2 > h3 order is valid */}
            <div className="pb-12 border-b border-gray-200">
              <h2 className="sr-only">Types of Corrections</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {correctionTypes.map((type) => (
                  <div
                    key={type.label}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
                  >
                    {/* ✅ h3 — correctly nested under the h2 above */}
                    <h3 className="text-[16px] font-libre font-semibold text-gray-900 mb-2">
                      {type.label}
                    </h3>
                    <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Policy sections — all h2, correct after h1 */}
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-8 space-y-4"
              >
                {/* ✅ h2 — direct children of h1, correct order */}
                <h2 className="text-[15px] md:text-[20px] font-semibold font-libre text-gray-900 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-gray-900 rounded flex-shrink-0" />
                  {section.title}
                </h2>
                <div className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-tight">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Contact footer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
              {/* ✅ h2 — same level as other policy section headings */}
              <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Submit a Correction to Qlork
              </h2>
              <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">
                      Email:
                    </strong>{" "}
                    Send correction requests to{" "}
                    <a
                      href="mailto:corrections@qlork.com"
                      className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
                    >
                      corrections@qlork.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">
                      Include:
                    </strong>{" "}
                    The article URL, the specific error, and any supporting
                    sources or evidence
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">
                      Response time:
                    </strong>{" "}
                    All correction requests submitted to Qlork are reviewed
                    within one business day
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