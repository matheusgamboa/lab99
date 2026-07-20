"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionPreference, setMotionPreference] = useState<
    "unknown" | "reduce" | "allow"
  >("unknown");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () =>
      setMotionPreference(media.matches ? "reduce" : "allow");

    syncPreference();
    media.addEventListener("change", syncPreference);

    return () => media.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (motionPreference !== "allow") {
      video.pause();
      video.currentTime = 0;
      return;
    }

    video.play().catch(() => {
      // The poster remains visible if playback is unavailable or the source is absent.
    });
  }, [motionPreference]);

  return (
    <video
      ref={videoRef}
      className="hero__video"
      muted
      loop
      playsInline
      preload="metadata"
      poster="/assets/lab99/hero-poster.webp"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/assets/lab99/hero-bg.mp4" type="video/mp4" />
      Seu navegador não oferece suporte a vídeo em HTML5.
    </video>
  );
}
