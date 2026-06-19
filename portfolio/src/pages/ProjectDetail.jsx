import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import ImageCarousel from '../components/ImageCarousel';

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="py-24 md:py-32 px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-300"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 mb-10 group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <span className="text-sm font-medium">Back to Projects</span>
                    </Link>
                </motion.div>

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-10"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        {project.title}
                    </h1>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-all duration-300 border border-white/5 hover:border-white/15 active:scale-95"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                View Source Code
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Image Carousel */}
                {project.gallery.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-16"
                    >
                        <ImageCarousel images={project.gallery} />
                    </motion.div>
                )}

                {/* Description & Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid lg:grid-cols-2 gap-10"
                >
                    {/* Description */}
                    <div className="bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                            About This Project
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-base font-light">
                            {project.detailedDescription}
                        </p>
                    </div>

                    {/* Features */}
                    {project.features.length > 0 && (
                        <div className="bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                Key Features
                            </h2>
                            <ul className="space-y-4">
                                {project.features.map((feature, i) => {
                                    const [label, ...rest] = feature.split(' — ');
                                    const desc = rest.join(' — ');
                                    return (
                                        <li key={i} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <span className="text-white font-medium text-sm">{label}</span>
                                                {desc && (
                                                    <span className="text-slate-400 text-sm font-light"> — {desc}</span>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
