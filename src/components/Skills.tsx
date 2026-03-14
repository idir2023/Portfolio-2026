import { motion } from "motion/react";
import { skills, languages } from "../data";
import { Code2, Database, Layout, Terminal, Globe, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="text-emerald-400" size={20} />;
      case "Backend":
        return <Server className="text-indigo-400" size={20} />;
      case "Database":
        return <Database className="text-cyan-400" size={20} />;
      case "Tools":
        return <Terminal className="text-rose-400" size={20} />;
      default:
        return <Code2 className="text-amber-400" size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-zinc-50 dark:bg-black grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("skills.subtitle")}</span>
            {t("skills.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("skills.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  {getIcon(category)}
                </div>
                <h3 className="text-lg font-bold font-mono text-zinc-900 dark:text-white uppercase tracking-wider">
                  {t(`skills.categories.${category}`)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-[13px] font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/5 hover:border-emerald-500/30 hover:text-emerald-500 transition-all cursor-default"
                    >
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain opacity-70 group-hover:opacity-100" />
                      )}
                      {skill.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categories.length * 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-fuchsia-400" size={20} />
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{t("skills.languages")}</h3>
            </div>
            <div className="flex flex-col gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between"
                >
                  <span className="text-zinc-700 dark:text-zinc-300">{t(`skills.langNames.${lang.name}`)}</span>
                  <span className="text-sm text-zinc-500">{t(`skills.levels.${lang.level}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
