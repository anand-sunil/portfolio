import StarBorder from '../components/StarBorder';
import QRCode from 'react-qr-code';

export default function Contact() {
    const whatsAppNumber = "918590692771"; // Updated to correct number
    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:mb-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Touch</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Have a project in mind or just want to discuss ideas? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Contact Info */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900/20 to-slate-900/80 p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col justify-between group h-full">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 space-y-12">
                            <div>
                                <h3 className="text-white font-bold text-2xl mb-2">Contact Info</h3>
                                <p className="text-slate-400 font-light">Reach out directly via email or social media.</p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">Email</h4>
                                    <a
                                        href="mailto:anandsunil187@gmail.com"
                                        className="text-2xl text-white hover:text-indigo-400 transition-all duration-300 font-medium block decoration-2 hover:underline underline-offset-4 decoration-indigo-500/50"
                                        title="Click to send an email"
                                    >
                                        anandsunil187@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-4">Socials</h4>
                                    <div className="flex gap-4">
                                        {[
                                            { name: 'GitHub', url: 'https://github.com/anand-sunil' },
                                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anand-sunil' }
                                        ].map((platform) => (
                                            <a
                                                key={platform.name}
                                                href={platform.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium active:scale-95"
                                            >
                                                {platform.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">Location</h4>
                                    <p className="text-lg text-slate-200">Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/5">
                            <p className="text-slate-500 text-sm font-medium">
                                &copy; 2025 Anand Sunil. <span className="text-slate-400">Open to freelance & collaborative opportunities.</span>
                            </p>
                        </div>
                    </div>

                    {/* WhatsApp QR Code */}
                    <div className="bg-slate-900/20 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center text-center">
                        <div className="mb-8">
                            <h3 className="text-white font-bold text-3xl mb-4 tracking-tight">Quick Chat on WhatsApp</h3>
                            <p className="text-slate-400 font-light mb-8 text-lg">Scan for the fastest response. <span className="text-indigo-300/80">Direct line for queries.</span></p>

                            <div className="bg-white p-4 rounded-xl inline-block shadow-lg shadow-indigo-500/10 hover:scale-105 transition-transform duration-300">
                                <QRCode
                                    value={`https://wa.me/${whatsAppNumber}`}
                                    size={200}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                        </div>

                        <p className="text-sm text-slate-500 font-light">
                            Or click <a href={`https://wa.me/${whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">here</a> to launch WhatsApp immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}