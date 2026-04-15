"use client";

import { useEffect, useState } from "react";

export default function ParallaxLayer({
  children,
  speed = 0.3,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const translateX = mouse.x * 20 * speed;
  const translateY = mouse.y * 20 * speed;

  return (
    <div
      style={{
        transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
        willChange: "transform, filter",
      }}
      className="absolute inset-0 transition-transform duration-75"
    >
      {children}
    </div>
  );
}