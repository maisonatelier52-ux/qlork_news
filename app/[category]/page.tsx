import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import CategoryIntro from "@/src/components/CategoryIntro";
import CategoryLandingPart, {
  CategoryLandingPromo,
} from "@/src/components/CategoryLandingPart";
import MainGrid from "@/src/components/MainGrid";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TrendingNews from "@/src/components/TrendingNews";
import { sortByDate } from "@/src/utils/news";

import businessData from "../../public/data/business.json";
// import educationData from "../../public/data/education.json";
// import featuredData from "../../public/data/featured.json";
import financeData from "../../public/data/finance.json";
// import healthData from "../../public/data/health.json";
// import hotData from "../../public/data/hot.json";
// import opinionData from "../../public/data/opinion.json";
import politicsData from "../../public/data/politics.json";
import worldData from "../../public/data/world.json";
// import globalaffairsData from "../../public/data/global-affairs.json";
import economyData from "../../public/data/economy.json";
import stockMarketData from "../../public/data/stock-market.json";
import realEstateData from "../../public/data/real-estate.json";
import investingData from "../../public/data/investing.json";

interface Sub {
  title: string;
  descr: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  date: string;
  topic: string;
  sub: Sub[];
}

const allData: Record<string, NewsItem[]> = {
  business: sortByDate(businessData),
  world: sortByDate(worldData),
  // education: sortByDate(educationData),
  finance: sortByDate(financeData),
  // featured: sortByDate(featuredData),
  // health: sortByDate(healthData),
  // hot: sortByDate(hotData),
  // opinion: sortByDate(opinionData),
  politics: sortByDate(politicsData),
  // "global-affairs": sortByDate(globalaffairsData),
  economy: sortByDate(economyData),
  "stock-market": sortByDate(stockMarketData),
  "real-estate": sortByDate(realEstateData),
  investing: sortByDate(investingData),
};

const seoCategoryData: Record<string, { title: string; description: string }> =
  {
    business: {
      title:
        "Business News Today – Market Trends, Stock Updates & Expert Analysis",
      description:
        "Get the latest business news today, market trends, stock market updates, financial insights, and expert analysis on companies, startups, and the global economy.",
    },
    world: {
      title:
        "World News Today – Breaking Stories, Global Events & International Updates",
      description:
        "Stay updated with world news today, breaking stories, international events, global politics, and in-depth analysis on major developments from around the world.",
    },
    education: {
      title:
        "Education News Today – School Updates, Academic Trends & Policy Insights",
      description:
        "Get the latest education news today, school and university updates, academic trends, education policies, and expert insights on global learning and innovations.",
    },
    finance: {
      title:
        "Finance News Today – Stock Market Updates, Economy Insights & Investment Trends",
      description:
        "Stay updated with finance news today, real-time stock market updates, economic insights, investment trends, and expert analysis on global financial markets.",
    },
    featured: {
      title:
        "Featured Stories Today – Top News, Trending Topics & Breaking Updates",
      description:
        "Discover featured stories today, top news headlines, trending topics, breaking updates, and analysis across business, politics, technology, and global events.",
    },
    health: {
      title:
        "Health News Today – Medical Updates, Wellness Tips & Global Health Trends",
      description:
        "Get the latest health news today, medical discoveries, wellness tips, public health updates, and insights on global health trends, fitness, and well-being.",
    },
    hot: {
      title:
        "Hot News Today – Trending Stories, Breaking Updates & Viral Headlines",
      description:
        "Stay updated with hot news today, trending stories, breaking updates, viral content, and top headlines from around the world across business, politics, and entertainment.",
    },
    opinion: {
      title:
        "Opinion Today – Editorials, Expert Analysis & Commentary on Current Events",
      description:
        "Read opinion news today, expert editorials, in-depth analysis, and commentary on current events, politics, business, finance, and global affairs.",
    },
    politics: {
      title:
        "Politics News Today – Government Updates, Policy Changes & Election Coverage",
      description:
        "Get the latest politics news today, government updates, policy changes, election coverage, and expert commentary on national and international political developments.",
    },
    "global-affairs": {
      title:
        "Global Affairs Today – International News, Diplomacy & World Politics",
      description:
        "Stay updated with global affairs news today, international relations updates, diplomatic developments, and expert analysis on world politics and international policy.",
    },
    economy: {
      title:
        "Economy News Today – Economic Trends, Inflation & Global Market Insights",
      description:
        "Stay updated with economy news today, inflation updates, GDP growth, economic trends, market insights, and expert analysis on global and local economies.",
    },
    "stock-market": {
      title:
        "Stock Market News Today – Shares, Indices & Trading Updates",
      description:
        "Stay updated with stock market news today, live share market updates, index movements, trading insights, investment trends, and expert analysis on global markets.",
    },
    "real-estate": {
        title:
          "Real Estate News Today – Property Market, Housing Trends & Investment Insights",
        description:
          "Stay updated with real estate news today, property market trends, housing updates, commercial real estate insights, and expert analysis on global and local property investments.",
      },
      investing: {
        title:
          "Investing News Today – Markets, Stocks & Investment Strategies",
        description:
          "Stay updated with investing news today, stock market insights, portfolio strategies, investment trends, wealth management tips, and expert financial analysis.",
      },
  };

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const siteUrl = "https://www.qlork.com";
  const categoryUrl = `${siteUrl}/${category}`;
  const seoData = seoCategoryData[category];

  if (!seoData) {
    return {
      title: "Category Not Found – Qlork",
      description: "The requested news category does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const data = allData[category];
  const firstArticle = data?.[0] ?? null;

  const image = firstArticle?.image
    ? firstArticle.image.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle.image}`
    : `${siteUrl}/images/news-img/qlork-logo.webp`;

  // CollectionPage schema — no shortdescription to keep payload small
  const collectionPageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData.title,
    description: seoData.description,
    url: categoryUrl,
    publisher: {
      "@type": "Organization",
      name: "Qlork",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/news-img/qlork-logo.webp`,
      },
    },
    hasPart: data.slice(0, 3).map((article) => ({
      "@type": "NewsArticle",
      headline: article.title,
      url: `${siteUrl}/${category}/${article.slug}`,
      image: article.image.startsWith("http")
        ? article.image
        : `${siteUrl}${article.image}`,
      datePublished: article.date,
    })),
  };

  // BreadcrumbList schema
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: capitalize(category.replace(/-/g, " ")),
        item: categoryUrl,
      },
    ],
  };

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: { canonical: categoryUrl },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: categoryUrl,
      siteName: "Qlork",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: firstArticle?.title ?? "Qlork News",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [image],
      site: "@QlorkN54107",
      creator: "@QlorkN54107",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    /*
      "script:ld+json" is the special key Next.js App Router recognises
      to emit a <script type="application/ld+json"> tag inside <head>.
      This is the most reliable way to ensure crawlers see the schema
      in the raw HTML — no client-side hydration required.
    */
    other: {
      "script:ld+json": JSON.stringify(collectionPageLd),
      "script:ld+json:breadcrumb": JSON.stringify(breadcrumbLd),
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = allData[category?.toLowerCase()];
  if (!data) notFound();

  const relatedCategories = Object.keys(allData)
    .filter((cat) => cat !== category)
    .slice(0, 4);

  const categoryLabel = capitalize(data[0].category);

  /*
    Keep promo.body SHORT — every character here ends up in the rendered HTML.
    A long paragraph here was the primary cause of the high Text/HTML ratio.
  */
  const promo: CategoryLandingPromo = {
    title: `${categoryLabel} News Coverage`,
    body: `Stay informed with the latest ${data[0].category} news, expert analysis, and breaking stories. Accurate, independent reporting on the trends and developments shaping the ${data[0].category} landscape.`,
    buttonLabel: "Explore More",
    buttonHref: "/",
  };

  return (
    <div className="bg-white min-h-screen">
      <DateBar />
      <MainNav />
      <TrendingNews />
      <CategoryIntro
        categoryName={data[0].category}
        relatedTopics={relatedCategories}
      />
      <CategoryLandingPart
        mainFeature={data[0]}
        articles={[data[1], data[2]]}
        promo={promo}
      />
      <div className="max-w-360 mx-auto px-3 md:px-16 pb-12 border-t border-gray-400">
        <MainGrid
          items={[data[3], data[4], data[5], data[6], data[7], data[8]]}
          heading="More Headlines"
        />
      </div>
      <Footer />
    </div>
  );
}
