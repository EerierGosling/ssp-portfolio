"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Final Reflection", href: "/reflection" },
  { label: "Midpoint Reflection", href: "/midpoint-reflection" },
  { label: "Book (1984)", href: "/1984" },
  {
    label: "Activities",
    children: [
      { label: "Advanced Topics in Computer Science", href: "/atcs" },
      { label: "Book Club", href: "/book-club" },
      { label: "Echo Chambers", href: "/echo-chambers" },
      { label: "Breads & Spreads", href: "/breads-and-spreads" },
      { label: "BCYF Coding Club", href: "/bcyf" },
      { label: "Sailing", href: "/sailing" },
    ],
  },
];

function DropdownItem({ item, closeMobile }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 pt-2 min-w-[180px]">
          <ul
            className="rounded shadow-lg overflow-hidden"
            style={{ backgroundColor: "var(--light-brown)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  onClick={() => { setOpen(false); closeMobile?.(); }}
                  className="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function MobileDropdownItem({ item, closeMobile }) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors w-full"
      >
        {item.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <ul className="mt-2 ml-3 flex flex-col gap-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={closeMobile}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "var(--light-brown)" }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          Sofia Egan - SSP Portfolio
        </Link>

        {/* Desktop */}
        <ul className="hidden sm:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <DropdownItem key={item.label} item={item} />
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="sm:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul
          style={{ borderTopColor: "var(--peach-glow)" }}
          className="sm:hidden border-t px-6 pb-4 flex flex-col gap-3 pt-3"
        >
          {navItems.map((item) =>
            item.children ? (
              <MobileDropdownItem
                key={item.label}
                item={item}
                closeMobile={() => setMobileOpen(false)}
              />
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
