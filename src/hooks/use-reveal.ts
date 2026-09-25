import { useEffect, useRef, useState } from "react";

/** Fade-in-on-scroll helper: spread the returned props onto any element. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: "reveal",
    "data-visible": visible ? "true" : "false",
    style: { animationDelay: `${delay}ms` },
  } as const;
}
