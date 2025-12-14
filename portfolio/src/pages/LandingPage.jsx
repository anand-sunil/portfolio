import { Link } from 'react-router-dom';
import LiquidEther from '../components/LiquidEther';
import BlurText from '../components/BlurText';
import StarBorder from '../components/StarBorder';

export default function LandingPage() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20">
            {/* Background Ambience - Fluid Simulation */}
            <div className="absolute inset-0 w-full h-full bg-slate-950 pointer-events-none select-none">
                <LiquidEther
                    colors={['#4F46E5', '#818CF8', '#C084FC']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
                {/* Subtle overlay to blend it back into the dark theme if needed */}
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-overlay pointer-events-none"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                {/* Badge - Personal Greeting */}
                <div className="animate-fade-in-up flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 cursor-default select-none">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        <BlurText
                            text="Hi, I'm Anand Sunil"
                            delay={120}
                            animateBy="words"
                            direction="top"
                            className="text-sm tracking-wide text-indigo-300"
                        />
                    </div>
                </div>

                {/* Headline - Personal & Impactful */}
                <div className="relative mb-8 animate-fade-in-up-delay-1">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[60px] -z-10 rounded-full pointer-events-none"></div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] px-4">
                        Building Modern Apps <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-500 drop-shadow-sm block sm:inline mt-2 sm:mt-0">
                            with React & Django.
                        </span>
                    </h1>
                </div>

                {/* Subtext - Authentic Tagline */}
                <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up-delay-2 px-4">
                    A Full Stack Developer specializing in React and Django. I build clean, scalable web applications with a focus on real-world utility.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay-2">
                    {/* Primary CTA */}
                    <Link to="/projects">
                        <StarBorder
                            as="div"
                            className="group relative cursor-pointer"
                            color="#6366f1"
                            speed="4s"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
                                View Projects
                                <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </StarBorder>
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        to="/contact"
                        className="group w-full sm:w-auto px-8 py-4 text-slate-300 hover:text-white font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}