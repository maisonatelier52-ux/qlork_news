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
import Script from "next/script";

import businessData from "../../public/data/business.json";
import educationData from "../../public/data/education.json";
import featuredData from "../../public/data/featured.json";
import financeData from "../../public/data/finance.json";
import healthData from "../../public/data/health.json";
import hotData from "../../public/data/hot.json";
import opinionData from "../../public/data/opinion.json";
import politicsData from "../../public/data/politics.json";
import worldData from "../../public/data/world.json";
import globalaffairsData from "../../public/data/global-affairs.json";

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
  education: sortByDate(educationData),
  finance: sortByDate(financeData),
  featured: sortByDate(featuredData),
  health: sortByDate(healthData),
  hot: sortByDate(hotData),
  opinion: sortByDate(opinionData),
  politics: sortByDate(politicsData),
  "global-affairs": sortByDate(globalaffairsData),
};

const seoCategoryData: Record<
  string,
  { title: string; description: string }
> = {
  business: {
    title: "Business News Today – Market Trends, Stock Updates & Expert Analysis",
    description:
      "Get the latest business news today, market trends, stock market updates, financial insights, and expert analysis on companies, startups, and the global economy.",
  },
  world: {
    title: "World News Today – Breaking Stories, Global Events & International Updates",
    description:
      "Stay updated with world news today, breaking stories, international events, global politics, and in-depth analysis on major developments from around the world.",
  },
  education: {
    title: "Education News Today – School Updates, Academic Trends & Policy Insights",
    description:
      "Get the latest education news today, school and university updates, academic trends, education policies, and expert insights on global learning and learning innovations.",
  },
  finance: {
    title: "Finance News Today – Stock Market Updates, Economy Insights & Investment Trends",
    description:
      "Stay updated with finance news today, real-time stock market updates, economic insights, investment trends, and expert analysis on global financial markets and business developments.",
  },
  featured: {
    title: "Featured Stories Today – Top News, Trending Topics & Breaking Updates",
    description:
      "Discover featured stories today, top news headlines, trending topics, breaking updates, and in-depth analysis across business, politics, technology, entertainment, and global events.",
  },
  health: {
    title: "Health News Today – Medical Updates, Wellness Tips & Global Health Trends",
    description:
      "Get the latest health news today, medical discoveries, wellness tips, public health updates, and insights on global health trends, fitness, and well-being.",
  },
  hot: {
    title: "Hot News Today – Trending Stories, Breaking Updates & Viral Headlines",
    description:
      "Stay updated with hot news today, trending stories, breaking updates, viral content, and top headlines from around the world across business, politics, technology, and entertainment.",
  },
  opinion: {
    title: "Opinion Today – Editorials, Expert Analysis & Commentary on Current Events",
    description:
      "Read opinion news today, expert editorials, in-depth analysis, and commentary on current events, politics, business, finance, and global affairs to stay informed and gain insights.",
  },
  politics: {
    title: "Politics News Today – Government Updates, Policy Changes & Election Coverage",
    description:
      "Get the latest politics news today, government updates, policy changes, election coverage, political analysis, and expert commentary on national and international political developments.",
  },
  "global-affairs": {
    title: "Global Affairs Today – International News, Diplomacy & World Politics",
    description:
      "Stay updated with global affairs news today, international relations updates, diplomatic developments, and expert analysis on world politics, global events, and international policy.",
  },
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
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
  const firstArticle = data && data.length > 0 ? data[0] : null;

  const image =
    firstArticle && firstArticle.image
      ? firstArticle.image.startsWith("http")
        ? firstArticle.image
        : `${siteUrl}${firstArticle.image}`
      : `${siteUrl}/images/news-img/qlork-logo.webp`;

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: categoryUrl,
    },
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
          alt: firstArticle?.title || "Qlork News",
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
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const relatedCategories = Object.keys(allData)
    .filter((cat) => cat !== category)
    .slice(0, 4);

  const data = allData[category];

  if (!data) {
    notFound();
  }

  const siteUrl = "https://www.qlork.com";
  const seoData = seoCategoryData[category];
  const categoryUrl = `${siteUrl}/${category}`;

  const firstArticle = data[0];
  const coverImage = firstArticle.image.startsWith("http")
    ? firstArticle.image
    : `${siteUrl}${firstArticle.image}`;

  // JSON-LD: CollectionPage for the category listing
  const collectionPageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: seoData?.title ?? `${firstArticle.category} News`,
    description: seoData?.description ?? "",
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
    // Surface the top 3 articles as hasPart so Google can index them via schema
    hasPart: data.slice(0, 3).map((article) => ({
      "@type": "NewsArticle",
      headline: article.title,
      description: article.shortdescription,
      url: `${siteUrl}/${category}/${article.slug}`,
      image: article.image.startsWith("http")
        ? article.image
        : `${siteUrl}${article.image}`,
      datePublished: article.date,
    })),
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: firstArticle.category.charAt(0).toUpperCase() + firstArticle.category.slice(1),
        item: categoryUrl,
      },
    ],
  };

  // Kept short — long promo body was inflating HTML size
  const promo: CategoryLandingPromo = {
    title: `${firstArticle.category.charAt(0).toUpperCase() + firstArticle.category.slice(1)} News Coverage`,
    body: `Stay informed with the latest ${firstArticle.category} news, insights, and expert analysis. Get comprehensive coverage of breaking stories and key trends shaping the ${firstArticle.category} landscape — guided by accuracy, independence, and balanced reporting.`,
    buttonLabel: "Explore More",
    buttonHref: "/",
  };

  return (
    <>
      <Script
        id="category-collection-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />
      <Script
        id="category-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
        <CategoryIntro
          categoryName={firstArticle.category}
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
    </>
  );
}