import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import { Clock, ArrowRight } from "lucide-react";
import { StoryData } from "@/types";

interface StoryCardProps {
  story: StoryData;
  featured?: boolean;
}

export function StoryCard({ story, featured = false }: StoryCardProps) {
  const href = `/stories/${story.slug}`;

  if (featured) {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 rounded-2xl border border-white/10 bg-[#1C201D] overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 transition-all duration-500 ease-out">
        <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden bg-[#141715]">
          <SafeImage
            src={story.heroImage}
            alt={story.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D] via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 bg-[#C85B35] text-[#FAF5EB] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded shadow-sm">
            Featured Journal
          </div>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="uppercase text-[#C85B35] tracking-widest">{story.category}</span>
              <span className="text-[#85867E]">&bull;</span>
              <span className="flex items-center gap-1.5 text-[#B9B4A8]">
                <Clock className="w-3.5 h-3.5 text-[#B98945]" />
                {story.readingTimeMin} min read
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EBDD] group-hover:text-white transition-colors leading-snug">
              <Link href={href}>{story.title}</Link>
            </h3>

            <p className="text-sm text-[#B9B4A8] line-clamp-3 leading-relaxed">
              {story.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {story.author.avatarUrl && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white/15">
                  <Image
                    src={story.author.avatarUrl}
                    alt={story.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="text-xs font-medium text-[#F3EBDD]">
                  {story.author.name}
                </div>
                <div className="text-[10px] font-mono text-[#85867E]">{story.author.location}</div>
              </div>
            </div>

            <Link
              href={href}
              className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read Journal</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#1C201D] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60">
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#141715]">
        <SafeImage
          src={story.heroImage}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D] via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-[#111312]/80 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#F3EBDD]">
          {story.category}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#85867E]">
            <span className="text-[#B9B4A8]">{story.cityName || "Subcontinental"}</span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#B98945]" />
              {story.readingTimeMin} min
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F3EBDD] group-hover:text-white transition-colors leading-snug">
            <Link href={href}>{story.title}</Link>
          </h3>

          <p className="text-xs text-[#B9B4A8] line-clamp-2 leading-relaxed">
            {story.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-[#85867E] text-[11px] font-mono">{story.author.name}</span>
          <Link
            href={href}
            className="font-mono uppercase text-xs tracking-wider text-[#C85B35] group-hover:text-[#D28A32] inline-flex items-center gap-1 transition-colors"
          >
            <span>Read Essay</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
