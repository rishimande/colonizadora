"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

type VideoStoryProps = {
  title: string;
  body: string;
  poster: string;
  src: string;
};

export function VideoStory({ title, body, poster, src }: VideoStoryProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
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
        <span className="placeholder-note">Vídeo demonstrativo — substituir no CMS</span>
      </div>

      <div className="story-media">
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
          aria-label="Vídeo demonstrativo de uma área residencial arborizada"
        />
      </div>
    </section>
  );
}
