"use client";

import { useEffect, useState } from "react";

const items = ["about", "experience", "projects", "skills", "contact"] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-btn md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      {open ? (
        <div className="mobile-drawer md:hidden" role="dialog" aria-modal="true">
          <button type="button" className="mobile-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
          <nav className="mobile-panel">
            <button type="button" className="mobile-close" onClick={() => setOpen(false)}>
              Close
            </button>
            {items.map((item) => (
              <a key={item} href={`#${item}`} className="mobile-link" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
