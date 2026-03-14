import { motion } from "motion/react";
import { experience, education } from "../data";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6 relative bg-zinc-100 dark:bg-zinc-950 grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("experience.subtitle")}</span>
            {t("experience.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("experience.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-emerald-500/10 rounded-2xl">
                <Briefcase className="text-emerald-500" size={28} />
              </div>
              <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-white uppercase tracking-wider">
                &lt;{t("experience.title")} /&gt;
              </h3>
            </div>

            <div className="relative border-l border-zinc-200 dark:border-white/5 ml-6 space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-3 text-[11px] font-bold font-mono text-zinc-500 uppercase tracking-widest">
                      <Calendar size={12} className="text-emerald-500" />
                      {t(`data.experience.${index}.period`)}
                    </div>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {t(`data.experience.${index}.title`)}
                    </h4>
                    <span className="text-sm font-mono text-emerald-500 font-medium">
                      @ {t(`data.experience.${index}.company`)}
                    </span>
                  </div>

                  <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                    {exp.achievements.map((_, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-emerald-500/50 shrink-0" />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: t(`data.experience.${index}.achievements.${i}`).replace(
                              /(\d+%|\d+\+)/g,
                              '<strong class="text-zinc-900 dark:text-zinc-200 font-mono">$1</strong>',
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-indigo-500/10 rounded-2xl">
                <GraduationCap className="text-indigo-500" size={28} />
              </div>
              <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-white uppercase tracking-wider">
                &lt;{t("education.title")} /&gt;
              </h3>
            </div>

            <div className="relative border-l border-zinc-200 dark:border-white/5 ml-6 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-[11px] font-bold font-mono text-zinc-500 uppercase tracking-widest">
                      <Calendar size={12} className="text-indigo-500" />
                      {t(`education.items.${index}.period`)}
                    </div>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                      {t(`education.items.${index}.degree`)}
                    </h4>
                    <span className="text-sm font-mono text-indigo-500 font-medium">
                      @ {t(`education.items.${index}.institution`)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
