"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaRedditAlien,
  FaLink,
} from "react-icons/fa";
import Link from "next/link";

interface ShareArticleProps {
  title: string;
}

export default function ShareArticle({ title }: ShareArticleProps) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="w-full border-t border-b border-dashed border-gray-200 py-4">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-[12px] text-gray-900 font-semibold font-libre">
          <FaLink className="text-[12px]" />
          <span className="hidden sm:inline">Share This Article</span>
        </div>

        <div className="flex items-center gap-2 text-[12px]">
          <ShareIcon
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            title={`Share "${title}" on Facebook`}
          >
            <FaFacebookF />
          </ShareIcon>

          <ShareIcon
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            title={`Share "${title}" on Twitter`}
          >
            <FaTwitter />
          </ShareIcon>

          <ShareIcon
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            title={`Share "${title}" on LinkedIn`}
          >
            <FaLinkedinIn />
          </ShareIcon>

          <ShareIcon
            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
            title={`Share "${title}" on WhatsApp`}
          >
            <FaWhatsapp />
          </ShareIcon>

          <ShareIcon
            href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
            title={`Share "${title}" on Reddit`}
          >
            <FaRedditAlien />
          </ShareIcon>
        </div>
      </div>
    </div>
  );
}

function ShareIcon({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
    >
      {children}
    </Link>
  );
}