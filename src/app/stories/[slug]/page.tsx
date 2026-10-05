import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SaveButton } from "@/components/ui/SaveButton";
import { ShareModal } from "@/components/ui/ShareModal";
import { StoryCard } from "@/components/stories/StoryCard";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = travelService.getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };

  return {
    title: `${story.title} — APNA TOUR`,
    description: story.excerpt,
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      images: [{ url: story.heroImage, alt: story.title }],
      authors: [story.author.name],
      publishedTime: story.publishedAt,
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = travelService.getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const relatedStories = travelService
    .getStories()
    .filter((s) => s.id !== story.id)
    .slice(0, 3);

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    image: story.heroImage,
    datePublished: story.publishedAt,
    author: {
      "@type": "Person",
      name: story.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "APNA TOUR",
      logo: {
        "@type": "ImageObject",
        url: "https://apnatour.in/logo.png",
      },
    },
  };

  return (
    <article className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Breadcrumb
            items={[
              { label: "Stories", href: "/stories" },
              { label: story.title },
            ]}
          />
          <div className="flex items-center gap-2">
            <SaveButton itemId={story.id} itemType="story" showLabel={true} />
            <ShareModal title={story.title} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#85867E]">
            <span className="uppercase text-[#C85B35] font-semibold">{story.category}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {story.readingTimeMin} min read
            </span>
            <span>&bull;</span>
            <span>Published {new Date(story.publishedAt).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F3EBDD] leading-[1.15] tracking-tight">
            {story.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#B9B4A8] leading-relaxed">
            {story.subtitle}
          </p>

          {/* Author Byline */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            {story.author.avatarUrl && (
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={story.author.avatarUrl}
                  alt={story.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-sm font-semibold text-[#F3EBDD]">
                {story.author.name}
              </div>
              <div className="text-xs text-[#85867E]">
                {story.author.title} &bull; {story.author.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#141715]">
          <SafeImage
            src={story.heroImage}
            alt={story.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
        <p className="text-xs text-[#85867E] italic text-center mt-2.5">
          Field photograph documented on location &bull; {story.cityName || "India"}
        </p>
      </div>

      {/* Story Body */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6 text-[#B9B4A8] text-base sm:text-lg leading-relaxed">
        {story.body.map((block, index) => {
          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="my-8 py-4 px-6 border-l-2 border-[#C85B35] bg-[#141715] rounded-r-xl font-serif text-xl sm:text-2xl italic text-[#F3EBDD]"
              >
                &ldquo;{block.content}&rdquo;
              </blockquote>
            );
          }
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="font-serif text-2xl sm:text-3xl font-medium text-[#F3EBDD] pt-6"
              >
                {block.content}
              </h2>
            );
          }
          return (
            <p key={index} className="text-[#B9B4A8] font-normal leading-relaxed">
              {block.content}
            </p>
          );
        })}

        {/* Tags */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#1C201D] border border-white/10 text-xs text-[#B9B4A8] font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#141715] border border-white/10 flex items-start gap-4">
          {story.author.avatarUrl && (
            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10">
              <Image
                src={story.author.avatarUrl}
                alt={story.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#C85B35] font-semibold block">
              About the Author
            </span>
            <h3 className="font-serif text-base font-semibold text-[#F3EBDD]">
              {story.author.name}
            </h3>
            <p className="text-xs text-[#B9B4A8] leading-relaxed">
              {story.author.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-light text-[#F3EBDD]">
              More from the Field Journal
            </h3>
            <Link
              href="/stories"
              className="text-xs font-semibold text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1"
            >
              <span>View All Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedStories.map((related) => (
              <StoryCard key={related.id} story={related} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
