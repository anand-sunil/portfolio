
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

export default function Projects() {
    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        A small selection of projects that showcase my journey in building scalable web applications and solving real-world problems.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {projectsData.map((project) => (
                        <div 
                            key={project.slug}
                            className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] flex flex-col"
                        >
                            <ProjectCard
                                slug={project.slug}
                                title={project.title}
                                description={project.shortDescription}
                                tech={project.tech}
                                github={project.github}
                                live={project.live}
                                image={project.coverImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}