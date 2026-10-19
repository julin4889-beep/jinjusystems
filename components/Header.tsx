"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "홈" },
  { href: "/#services", label: "서비스" },
  { href: "/about", label: "회사소개" },
  { href: "/contact", label: "문의하기" },
] as const;

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return false;
  }

  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const menuOpen = openOnPath === pathname;

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-brand sm:text-lg"
        >
          JINJU SYSTEMS
        </Link>

        <nav className="hidden md:block" aria-label="주요 메뉴">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const current = isCurrent(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors hover:text-brand ${
                      current ? "font-semibold text-brand" : "text-neutral-600"
                    }`}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() =>
            setOpenOnPath((current) => (current === pathname ? null : pathname))
          }
        >
          <span className="sr-only">{menuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" className="border-t border-neutral-200 md:hidden" aria-label="모바일 메뉴">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {NAV_ITEMS.map((item) => {
              const current = isCurrent(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-3 text-sm ${
                      current ? "font-semibold text-brand" : "text-neutral-700"
                    }`}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpenOnPath(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
