/*
 * Global Navigation Component
 * Appears on all pages for easy navigation between Ken Moskowitz's Super Bowl commercials
 * Design: Budweiser red with gold accents, professional editorial style
 */

import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const commercials = [
    { path: "/", label: "Home", year: "" },
    { path: "/budweiser-american-icons", label: "Budweiser: American Icons", year: "2026" },
    { path: "/state-farm-agent", label: "State Farm: Agent State Farm", year: "2024" },
    { path: "/etsy-thank-you-france", label: "Etsy: Thank You, France", year: "2024" },
    { path: "/budweiser-clydesdales-journey", label: "Budweiser: A Clydesdale's Journey", year: "2022" },
    { path: "/bubly-buble", label: "Bubly: Bublé vs. Bubly", year: "2019" },
    { path: "/tmobile-bag-of-unlimited", label: "T-Mobile: #BagOfUnlimited", year: "2017" },
    { path: "/budweiser-lost-dog", label: "Budweiser: Lost Dog", year: "2015" },
    { path: "/mms-just-my-shell", label: "M&M's: Just My Shell", year: "2012" },
    { path: "/volkswagen-the-force", label: "Volkswagen: The Force", year: "2011" },
    { path: "/bud-light-tpain", label: "Bud Light: T-Pain Voice", year: "2010" },
  ];

  return (
    <nav className="bg-[#E32636] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold text-[#FFD700]">KM</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">Ken "Spanky" Moskowitz</span>
                <span className="text-xs text-[#FFD700] leading-tight">Super Bowl Portfolio</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {commercials.slice(0, 5).map((commercial) => (
              <Link key={commercial.path} href={commercial.path}>
                <a className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
                  {commercial.label}
                  {commercial.year && <span className="ml-1 text-[#FFD700]">'{commercial.year.slice(2)}</span>}
                </a>
              </Link>
            ))}
            
            {/* Dropdown for remaining items */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors flex items-center">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  {commercials.slice(5).map((commercial) => (
                    <Link key={commercial.path} href={commercial.path}>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {commercial.label}
                        {commercial.year && <span className="ml-1 text-[#E32636]">'{commercial.year.slice(2)}</span>}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {commercials.map((commercial) => (
                <Link key={commercial.path} href={commercial.path}>
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {commercial.label}
                    {commercial.year && <span className="ml-2 text-[#FFD700]">'{commercial.year.slice(2)}</span>}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
