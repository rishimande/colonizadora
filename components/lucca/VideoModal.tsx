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
  videoUrl = "https://www.youtube.com/embed/COTtS53yx6s?autoplay=1&rel=0",
  posterSrc = "/lucca/video_thumb.jpg",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className="lucca-video-card group cursor-pointer"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label="Assistir ao vídeo de apresentação do Lucca Residencial"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <Image
          src={posterSrc}
          alt="Sala de estar moderna com vista para o pôr do sol no Lucca Residencial"
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 1110px"
          className="object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div className="lucca-video-overlay" />

        {/* Centered Play Button */}
        <div className="lucca-video-play-btn">
          <Image
            src="/lucca/375.png"
            alt="Play"
            width={90}
            height={90}
            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="lucca-lightbox-backdrop"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo do Lucca Residencial"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar vídeo"
            className="lucca-lightbox-close"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div
            className="lucca-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
              <iframe
                src={getEmbedUrl(videoUrl)}
                title="Vídeo de Apresentação Lucca Residencial"
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
