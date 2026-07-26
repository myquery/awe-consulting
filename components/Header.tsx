"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/HeroIcons";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Programs", href: "/#programs" },
  { label: "Who We Serve", href: "/#who-we-serve" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home">
      <div className="top-bar" aria-label="Contact information">
        <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
          <p className="mb-0">
            Educational, Technological and Cultural Exchange Consulting
          </p>
          <div className="top-bar__links d-flex flex-wrap gap-3">
            <a href="mailto:partnerships@example.com">
              partnerships@example.com
            </a>
            <a href="tel:+10000000000">+1 (000) 000-0000</a>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg sticky-top bg-white border-bottom"
        aria-label="Primary navigation"
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center"
            href="/#home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/assets/img/logo.jpeg"
              width={238}
              height={58}
              alt="AWE Consulting, AbrahamArcade Wholeness Enterprise logo"
              priority
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="primaryNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
            id="primaryNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link
                    className="nav-link"
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="btn btn-primary nav-cta ms-lg-4"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Discuss a Partnership
              <ArrowRightIcon className="icon-sm" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
