import { motion } from "motion/react";
import { personalInfo } from "../data";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6 relative bg-zinc-50 dark:bg-black grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("contact.subtitle")}</span>
            {t("contact.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
              {t("contact.talk")}
            </h3>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="text-emerald-500" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-1">{t("contact.emailLabel")}</h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-medium text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <Phone className="text-indigo-500" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  {t("contact.phoneLabel")}
                </h4>
                <a
                  href="https://wa.me/+212681736149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-zinc-900 dark:text-white hover:text-indigo-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <MapPin className="text-cyan-500" size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  {t("contact.locationLabel")}
                </h4>
                <span className="text-lg font-medium text-zinc-900 dark:text-white">{t("data.personalInfo.location")}</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-white/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-bold font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
                >
                  // {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-bold font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
                >
                  // {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-[10px] font-bold font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
              >
                // {t("contact.subject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono text-sm"
                placeholder={t("contact.subjectPlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[10px] font-bold font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
              >
                // {t("contact.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none font-mono text-sm"
                placeholder={t("contact.messagePlaceholder")}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold font-mono uppercase tracking-widest rounded-lg px-6 py-4 flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-sm"
            >
              {t("contact.send")}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
