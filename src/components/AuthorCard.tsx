import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaQuora } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa6";

interface Author {
  name: string;
  email: string;
  bio: string;
  photo: string;
  website?: string;
  twitter?: string;
  medium?: string;
  substack?: string;
  quora?: string;
}

interface AuthorCardProps {
  author: Author;
  reverse?: boolean;
}

const socialLinks = [
  {
    key: "twitter" as keyof Author,
    icon: FaXTwitter,
    label: "Twitter",
    baseUrl: "https://twitter.com/",
    color: "hover:text-black",
  },
  {
    key: "reddit" as keyof Author,
    icon: FaReddit,
    label: "Reddit",
    baseUrl: "https://reddit.com/",
    color: "hover:text-orange-600",
  },
  {
    key: "substack" as keyof Author,
    icon: SiSubstack,
    label: "Substack",
    baseUrl: "https://substack.com/@",
    color: "hover:text-orange-700",
  },
  {
    key: "quora" as keyof Author,
    icon: FaQuora,
    label: "Quora",
    baseUrl: "https://www.quora.com/profile/",
    color: "hover:text-red-400",
  },
];

const AuthorCard: React.FC<AuthorCardProps> = ({ author, reverse = false }) => {
  return (
    <div className="max-w-360 mx-auto bg-red-900 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
      <div className={`md:flex ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Left: Text */}
        <div className="md:w-2/3 p-6 md:p-16">
          {/* h2 — author names are section headings, not the page's main H1 */}
          <h2 className="text-[15px] md:text-[20px] font-libre text-white font-black tracking-widest mb-4 md:mb-6">
            {author.name.toUpperCase()}
          </h2>

          {/* Email */}
          <div className="flex items-center gap-2 md:gap-3 mb-5 md:mb-8 text-orange-500">
            <Mail size={20} className="md:w-7 md:h-7" />
            <a
              href={`mailto:${author.email}`}
              className="text-[12px] md:text-[15px] font-medium font-sen tracking-tight leading-tight hover:underline transition break-all"
              title={`Email ${author.name}`}
            >
              {author.email}
            </a>
          </div>

          <p className="text-[12px] md:text-[15px] font-sen tracking-tight leading-tight text-white mb-6 md:mb-10">
            {author.bio}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            {socialLinks.map(({ key, icon: Icon, label, baseUrl, color }) => {
              const value = author[key];
              if (!value) return null;
              const href = (value as string).startsWith("http")
                ? (value as string)
                : `${baseUrl}${value}`;
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${author.name} on ${label}`}
                  className={`text-white/60 transition-colors duration-200 ${color}`}
                >
                  <Icon size={20} className="md:w-4 md:h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="md:w-1/3 relative min-h-64 md:min-h-0">
          <Image
            src={author.photo}
            alt={`${author.name} – Qlork Author`}
            fill
            priority
            className={`object-cover md:rounded-none shadow-2xl ${
              reverse ? "md:rounded-l-lg" : "md:rounded-r-lg"
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
