import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Ethics Policy | Qlork – Responsible Journalism Standards",
  description:
    "Read Qlork's Ethics Policy — the values and standards that guide how we report responsibly, treat our sources fairly, and serve the public interest.",
  keywords: [
    "ethics policy",
    "qlork ethics",
    "journalism ethics",
    "media ethics",
    "responsible journalism",
    "editorial ethics",
    "press ethics",
  ].join(", "),
  openGraph: {
    title: "Ethics Policy | Qlork – Responsible Journalism Standards",
    description: "Read Qlork's Ethics Policy — the values and standards that guide responsible journalism.",
    url: "https://www.qlork.com/ethics-policy",
    siteName: "Qlork",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
        width: 1200,
        height: 630,
        alt: "Ethics Policy | Qlork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethics Policy | Qlork – Responsible Journalism Standards",
    description: "Read Qlork's Ethics Policy and the values that guide our journalism.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.qlork.com/ethics-policy",
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
      "@id": "https://www.qlork.com/ethics-policy",
      url: "https://www.qlork.com/ethics-policy",
      name: "Ethics Policy | Qlork – Responsible Journalism Standards",
      description:
        "Read Qlork's Ethics Policy — the values and standards that guide how we report responsibly, treat our sources fairly, and serve the public interest.",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.qlork.com/#website" },
      dateModified: "2025-05-01",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qlork.com" },
          { "@type": "ListItem", position: 2, name: "Ethics Policy", item: "https://www.qlork.com/ethics-policy" },
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
        email: "ethics@qlork.com",
        contactType: "Ethics",
      },
      ethicsPolicy: "https://www.qlork.com/ethics-policy",
      correctionsPolicy: "https://www.qlork.com/corrections-policy",
    },
  ],
};

const values = [
  {
    label: "Truth",
    description: "We seek the truth and report it as fully as possible, regardless of who it may inconvenience.",
  },
  {
    label: "Accountability",
    description: "We hold the powerful to account while remaining accountable to our readers and to the same standards we apply to others.",
  },
  {
    label: "Minimise Harm",
    description: "We weigh the public interest against the potential to cause harm, and we err on the side of compassion.",
  },
  {
    label: "Act Independently",
    description: "We serve the public interest alone — not advertisers, governments, or any faction seeking to shape our coverage.",
  },
];

const sections = [
  {
    title: "1. Our Ethical Foundation",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork's ethics policy is rooted in the principles that have defined
        credible journalism for generations: truth, fairness, accountability,
        and a commitment to minimising harm. These are not aspirations — they
        are binding standards that apply to every member of our staff, from
        reporters to editors to contributors. Journalism done right is a public
        service, and Qlork takes that responsibility seriously.
      </p>
    ),
  },
  {
    title: "2. Impartiality and Political Independence",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Qlork does not endorse political parties, candidates, or ideologies.
          Our news coverage is guided by the facts of a story, not by political
          preference. Staff are expected to maintain impartiality in their
          reporting and to avoid public expressions of political opinion that
          could undermine confidence in our independence.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>Journalists do not campaign for, donate to, or publicly endorse political candidates</li>
          <li>Party membership or political affiliations must be declared to editors</li>
          <li>Editorial positions on policy are clearly labeled as such and distinguished from news reporting</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Protection of Sources",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Sources who provide information in confidence will be protected. Qlork
        will not disclose the identity of an anonymous source without their
        explicit consent, except where required by law. This commitment to
        source protection is fundamental to the trust that makes investigative
        and public-interest journalism possible. Reporters are trained in secure
        communications and digital safety practices to protect sources from
        exposure.
      </p>
    ),
  },
  {
    title: "4. Dignity and Sensitivity",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Qlork covers difficult stories — crime, tragedy, conflict, and human
          suffering. We do so with care. Our journalists approach vulnerable
          individuals with compassion and without coercion. We follow established
          guidance on reporting sensitive subjects including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>Suicide and self-harm — following safe messaging guidelines endorsed by mental health organisations</li>
          <li>Sexual violence — protecting survivor identity and avoiding gratuitous detail</li>
          <li>Child welfare — never publishing information that could identify or endanger a minor</li>
          <li>Grief and trauma — seeking consent before interviewing individuals in acute distress</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Diversity and Representation",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork is committed to reflecting the full breadth of the communities we
        cover. We seek out diverse voices, perspectives, and sources — not as a
        box-ticking exercise, but because journalism that represents only a
        narrow slice of society fails most of the people it is meant to serve.
        We review our sourcing regularly to identify and address gaps in
        representation across gender, ethnicity, geography, age, and background.
      </p>
    ),
  },
  {
    title: "6. Privacy",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Individuals have a right to privacy. Qlork only intrudes on that
          privacy when there is a clear and demonstrable public interest that
          outweighs it. We do not publish private information without consent,
          unless the information is directly relevant to a significant matter of
          public concern.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
          <li>Public figures retain privacy rights in areas unrelated to their public role</li>
          <li>Private individuals receive stronger privacy protections than those who seek public attention</li>
          <li>Photographs and images are used only with permission or where their publication is clearly justified</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Commercial and Sponsored Content",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Any content produced in partnership with or paid for by a commercial
        organisation is clearly and prominently labeled as sponsored or partner
        content. It is never presented in a way that could be mistaken for
        independent editorial coverage. Our commercial team and editorial team
        operate separately — no advertiser has input into our news coverage, and
        no editorial coverage is provided in exchange for advertising.
      </p>
    ),
  },
  {
    title: "8. Use of Artificial Intelligence",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Qlork uses AI tools to assist in research, transcription, and
        administrative workflows. AI-generated text is never published as
        original journalism without full review, verification, and editing by a
        human journalist. We do not use AI to fabricate quotes, sources, or
        facts. Any article that involves significant AI assistance in its
        drafting will note this transparently. Our editorial standards apply
        equally to AI-assisted and human-authored content.
      </p>
    ),
  },
  {
    title: "9. Reporting Ethics Concerns",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Members of the public or Qlork staff who believe an ethical standard has
        been breached are encouraged to raise the matter directly. Staff concerns
        can be raised confidentially with the Editor-in-Chief. Reader concerns
        should be submitted to{" "}
        {/* ✅ Fix: title attribute added */}
        <a
          href="mailto:ethics@qlork.com"
          title="Email Qlork Ethics Team"
          className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          ethics@qlork.com
        </a>
        . All ethics reports are reviewed and responded to within two business
        days. Qlork takes every ethics concern seriously and investigates
        impartially.
      </p>
    ),
  },
];

export default function EthicsPolicyPage() {
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
              Ethics <span className="text-gray-900">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-[15px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              Qlork's ethics policy: the values that guide how we report, how
              we treat people, and how we serve the public interest.
            </p>
          </div>

          <div className="space-y-10">
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-relaxed">
                Ethical journalism is not simply about avoiding harm — it is
                about actively earning the trust of the public every day. This
                ethics policy defines the values Qlork holds itself to, and the
                standards our journalists and editors are expected to uphold in
                every story they produce.
              </p>
            </div>

            <div className="pb-12 border-b border-gray-200">
              <h2 className="sr-only">Our Core Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((value) => (
                  <div
                    key={value.label}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-gray-400 transition-colors duration-200"
                  >
                    <h3 className="text-[16px] font-libre font-semibold text-gray-900 mb-2">
                      {value.label}
                    </h3>
                    <p className="text-[13px] font-sen tracking-tight leading-tight text-gray-600">
                      {value.description}
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
                Raise an Ethics Concern with Qlork
              </h2>
              <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">Email:</strong>{" "}
                    Submit concerns to{" "}
                    {/* ✅ Fix: title attribute added */}
                    <a
                      href="mailto:ethics@qlork.com"
                      title="Email Qlork Ethics Team"
                      className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
                    >
                      ethics@qlork.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">Response time:</strong>{" "}
                    All ethics concerns submitted to Qlork are reviewed and acknowledged within two business days
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    <strong className="font-medium text-gray-900">Policy review:</strong>{" "}
                    This Ethics Policy is reviewed annually by the Qlork editorial team. Last reviewed: May 2025.
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