"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface VideoModalProps {
  videoUrl?: string;
  posterSrc?: string;
}

function getEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  if (match) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  }
  return url;
}

export function VideoModal({
  videoUrl = "https://www.youtube.com/embed/460zypiSRQA?autoplay=1&rel=0",
  posterSrc = "/claudino/video_thumb.jpg",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className="claudino-video-card group cursor-pointer"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Assistir ao vídeo de apresentação do Claudino Francio"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <Image
          src={posterSrc}
          alt="Vista aérea do loteamento empresarial Claudino Francio em Sorriso-MT"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 1100px"
          className="object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div className="claudino-video-overlay" />

        {/* Centered Play Button */}
        <div className="claudino-video-play-btn">
          <Image
            src="/claudino/375.png"
            alt="Play"
            width={90}
            height={90}
            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="claudino-lightbox-backdrop"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo do Claudino Francio"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar vídeo"
            className="claudino-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="claudino-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
              <iframe
                src={getEmbedUrl(videoUrl)}
                title="Vídeo Institucional Claudino Francio"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
