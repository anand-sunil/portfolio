
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-950/60 backdrop-blur-2xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Area - Personal Monogram */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center w-9 h-9">
                            {/* Monogram Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg opacity-80 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>

                            {/* Monogram Container */}
                            <div className="relative bg-slate-950 w-[34px] h-[34px] rounded-[7px] flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                                <span className="font-bold text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 group-hover:from-indigo-300 group-hover:to-purple-300">
                                    AS
                                </span>
                            </div>
                        </div>

                        {/* Name - Personal Brand */}
                        <div className="flex flex-col justify-center">
                            <span className="self-center text-sm font-bold tracking-wide text-slate-200 group-hover:text-white transition-colors leading-none">
                                ANAND SUNIL
                            </span>
                            <span className="text-[10px] text-indigo-400 font-medium tracking-wider leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1 group-hover:translate-y-0">
                                PORTFOLIO
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group/link ${isActive(link.path)
                                        ? 'text-white'
                                        : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {/* Subtle background glow for active/hover */}
                                    <span className={`absolute inset-0 bg-white/5 transition-opacity duration-300 -z-10 rounded-full ${isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-50'
                                        }`}></span>

                                    {/* Glow indicator for active state */}
                                    {isActive(link.path) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                                    )}

                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-400 hover:text-white p-2 transition-colors active:scale-95"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive(link.path)
                                ? 'bg-white/10 text-white'
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav >
    );
}