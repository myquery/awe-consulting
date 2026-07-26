"use client";

import Image from "next/image";
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
        <div className="row g-4">
          <div className="col-lg-5">
            <Image
              className="footer-logo"
              src="/assets/img/awe-consulting-logo.png"
              width={380}
              height={92}
              alt="AWE Consulting, AbrahamArcade Wholeness Enterprise logo"
            />
            <p className="mt-3 mb-1">
              <strong>AbrahamArcade Wholeness Enterprise LLC</strong>
            </p>
            <p className="mb-0">
              Educational/Technological and Cultural Exchange Consulting
            </p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h2 className="h6">Service Area</h2>
            <p>
              United States-based consulting with programs designed for Nigeria
              and West Africa.
            </p>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h2 className="h6">Contact</h2>
            <p className="mb-1">
              <a href="mailto:partnerships@example.com">
                partnerships@example.com
              </a>
            </p>
            <p className="mb-0">
              <a href="tel:+10000000000">+1 (000) 000-0000</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-3">
          <p className="mb-0">
            &copy; <span>{year ?? ""}</span> AbrahamArcade Wholeness Enterprise
            LLC. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
