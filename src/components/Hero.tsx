import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
          poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          {/* Fallback to image if video fails */}
        </video>
        {/* Gradient Overlay using brand blue for shade */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-primary-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start pt-20">
        
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
          Education Meets Personality & <br/>
          <span className="text-brand-red">Professional Growth</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 animate-[fadeInUp_1.2s_ease-out]">
          Master the Art of Living a Remarkable Life. Claim Your Renowned Certifications & Membership. Unlock Your Ideal Career Path.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-[fadeInUp_1.4s_ease-out]">
          <MagneticButton strength={20}>
            <button className="px-8 py-4 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-white hover:text-brand-red transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center gap-2 group">
              Explore Programs
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </MagneticButton>
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
