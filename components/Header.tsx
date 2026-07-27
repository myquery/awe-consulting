"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Programmes", href: "/#programs" },
  { label: "Who we serve", href: "/#who-we-serve" },
  { label: "Process", href: "/#how-it-works" },
  { label: "Outcomes", href: "/#outcomes" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home" className="site-header">
      <nav
        className="navbar navbar-expand-xl bg-white"
        aria-label="Primary navigation"
      >
        <div className="container">
          <Link
            className="navbar-brand brand-link d-flex align-items-center"
            href="/#home"
            onClick={() => setIsOpen(false)}
            aria-label="AWE Consulting home"
          >
            <Image
              className="site-logo"
              src="/assets/img/awe-consulting-logo.png"
              width={1513}
              height={293}
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
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
