import React from 'react';

// Maps technology names to official brand CDN SVG paths (Devicon and Simple Icons)
// This ensures real, authentic, multi-colored logos for a premium, industry-standard look.
export const TechIcon = ({ name, className = "w-5 h-5" }) => {
    const iconUrls = {
        "react": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        "html": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "github": "https://cdn.simpleicons.org/github/ffffff",
        "vs code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        "postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    };

    const url = iconUrls[name.toLowerCase()];

    if (url) {
        // For Django, devicon django-plain.svg is black/white by default. We can use green filter or fetch simple-icons.
        // Let's use simple-icons django logo to show the official green Django logo
        const finalUrl = name.toLowerCase() === "django" 
            ? "https://cdn.simpleicons.org/django/092E20" 
            : url;

        return (
            <img 
                src={finalUrl} 
                alt={name} 
                className={`${className} object-contain`}
                loading="lazy"
            />
        );
    }

    // Custom SVG for Antigravity (Google DeepMind Agentic AI branding)
    if (name.toLowerCase() === "antigravity") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <defs>
                    <linearGradient id="antigravity-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818CF8" />
                        <stop offset="50%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#F472B6" />
                    </linearGradient>
                </defs>
                <path 
                    d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" 
                    fill="url(#antigravity-grad)"
                />
            </svg>
        );
    }

    // Concept Fallback for REST APIs
    if (name.toLowerCase() === "rest apis") {
        return (
            <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-purple-400 stroke-[1.8]`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        );
    }

    // Default general icon fallback
    return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-indigo-400 stroke-2`}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
    );
};

// Returns brand glow and border styles for hover effects
export const getSkillStyles = (name) => {
    switch (name.toLowerCase()) {
        case "react":
            return "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:border-cyan-500/30 hover:text-cyan-200";
        case "javascript":
            return "hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:border-yellow-500/30 hover:text-yellow-200";
        case "tailwind css":
            return "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:border-cyan-500/30 hover:text-cyan-200";
        case "html":
            return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500/30 hover:text-orange-200";
        case "css":
            return "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500/30 hover:text-blue-200";
        case "python":
            return "hover:shadow-[0_0_20px_rgba(55,118,171,0.25)] hover:border-sky-500/30 hover:text-sky-200";
        case "django":
            return "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-500/30 hover:text-emerald-200";
        case "rest apis":
            return "hover:shadow-[0_0_20px_rgba(192,132,252,0.25)] hover:border-purple-500/30 hover:text-purple-200";
        case "mysql":
            return "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500/30 hover:text-sky-200";
        case "mongodb":
            return "hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:border-green-500/30 hover:text-green-200";
        case "postgresql":
            return "hover:shadow-[0_0_20px_rgba(2,132,199,0.25)] hover:border-sky-500/30 hover:text-sky-200";
        case "git":
            return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500/30 hover:text-orange-200";
        case "github":
            return "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white/20 hover:text-white";
        case "vs code":
            return "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500/30 hover:text-sky-200";
        case "postman":
            return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500/30 hover:text-orange-200";
        case "antigravity":
            return "hover:shadow-[0_0_20px_rgba(192,132,252,0.35)] hover:border-purple-500/40 hover:text-purple-200";
        default:
            return "hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:border-indigo-500/30 hover:text-indigo-200";
    }
};
