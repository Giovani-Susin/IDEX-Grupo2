"use client";

import { useEffect, useState } from "react";

export default function ParallaxLayer({
  children,
  speed = 0.3,
  blur = false,
}: {
  children: React.ReactNode;
  speed?: number;
  blur?: boolean;
}) {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const translateY = scrollY * speed;
  const translateX = mouse.x * 20 * speed;
  const translateMouseY = mouse.y * 20 * speed;

  const blurValue = blur ? Math.min(scrollY * 0.02, 8) : 0;

  return (
    <div
      style={{
        transform: `translate3d(${translateX}px, ${translateY + translateMouseY}px, 0)`,
        filter: `blur(${blurValue}px)`,
        willChange: "transform, filter",
      }}
      className="absolute inset-0 transition-transform duration-75"
    >
      {children}
    </div>
  );
}