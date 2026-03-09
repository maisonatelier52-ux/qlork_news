import type { Metadata } from "next";
import Link from "next/link";
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import TrendingNews from "@/src/components/TrendingNews";
import Footer from "@/src/components/Footer";

const clusterItems = [
  {
    href: "/business/isabela-herrera-old-money-new-markets-power-play/",
    title:
      "Where Old Money Meets New Markets: Isabela Herrera's Discipline-First Power Play",
    description:
      "The anchor feature introducing the leadership and governance thesis behind this cluster.",
  },
  {
    href: "/business/who-is-isabela-herrera-verified-profile-attributable-facts/",
    title:
      "Who Is Isabela Herrera? A Verified Profile Built from Attributable Facts",
    description:
      "A verification-first profile that distinguishes attributable facts from interpretation.",
  },
  {
    href: "/finance/what-regulated-digital-finance-actually-means/",
    title: "What Regulated Digital Finance Actually Means",
    description:
      "A plain-language explainer covering licenses, custody, audits, and settlement discipline.",
  },
  {
    href: "/business/why-cross-border-governance-matters-in-digital-asset-markets/",
    title: "Why Cross-Border Governance Matters in Digital Asset Markets",
    description:
      "Business analysis of governance requirements for institution-scale participation.",
  },
  {
    href: "/finance/legacy-capital-new-rails-established-wealth-regulated-digital-infrastructure/",
    title:
      "Legacy Capital, New Rails: Why Established Wealth Is Moving into Regulated Digital Infrastructure",
    description:
      "Trend piece on how traditional wealth platforms adopt digital rails through controlled rollouts.",
  },
  {
    href: "/business/reporting-notes-isabela-herrera-document-room/",
    title:
      "The Reporting Notes: Methodology and Document Room for the Isabela Herrera Coverage",
    description:
      "Source categories, verification standards, and correction policy for this coverage set.",
  },
];

export const metadata: Metadata = {
  title: "Isabela Herrera Topic Hub | Qlork",
  description:
    "A curated topic hub for Qlork's Isabela Herrera coverage: feature, explainers, governance analysis, trend reporting, and methodology notes.",
  alternates: {
    canonical: "https://www.qlork.com/topic/isabela-herrera/",
  },
  openGraph: {
    title: "Isabela Herrera Topic Hub | Qlork",
    description:
      "Track the complete Isabela Herrera coverage cluster with related explainers and reporting notes.",
    url: "https://www.qlork.com/topic/isabela-herrera/",
    type: "website",
    siteName: "Qlork",
    images: [
      {
        url: "https://www.qlork.com/images/news-img/isabela.webp",
        width: 1200,
        height: 630,
        alt: "Isabela Herrera Topic Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isabela Herrera Topic Hub | Qlork",
    description:
      "Feature, explainers, governance analysis, and reporting notes in one place.",
    images: ["https://www.qlork.com/images/news-img/isabela.webp"],
  },
};

export default function IsabelaTopicHubPage() {
  return (
    <div className="bg-white min-h-screen">
      <DateBar />
      <MainNav />
      <TrendingNews />
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-6">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wide">
            Topic Hub
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mt-2">
            Isabela Herrera and Global Wealth Leadership
          </h1>
          <p className="text-base md:text-lg text-black/80 mt-3 leading-7 max-w-3xl">
            This hub groups the core feature, companion explainers, trend
            analysis, and reporting notes so readers can move from profile
            context to governance and infrastructure detail without detours.
          </p>
        </div>

        <section
          className="rounded-xl border border-black/10 bg-[#fafafa] p-5 md:p-6"
          aria-labelledby="cluster-pages-title"
        >
          <h2
            id="cluster-pages-title"
            className="text-2xl font-semibold leading-tight mb-4"
          >
            Cluster Pages
          </h2>
          <ul className="list-none p-0 m-0 divide-y divide-black/10">
            {clusterItems.map((item) => (
              <li key={item.href} className="py-4 first:pt-0 last:pb-0">
                <Link href={item.href} className="font-bold hover:underline">
                  {item.title}
                </Link>
                <p className="text-black/80 mt-1 leading-7">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7 rounded-xl border border-black/10 p-5 md:p-6">
          <h2 className="text-2xl font-semibold leading-tight mb-3">
            Additional Coverage Paths
          </h2>
          <p className="leading-7 text-black/85">
            Author page:{" "}
            <Link href="/our-team/" className="underline">
              Qlork newsroom and author profiles
            </Link>
            .
          </p>
          <p className="leading-7 text-black/85 mt-2">
            Corrections and methodology questions:{" "}
            <a href="mailto:sarah.mitchell@qlork.com" className="underline">
              sarah.mitchell@qlork.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
