"use client";

import { RefObject, useRef } from "react";

export function ClientNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const targetRef = useRef<HTMLElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="transition-all hover:text-primary/80"
    >
      {children}
    </a>
  );
}
