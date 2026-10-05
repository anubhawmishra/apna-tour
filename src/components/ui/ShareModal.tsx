"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle, Send, X } from "lucide-react";

interface ShareModalProps {
  title: string;
  url?: string;
  className?: string;
}

export function ShareModal({ title, url, className = "" }: ShareModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined" ? url || window.location.href : url || "https://apnatour.in";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
        return;
      } catch {
        // user cancelled or share failed, open modal fallback
      }
    }
    setIsOpen(true);
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} — ${shareUrl}`
  )}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <>
      <button
        onClick={handleNativeShare}
        aria-label="Share this guide"
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111312]/80 backdrop-blur-md hover:bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] border border-white/10 shadow-sm text-xs font-mono uppercase tracking-wider transition-colors ${className}`}
      >
        <Share2 className="w-3.5 h-3.5 text-[#C85B35]" />
        <span>Share</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Share menu"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-[#141715] rounded-2xl p-6 border border-white/10 shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-mono uppercase tracking-widest text-[#F3EBDD]">Share this Guide</h4>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#85867E] hover:text-[#F3EBDD] transition-colors"
                aria-label="Close share dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#B9B4A8] line-clamp-1 mb-4 italic font-serif">
              &ldquo;{title}&rdquo;
            </p>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#192D26] hover:bg-[#1E362E] text-emerald-300 text-xs font-mono border border-emerald-800/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1C201D] hover:bg-[#20231F] text-[#F3EBDD] text-xs font-mono border border-white/10 transition-colors"
              >
                <Send className="w-4 h-4 text-[#C85B35]" />
                <span>X / Twitter</span>
              </a>
            </div>

            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#1C201D] border border-white/10">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 bg-transparent text-xs text-[#F3EBDD] focus:outline-none truncate font-mono"
                aria-label="Shareable link"
              />
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-[#C85B35] hover:bg-[#D28A32] text-[11px] font-mono uppercase tracking-wider text-[#FAF5EB] shrink-0 inline-flex items-center gap-1 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-white" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
