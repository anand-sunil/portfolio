import BlurText from '../components/BlurText';

export default function About() {
    const skills = [
        { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
        { category: "Backend", items: ["Python", "Django", "REST APIs", "MySQL", "MongoDB", "PostgreSQL"] },
        { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Cursor AI"] }
    ];

    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Bio Section */}
                    <div>
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
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-8 lg:pt-24">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300"></div>

                                <h2 className="relative text-lg font-bold text-white mb-6 flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-indigo-400' : index === 1 ? 'bg-purple-400' : 'bg-emerald-400'}`}></span>
                                    {skillGroup.category}
                                </h2>

                                <div className="relative flex flex-wrap gap-3">
                                    {skillGroup.items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white/5 text-slate-300 text-sm font-medium rounded-xl border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}