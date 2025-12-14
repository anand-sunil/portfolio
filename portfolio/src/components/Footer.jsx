
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-8 md:py-6 relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0">
                    {/* Copyright - Personal Signature */}
                    <div className="text-center md:text-left">
                        <p className="text-slate-500 text-xs font-light tracking-wide">
                            &copy; {currentYear} <span className="text-slate-300 font-medium">Anand Sunil</span>. Crafted with care & code.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 md:gap-8 bg-white/[0.02] md:bg-transparent px-6 py-2 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-none">
                        {[
                            { name: 'GitHub', url: 'https://github.com/anand-sunil' },
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anand-sunil' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors uppercase tracking-widest relative group"
                            >
                                {social.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500/50 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}