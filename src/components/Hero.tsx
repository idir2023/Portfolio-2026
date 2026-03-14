import { motion } from "motion/react";
import { personalInfo } from "../data";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden grid-bg-light dark:grid-bg"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen opacity-50" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-200/50 dark:bg-white/5 border border-zinc-300 dark:border-white/10 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-[0.2em]">
              {t("hero.available")}
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
              {t("hero.hi")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-300 dark:from-emerald-400 dark:to-emerald-200">
                {personalInfo.name}
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-emerald-500/50" />
              <h2 className="text-xl md:text-2xl font-mono font-medium text-zinc-500 dark:text-zinc-400 tracking-tight">
                &lt;{t("data.personalInfo.title")} /&gt;
              </h2>
            </div>
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
            {t("data.personalInfo.about")}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
            >
              {t("hero.hireMe")}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Lahcen_Idir_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white font-medium rounded-full border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              {t("hero.downloadCv")}
              <Download size={18} />
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 rounded-3xl transform rotate-6 scale-105 blur-xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-2">
            <img
              src="/images/logo.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
