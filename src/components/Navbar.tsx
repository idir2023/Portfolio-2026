import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold font-mono tracking-tighter text-zinc-900 dark:text-white"
        >
          <span className="text-emerald-500">&lt;</span>
          Idir
          <span className="text-emerald-500"> /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Theme + Language */}
          <div className="flex items-center gap-4 ml-4 border-l border-zinc-200 dark:border-zinc-800 pl-4">
            <button onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="relative group">
              <button className="flex items-center gap-1">
                <Globe size={16} />
                <span className="text-[10px] uppercase font-bold font-mono">
                  {i18n.language}
                </span>
              </button>

              <div className="absolute right-0 top-full mt-2 w-24 bg-white dark:bg-zinc-900 rounded border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden shadow-xl">
                <button onClick={() => changeLanguage("en")} className="px-4 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  EN
                </button>
                <button onClick={() => changeLanguage("fr")} className="px-4 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  FR
                </button>
                <button onClick={() => changeLanguage("ar")} className="px-4 py-2 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  AR
                </button>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold font-mono uppercase tracking-widest rounded hover:bg-zinc-800 dark:hover:bg-zinc-200"
          >
            {t("hero.hireMe")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-emerald-500"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
