import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0A192F]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/hero-video-comp.mp4" type="video/mp4" />
        </video>
        {/* Dark opacity layer as requested */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        {/* Gradient Overlay using brand blue for extra flavor */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-primary-900/70 to-transparent z-0 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/95 z-0 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-20 h-full gap-12 w-full">
        
        {/* Text Area */}
        <div className="flex flex-col items-start w-full lg:w-1/2">
          {/* Hero Logo */}
          <div className="mb-8 animate-[fadeInUp_0.6s_ease-out]">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 shadow-[-10px_10px_30px_rgba(0,0,0,0.2)]">
              <img 
                src="https://www.cbpd.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCBPD_LOGO.7c42c792.png&w=256&q=75" 
                alt="CBPD Large Logo"
                className="h-20 md:h-28 w-auto object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-5xl leading-tight mb-6 animate-[fadeInUp_1s_ease-out]">
            Education Meets Personality & <br className="hidden md:block" />
            <span className="text-brand-red">Professional Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 animate-[fadeInUp_1.2s_ease-out]">
            Master the Art of Living a Remarkable Life. Claim Your Renowned Certifications & Membership. Unlock Your Ideal Career Path.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 animate-[fadeInUp_1.4s_ease-out]">
            <MagneticButton strength={20}>
              <Link href="/programs" className="px-8 py-4 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-white hover:text-brand-red transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] inline-flex items-center gap-2 group">
                Explore Programs
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Floating Images Area */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative h-[500px] items-center justify-center animate-[fadeInUp_1.5s_ease-out]">
          
          {/* Image 1: Student */}
          <div className="absolute top-0 right-4 w-64 h-80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/20 animate-[float_6s_ease-in-out_infinite] z-20 hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" 
              alt="Students learning" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          {/* Image 2: London */}
          <div className="absolute bottom-0 right-32 w-72 h-56 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-white/20 animate-[float_8s_ease-in-out_infinite_reverse] z-10 hover:scale-105 transition-transform duration-500 delay-100">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop" 
              alt="London landscape" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          {/* Image 3: Graduation/Professional */}
          <div className="absolute top-24 left-4 w-56 h-64 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-accent-gold/40 animate-[float_7s_ease-in-out_infinite] z-30 hover:scale-105 transition-transform duration-500 delay-300">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop" 
              alt="Professional graduation" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-gold/20 rounded-full blur-[80px] z-0"></div>
          <div className="absolute top-10 left-20 w-8 h-8 rounded-full bg-brand-red/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] z-40"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-[fadeInUp_1.6s_ease-out]">
        <span className="text-white/60 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold animate-[translateY_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
