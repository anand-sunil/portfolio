
import ProjectCard from '../components/ProjectCard';
import imageClassificationImg from '../assets/image-classification.png';
import emotionDetectionImg from '../assets/emotion-detection.png';
import skillbridgeImg from '../assets/skillbridge.png';

export default function Projects() {
    const projects = [
        {
            title: "Image Classification App",
            description: "A machine learning application capable of classifying images into distinct categories with high accuracy.",
            tech: ["Python", "Deep Learning", "Computer Vision"],
            github: "https://github.com/anand-sunil/image-classification-app/tree/main/image-classification-app",
            live: null,
            image: imageClassificationImg
        },
        {
            title: "Emotion Detection System",
            description: "Real-time facial emotion recognition using deep learning.",
            tech: ["Python", "Deep Learning", "OpenCV"],
            github: "https://github.com/anand-sunil/emotion-detection-project",
            live: null,
            image: emotionDetectionImg
        },
        {
            title: "SkillBridge",
            description: "A comprehensive job portal and course platform connecting professionals with companies.",
            tech: ["Django", "Python", "MySQL", "Tailwind CSS"],
            github: "https://github.com/anand-sunil/skillbridge",
            live: null,
            image: skillbridgeImg
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}