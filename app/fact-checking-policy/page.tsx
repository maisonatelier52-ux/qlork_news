import { Metadata } from "next";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import Footer from "@/src/components/Footer";
import TrendingNews from "@/src/components/TrendingNews";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qlork.com"),
  title: "Fact-Checking Policy | Qlork",
  description:
    "Discover how Qlork verifies the facts in every story we publish. Our rigorous fact-checking process ensures accuracy and builds reader trust.",
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
    title: "Fact-Checking Policy | Qlork",
    description:
      "Discover how Qlork verifies the facts in every story we publish.",
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
    title: "Fact-Checking Policy | Qlork",
    description:
      "Discover how Qlork fact-checks every story before publication.",
    images: ["https://www.qlork.com/images/news-img/qlork-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.qlork.com/fact-checking-policy",
  },
  icons: {
    icon: "/images/qlork-favIcon.webp",
    shortcut: "/images/qlork-favIcon.webp",
    apple: "/images/qlork-favIcon.webp",
  },
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
        In an era of rapid information and widespread misinformation, rigorous
        fact-checking is one of the most important things a news organisation
        can do. At Qlork, every claim, statistic, name, date, and quote in our
        reporting is checked before it reaches our readers. Fact-checking is
        not an optional step — it is built into the foundation of how every
        article is produced.
      </p>
    ),
  },
  {
    title: "2. What We Fact-Check",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        <li>All statistical claims, figures, and data cited in articles</li>
        <li>
          Direct quotes attributed to named or unnamed individuals
        </li>
        <li>
          Claims made by public figures, organisations, or official sources
        </li>
        <li>
          Historical context and background presented as established fact
        </li>
        <li>
          Headlines and sub-headings to ensure they accurately represent the
          body of the article
        </li>
        <li>
          Image captions and metadata for accuracy and fair representation
        </li>
      </ul>
    ),
  },
  {
    title: "3. Types of Sources We Accept",
    content: (
      <>
        <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed mb-4">
          Not all sources carry equal weight. We evaluate sources based on
          their reliability, authority, and independence.
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
              <li>
                Reputable news organisations with established editorial
                standards
              </li>
              <li>
                Statements from press offices, subject to independent
                verification
              </li>
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
              <li>
                AI-generated content presented as factual source material
              </li>
              <li>
                Propaganda materials from parties with a vested interest in
                the outcome
              </li>
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
        Breaking news presents unique challenges for verification. When
        covering rapidly developing stories, we clearly label preliminary
        reports and update them as facts are confirmed. We do not publish
        unverified casualty figures, identities, or causes. If a claim
        cannot be independently verified, we say so explicitly rather than
        presenting speculation as fact. Speed is never prioritised over
        accuracy.
      </p>
    ),
  },
  {
    title: "5. Viral Claims and Misinformation",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        When a claim is circulating widely online and our journalists assess
        it as potentially misleading or false, we investigate it as a
        standalone fact-check article. These pieces apply our full
        verification process — consulting primary sources, reaching out to
        relevant experts, and publishing our methodology alongside the
        verdict. We clearly label all such articles as fact-check pieces.
      </p>
    ),
  },
  {
    title: "6. Transparency in Our Process",
    content: (
      <p className="text-gray-700 text-[15px] font-sen tracking-tight leading-relaxed">
        Where relevant, Qlork includes links to primary source documents,
        data, and reports so readers can review the evidence themselves. We
        believe in showing our work. If you believe a fact cited in our
        reporting is incorrect, we encourage you to contact us with supporting
        evidence at{" "}
        <a
          href="mailto:factcheck@qlork.com"
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
      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />

        <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 space-y-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-libre font-extrabold tracking-tight mb-5">
              Fact-Checking <span className="text-gray-900">Policy</span>
            </h1>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-[15px] font-sen tracking-tight leading-tight text-gray-600 max-w-2xl mx-auto">
              How we verify every claim, statistic, and source before
              publishing — because accuracy is not optional.
            </p>
          </div>

          <div className="space-y-10">
            {/* Intro banner */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <p className="text-gray-700 text-[12px] md:text-[15px] font-sen tracking-tight leading-relaxed">
                Misinformation spreads fast. At Qlork, our fact-checking
                process exists to ensure that every piece of information we
                publish has been independently verified, sourced, and reviewed
                — before it ever reaches our readers.
              </p>
            </div>

            {/* Process steps */}
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

            {/* Footer */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10">
              <h2 className="text-[20px] font-semibold mb-4 font-libre flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gray-900 rounded" />
                Dispute a Fact
              </h2>
              <ul className="space-y-3 font-sen text-[14px] text-gray-700 tracking-tight leading-tight">
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    If you believe information in one of our articles is
                    factually incorrect, email us at{" "}
                    <a
                      href="mailto:factcheck@qlork.com"
                      className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
                    >
                      factcheck@qlork.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    Include the article URL, the specific claim you dispute,
                    and any primary source evidence supporting your position
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>
                    Our editorial team reviews all submissions and responds
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