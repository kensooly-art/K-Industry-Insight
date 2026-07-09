import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Globe, Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.tours, path: "/apply" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.contact, path: "/contact" },
    { name: t.nav.admin, path: "/admin" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1B]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#007AFF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
              K-INDUSTRY INSIGHT
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#007AFF]",
                  location.pathname === item.path ? "text-[#007AFF]" : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Language Selector */}
            <div className="hidden sm:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
              {(["KR", "EN", "CN"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded transition-colors cursor-pointer",
                    language === lang
                      ? "bg-[#007AFF] text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {lang === "KR" ? "KO" : lang === "EN" ? "EN" : "ZH"}
                </button>
              ))}
            </div>

            {/* Mobile Cycling Language Button */}
            <button
              onClick={() => setLanguage(language === "KR" ? "EN" : language === "EN" ? "CN" : "KR")}
              className="sm:hidden flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "KR" ? "KO" : language === "EN" ? "EN" : "ZH"}</span>
            </button>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1A1A1B] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === item.path
                      ? "bg-[#007AFF]/10 text-[#007AFF]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Drawer Language Row */}
              <div className="flex flex-col space-y-3 px-3 py-4 mt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span>Language / 语言 / 언어</span>
                </div>
                <div className="flex space-x-1 bg-white/5 p-0.5 rounded-lg border border-white/10">
                  {(["KR", "EN", "CN"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        "flex-1 text-xs font-semibold py-2 rounded transition-colors text-center cursor-pointer",
                        language === lang
                          ? "bg-[#007AFF] text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {lang === "KR" ? "한국어" : lang === "EN" ? "English" : "中文"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#1A1A1B] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#007AFF] rounded flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-white font-bold tracking-tight">K-INDUSTRY INSIGHT</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Premium industrial tour programs in Korea, offering deep insights into semiconductors, automobile innovation, and smart factories.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#007AFF] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">info@k-industrytour.com</p>
            <p className="text-gray-400 text-sm">+82 2-1234-5678</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
