import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ExternalLink, Github, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeProject = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-24 px-6 relative bg-zinc-50 dark:bg-black grid-bg-light dark:grid-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
            <span className="font-mono text-emerald-500 text-lg md:text-xl block mb-2 tracking-widest uppercase">// {t("projects.subtitle")}</span>
            {t("projects.title")}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            {t("projects.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 hover:scale-[1.02] overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={t(`data.projects.${index}.title`)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-6">
                  <div className="flex gap-3 bg-black/50 backdrop-blur-md p-2 rounded-xl">
                    {project.url.includes("github") ? (
                      <Github size={20} className="text-white" />
                    ) : (
                      <ExternalLink size={20} className="text-white" />
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {t(`data.projects.${index}.title`)}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow line-clamp-2">
                  {t(`data.projects.${index}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] font-bold font-mono rounded bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-white/10"
            >
              <button
                onClick={closeProject}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-full min-h-[300px] relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={t(`data.projects.${selectedProject}.title`)}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="mb-8">
                    <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-500 text-[10px] font-bold font-mono uppercase tracking-[0.2em] mb-4 border border-emerald-500/20">
                      {t(`data.projects.${selectedProject}.category`)}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                      {t(`data.projects.${selectedProject}.title`)}
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                      {projects[selectedProject].longDescription || t(`data.projects.${selectedProject}.description`)}
                    </p>

                    {projects[selectedProject].features && (
                      <div className="mb-10">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4 font-mono">
                          // Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {projects[selectedProject].features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mb-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-4 font-mono">
                      // Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 text-[12px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    {projects[selectedProject].githubUrl && (
                      <a
                        href={projects[selectedProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20 dark:shadow-white/10"
                      >
                        <Github size={20} />
                        View Source
                      </a>
                    )}
                    {projects[selectedProject].liveUrl && (
                      <a
                        href={projects[selectedProject].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
                      >
                        <Globe size={20} />
                        Live Demo
                      </a>
                    )}
                    {!projects[selectedProject].githubUrl && !projects[selectedProject].liveUrl && projects[selectedProject].url !== "#" && (
                      <a
                        href={projects[selectedProject].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
                      >
                        {projects[selectedProject].url.includes("github") ? (
                          <>
                            <Github size={20} />
                            View Source
                          </>
                        ) : (
                          <>
                            <Globe size={20} />
                            Live Demo
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
