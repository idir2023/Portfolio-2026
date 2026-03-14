import { motion } from "motion/react";
import { User, Target, Rocket, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: User,
      title: t("about.history"),
      description: t("data.personalInfo.history"),
    },
    {
      icon: Target,
      title: t("about.whatAmIDoing"),
      description: t("data.personalInfo.whatAmIDoing"),
    },
    {
      icon: Rocket,
      title: t("about.whatNext"),
      description: t("data.personalInfo.whatNext"),
    },
    {
      icon: Heart,
      title: t("about.dreams"),
      description: t("data.personalInfo.dreams"),
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-zinc-100 dark:bg-zinc-950 grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("about.subtitle")}</span>
            {t("about.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("data.personalInfo.summary")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:border-emerald-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-emerald-500/10 border border-zinc-200 dark:border-white/5">
                <card.icon className="text-emerald-500" size={20} />
              </div>
              <h3 className="text-lg font-bold font-mono text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">
                // {card.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
