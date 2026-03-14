import { motion } from "motion/react";
import { services } from "../data";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 px-6 relative bg-zinc-100 dark:bg-zinc-950 grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("services.subtitle")}</span>
            {t("services.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-emerald-500/10 border border-zinc-200 dark:border-white/5">
                <img src={service.icon} alt={service.title} className="w-7 h-7 opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold font-mono text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                &lt;{t(`data.services.${index}.title`)} /&gt;
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {t(`data.services.${index}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
