"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-start justify-content-between gap-4">
          <div className="footer-brand-column">
            <p className="footer-brand-name mb-0">AWE Consulting</p>
            <p className="footer-copyright mb-0">
              &copy; <span>{year ?? ""}</span> AbrahamArcade Wholeness
              Enterprise. All rights reserved.
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link href="/#programs">Programmes</Link>
            <Link href="/#how-it-works">Process</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
