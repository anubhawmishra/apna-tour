import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  // Generate JSON-LD BreadcrumbList
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://apnatour.in",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href ? `https://apnatour.in${item.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav
        aria-label="Breadcrumbs"
        className={`flex items-center space-x-1.5 text-xs text-[#85867E] font-mono overflow-x-auto whitespace-nowrap py-1 ${className}`}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-[#F3EBDD] transition-colors"
          aria-label="Homepage"
        >
          <Home className="w-3.5 h-3.5 text-[#B98945]" />
          <span className="sr-only sm:not-sr-only">Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-[#85867E]/60 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="font-medium text-[#F3EBDD] truncate" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#F3EBDD] text-[#85867E] transition-colors truncate"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
