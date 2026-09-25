import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reveal = useReveal<HTMLDivElement>(delay);
  const Tag = as as "div";
  return (
    <Tag
      ref={reveal.ref}
      data-visible={reveal["data-visible"]}
      style={reveal.style}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
