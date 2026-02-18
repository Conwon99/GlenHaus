import { useState } from "react";
import { Logo } from "@/components/Logo";
import { NavActions } from "@/sections/Navbar/components/NavActions";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";

export const NavbarContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="relative items-center box-border caret-transparent gap-x-0 flex auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] justify-between gap-y-0 md:static md:flex md:w-full md:justify-between w-full">
      <Logo />
      <div className="items-center box-border caret-transparent gap-x-4 flex md:gap-x-6">
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded z-[101] relative"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <DesktopNav isMobileMenuOpen={isMobileMenuOpen} onCloseMobileMenu={closeMobileMenu} />
        <NavActions />
      </div>
    </div>
  );
};

