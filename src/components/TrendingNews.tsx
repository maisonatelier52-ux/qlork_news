"use client";
import WorldData from "../../public/data/world.json";
import BusinessData from "../../public/data/business.json";
import PoliticsData from "../../public/data/politics.json";
// import OpinionData from "../../public/data/opinion.json";
// import FinanceData from "../../public/data/finance.json";
// import HealthData from "../../public/data/health.json";
// import EducationData from "../../public/data/education.json";
import economyData from "../../public/data/economy.json";
import stockMarketData from "../../public/data/stock-market.json";
import realEstateData from "../../public/data/real-estate.json";
import investingData from "../../public/data/investing.json";
import Link from "next/link";

const newsItems = [
  { label: "WORLD", title: WorldData[0].title, slug: WorldData[0].slug },
  {
    label: "BUSINESS",
    title: BusinessData[1].title,
    slug: BusinessData[1].slug,
  },
  {
    label: "POLITICS",
    title: PoliticsData[0].title,
    slug: PoliticsData[0].slug,
  },
  { label: "ECONOMY", title: economyData[0].title, slug: economyData[0].slug },
  { label: "STOCK MARKET", title: stockMarketData[0].title, slug: stockMarketData[0].slug },
  { label: "REAL ESTATE", title: realEstateData[0].title, slug: realEstateData[0].slug },
  {
    label: "INVESTING",
    title: investingData[0].title,
    slug: investingData[0].slug,
  }
];

const tickerItems = [...newsItems, ...newsItems];
export default function TrendingNews() {
  const normalizeCategory = (value: string) =>
    value.toLowerCase().trim().replace(/\s+/g, "-");

  return (
    <div className="w-full overflow-hidden bg-black text-white border-y border-gray-800 mb-10">
      <div className="ticker-track flex whitespace-nowrap py-1.5">
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8 gap-3 text-sm">
            <Link href={`/${normalizeCategory(item.label)}`} title={item.label}>
              <span className="bg-red-700 text-white text-[10px] font-libre font-bold px-3 py-1 uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
            <Link
              href={`/${normalizeCategory(item.label)}/${item.slug}`}
              title={item.label}
            >
              <span className="text-gray-100 text-[13px] font-sen tracking-tight leading-tight">{item.title}</span>
            </Link>
            <span className="text-gray-600 text-lg">|</span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          width: max-content;
          animation: marquee 120s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
