"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

type VideoStoryProps = {
  title: string;
  body: string;
  poster: string;
  src: string;
};

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

export function VideoStory({ title, body, poster, src }: VideoStoryProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const youtubeId = getYouTubeId(src);

  const togglePlayback = async () => {
    if (youtubeId) {
      setPlaying((prev) => !prev);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="story-section" id="historia" aria-labelledby="story-title">
      <div className="story-copy">
        <button
          className="play-button"
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          {playing ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
        </button>
        <p className="eyebrow eyebrow-light">Nossa história</p>
        <h2 id="story-title">{title}</h2>
        <p>{body}</p>
      </div>

      <div className="story-media" style={{ position: "relative", width: "100%", height: "100%", minHeight: "640px" }}>
        {youtubeId ? (
          playing ? (
            <div
              className="story-video-container"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                background: "#000",
              }}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="story-video-iframe"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
              />
            </div>
          ) : (
            <div
              className="story-poster-wrapper"
              onClick={() => setPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setPlaying(true)}
              aria-label="Reproduzir vídeo"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <Image
                src={poster || "/assets/video-poster.webp"}
                alt={title}
                fill
                sizes="(max-width: 860px) 100vw, 65vw"
                priority
                className="story-poster-img"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          )
        ) : (
          <video
            ref={videoRef}
            poster={poster}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>
    </section>
  );
}



