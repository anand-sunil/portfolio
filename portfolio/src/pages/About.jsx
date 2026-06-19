import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '../components/BlurText';
import { TechIcon, getSkillStyles } from '../components/TechIcons';

export default function About() {
    const [selectedCert, setSelectedCert] = useState(null);

    // Close lightbox on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedCert(null);
        };
        if (selectedCert) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedCert]);

    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
        { category: "Backend", items: ["Python", "Django", "REST APIs", "MySQL", "MongoDB", "PostgreSQL"] },
        { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Antigravity"] }
    ];

    const certificates = [
        {
            title: "Bachelor of Computer Applications",
            issuer: "Mahatma Gandhi University",
            date: "March 2025",
            image: "/certificates/bca-degree.jpeg",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            )
        },
        {
            title: "Python Intern",
            issuer: "SMEC Technologies",
            date: "Feb 2026 – May 2026",
            image: "/certificates/internship.jpeg",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
            )
        },
        {
            title: "Certified Python Fullstack Developer",
            issuer: "SMEC Labs (NSDC Partner)",
            date: "Jul 2025 – Jan 2026",
            image: "/certificates/python-fullstack.jpeg",
            icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
            )
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 16
            }
        }
    };

    return (
        <section className="py-24 md:py-32 px-6 overflow-hidden">
            <motion.div 
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Bio Section */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
                        </h1>
                        <BlurText
                            text="A quick overview of my background and skills"
                            delay={80}
                            animateBy="words"
                            direction="top"
                            className="text-slate-400 text-lg md:text-xl font-light mb-10 block"
                        />

                        <div className="space-y-8 text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                            <p>
                                Motivated aspiring Full-Stack Developer with a strong foundation in Python, Django, and modern frontend technologies including React and Tailwind CSS. Experienced in building responsive web applications, implementing RESTful APIs, integrating databases, and deploying projects using version control and hosting platforms. Eager to learn, collaborate in team environments, and contribute to scalable, user-focused digital solutions.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <div className="pl-4 border-l-2 border-indigo-500/50">
                                    <span className="block text-2xl font-bold text-white mb-1">10+</span>
                                    <span className="text-sm text-slate-400 uppercase tracking-wider">Projects</span>
                                </div>
                                <div className="pl-4 border-l-2 border-purple-500/50">
                                    <span className="block text-2xl font-bold text-white mb-1">Strong</span>
                                    <span className="text-sm text-slate-400 uppercase tracking-wider">Fundamentals</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <div className="space-y-8 lg:pt-24">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>

                                <h2 className="relative text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-indigo-400' : index === 1 ? 'bg-purple-400' : 'bg-emerald-400'}`}></span>
                                    {skillGroup.category}
                                </h2>

                                <div className="relative flex flex-wrap gap-3.5">
                                    {skillGroup.items.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`flex items-center gap-2.5 px-4 py-2.5 bg-slate-950/40 text-slate-300 text-sm font-medium rounded-xl border border-white/5 cursor-default transition-all duration-300 ${getSkillStyles(skill)}`}
                                        >
                                            <TechIcon name={skill} className="w-5 h-5" />
                                            <span>{skill}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <motion.div
                    variants={itemVariants}
                    className="mt-28"
                >
                    <div className="flex items-center gap-4 mb-14">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Education</span>
                            </h2>
                        </div>
                        <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, type: "spring", stiffness: 80, damping: 18 }}
                                whileHover={{ y: -6 }}
                                onClick={() => setSelectedCert(cert)}
                                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-950/60 rounded-2xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-slate-700/15 hover:border-white/10"
                            >

                                {/* Certificate Image */}
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    {/* Click hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                            </svg>
                                            View Certificate
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="flex-shrink-0 mt-0.5 p-2 rounded-xl bg-slate-800 text-slate-300 border border-white/5">
                                            {cert.icon}
                                        </span>
                                        <div>
                                            <h3 className="text-white font-semibold text-base leading-snug">
                                                {cert.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="ml-12 space-y-1">
                                        <p className="text-slate-400 text-sm">{cert.issuer}</p>
                                        <p className="text-slate-500 text-xs font-mono">{cert.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Resume Download */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 80, damping: 18 }}
                        className="mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
                    >
                        <a
                            href="/certificates/anand_resume.pdf"
                            download="Anand_Sunil_Resume.pdf"
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-slate-950 font-semibold text-sm rounded-xl hover:bg-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download Resume
                        </a>
                        <a
                            href="/certificates/anand_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-7 py-3.5 bg-transparent text-slate-300 font-medium text-sm rounded-xl border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            View Resume
                        </a>
                    </motion.div>
                </motion.div>

            </motion.div>

            {/* Certificate Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedCert(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 30 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 md:right-0 text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
                            >
                                <span className="hidden md:inline">Press ESC or click outside</span>
                                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>

                            {/* Image container */}
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-slate-900">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto max-h-[75vh] object-contain"
                                />
                            </div>

                            {/* Info bar */}
                            <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{selectedCert.title}</h3>
                                    <p className="text-slate-400 text-sm">{selectedCert.issuer} · {selectedCert.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}