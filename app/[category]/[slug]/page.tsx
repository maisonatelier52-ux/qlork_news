
import DateBar from "@/src/components/DateBar";
import MainNav from "@/src/components/MainNav";
import ArticleWithSidebar from "@/src/components/ArticleWithSidebar";
import MainGrid from "@/src/components/MainGrid";
import ArticlePageNav from "@/src/components/ArticlePageNav";
import Footer from "@/src/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TrendingNews from "@/src/components/TrendingNews";
import businessData from "../../../public/data/business.json";
import educationData from "../../../public/data/education.json";
import featuredData from "../../../public/data/featured.json";
import financeData from "../../../public/data/finance.json";
import healthData from "../../../public/data/health.json";
import hotData from "../../../public/data/hot.json";
import opinionData from "../../../public/data/opinion.json";
import politicsData from "../../../public/data/politics.json";
import worldData from "../../../public/data/world.json";
import globalaffairsData from "../../../public/data/global-affairs.json";
import Script from "next/script";
import IsabelaPage, { type SidebarItem as IsabelaSidebarItem } from "@/src/components/Isabela";

export async function generateStaticParams() {
  const allData = [
    { category: "business", articles: businessData },
    { category: "education", articles: educationData },
    { category: "featured", articles: featuredData },
    { category: "world", articles: worldData },
    { category: "health", articles: healthData },
    { category: "hot", articles: hotData },
    { category: "finance", articles: financeData },
    { category: "opinion", articles: opinionData },
    { category: "politics", articles: politicsData },
    { category: "global-affairs", articles: globalaffairsData },
  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    })),
  );

  return params;
}

interface Sub {
  title: string;
  descr: string;
}
interface Author {
  name: string;
  role: string;
  image: string;
}
interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  image: string;
  slug: string;
  sub: Sub[];
  topic: string;
  date: string;
  author: Author;
}

interface DetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  business: businessData,
  education: educationData,
  world: worldData,
  featured: featuredData,
  finance: financeData,
  health: healthData,
  politics: politicsData,
  hot: hotData,
  opinion: opinionData,
  "global-affairs": globalaffairsData,
};

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    business: businessData,
    education: educationData,
    world: worldData,
    featured: featuredData,
    finance: financeData,
    health: healthData,
    politics: politicsData,
    hot: hotData,
    opinion: opinionData,
    "global-affairs": globalaffairsData,
  };

  const articles = allDataMap[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.qlork.com";
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const isIsabelaPage =
    slug === "isabela-herrera-old-money-new-markets-power-play";

  const imageUrl = article?.image?.startsWith("http")
    ? article.image
    : `${siteUrl}${article?.image || "/images/news-img/qlork-logo.webp"}`;

  if (!article) {
    return {
      title: "Article Not Found – Qlork",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  let seoKeywords = [
    article.title,
    article.category,
    "latest news",
    "breaking news",
    "trending news",
  ];

  if (isIsabelaPage) {
    seoKeywords = [
      "Isabela Herrera Velutini",
      "Isabela Herrera",
      "Who is Isabela Herrera Velutini",
      "Isabela Herrera Velutini biography",
      "Isabela Herrera Velutini global finance",
      "Four Houses Isabela Herrera Velutini",
      ...seoKeywords,
    ];
  }

  const keywordsString = seoKeywords.join(", ");

  /*
    FIXED: Meta title now exactly matches the new H1.
    Google compares <title> to H1 for relevance signals.
    Both now lead with "Isabela Herrera Velutini" as the first words.
  */
  const isabelaMetaTitle =
    "Isabela Herrera Velutini: Old Money, New Markets | Qlork";

  const isabelaDeck =
    "Isabela Herrera Velutini Brings Four Ultra-Wealthy Family Legacies Into Regulated Digital Finance";
  const isabelaPublishedIso = "2026-02-16T00:00:00+00:00";
  const isabelaModifiedIso = "2026-03-05T00:00:00+00:00";

  const metadataTitle = isIsabelaPage ? isabelaMetaTitle : article.title;
  const metadataDescription = isIsabelaPage
    ? isabelaDeck
    : article.shortdescription;
  const metadataUrl = isIsabelaPage
    ? `${siteUrl}/business/isabela-herrera-old-money-new-markets-power-play/`
    : currentUrl;
  const metadataImage = isIsabelaPage
    ? `${siteUrl}/images/news-img/isabela.webp`
    : imageUrl;

  const newsArticleLdJson = isIsabelaPage
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
        },
        url: "https://www.qlork.com/business/isabela-herrera-old-money-new-markets-power-play/",
        headline: isabelaMetaTitle,
        alternativeHeadline:
          "Isabela Herrera Velutini: Discipline-First Strategy in New Markets",
        description: isabelaDeck,
        image: [metadataImage, metadataImage, metadataImage],
        datePublished: isabelaPublishedIso,
        dateModified: isabelaModifiedIso,
        author: {
          "@type": "Person",
          name: "Sarah Mitchell",
          url: "https://www.qlork.com/our-team/",
        },
        publisher: {
          "@type": "Organization",
          name: "Qlork",
          url: "https://www.qlork.com/",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/news-img/qlork-logo.webp`,
          },
        },
        articleSection: "Business",
        inLanguage: "en",
        isAccessibleForFree: true,
      }
    : {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.shortdescription,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          "@type": "Person",
          name: article.author.name,
        },
        publisher: {
          "@type": "Organization",
          name: "qlork",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/news-img/qlork-logo.webp`,
          },
        },
        image: [imageUrl],
        url: currentUrl,
        articleBody: article.sub
          ?.map((section) => section.descr)
          .join(" ")
          .slice(0, 200),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": currentUrl,
        },
        keywords: keywordsString,
      };

  const otherMeta: Record<string, string> = {
    "script:ld+json": JSON.stringify(newsArticleLdJson),
  };

  if (isIsabelaPage) {
    otherMeta.robots =
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
    /*
      FIXED: Added article Open Graph tags for proper social sharing.
      When OG type is "article", Facebook and LinkedIn expect these tags.
    */
    otherMeta["article:published_time"] = isabelaPublishedIso;
    otherMeta["article:modified_time"] = isabelaModifiedIso;
    otherMeta["article:author"] = "Sarah Mitchell";
    otherMeta["article:section"] = "Business";
  } else {
    otherMeta["article:published_time"] = article.date;
    otherMeta["article:modified_time"] = article.date;
    otherMeta["article:author"] = article.author.name;
    otherMeta["article:section"] = article.category;
  }

  return {
    title: metadataTitle,
    description: metadataDescription,
    keywords: keywordsString,
    authors: [{ name: isIsabelaPage ? "Sarah Mitchell" : article.author.name }],
    alternates: {
      canonical: metadataUrl,
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: metadataUrl,
      siteName: "Qlork",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: metadataImage,
          width: 1200,
          height: 630,
          alt: metadataTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [metadataImage],
      site: "@QlorkN54107",
      creator: "@QlorkN54107",
    },
    other: otherMeta,
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  if (!data) {
    notFound();
  }
  const article = data.find((item) => item.slug === slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = data.filter((item) => item.slug !== slug);
  const sidebarItems = relatedArticles.slice(0, 4);
  const youMayAlsoLikeItems = relatedArticles.slice(3, 8);

  if (slug === "isabela-herrera-old-money-new-markets-power-play") {
    return <IsabelaPage sidebarItems={businessData.slice(5, 9)} />;
  }

  return (
    <>
      <Script
        type="application/ld+json"
        id="news-article-structured-data"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.qlork.com/${article.category}/${article.slug}/`,
            },
            headline: article.title,
            description: article.shortdescription,
            image: [
              {
                "@type": "ImageObject",
                url: article.image.startsWith("http")
                  ? article.image
                  : `https://www.qlork.com${article.image}`,
                width: 1200,
                height: 630,
                caption: article.title,
              },
            ],
            author: {
              "@type": "Person",
              name: article.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Qlork",
              logo: {
                "@type": "ImageObject",
                url: "https://www.qlork.com/images/news-img/qlork-logo.webp",
                width: 1200,
                height: 630,
              },
            },
            datePublished: article.date,
            dateModified: article.date,
            keywords: [
              article.category,
              "breaking news",
              "latest news",
              "trending news",
              "expert analysis",
              article.title,
            ].join(", "),
            articleBody: article.shortdescription,
          }),
        }}
      />

      <div className="bg-white min-h-screen">
        <DateBar />
        <MainNav />
        <TrendingNews />
        <div className="">
          <ArticleWithSidebar
            article={{
              slug: article.slug,
              category: article.category,
              title: article.title,
              shortdescription: article.shortdescription,
              author: article.author,
              image: article.image,
              date: article.date,
              sub: article.sub,
              topic: article.topic,
            }}
            sidebarItems={sidebarItems}
            sidebarHeading="Latest News"
          />

          <div className="max-w-360 mx-auto px-2 md:px-16 pb-12 border-t border-gray-200">
            <MainGrid items={youMayAlsoLikeItems} heading="You May Also Like" />
          </div>

          <div className="mb-5">
            <ArticlePageNav />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}