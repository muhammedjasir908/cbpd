

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
          <source src="./hero-video-comp.mp4" type="video/mp4" />
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
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-full pb-10">
          
          <div className="inline-block px-4 py-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 text-accent-gold font-bold tracking-wide text-xs md:text-sm mb-6 animate-[fadeInUp_0.8s_ease-out]">
            Central Board of Professional Development (CBPD)
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white max-w-3xl leading-[1.1] mb-5 animate-[fadeInUp_1s_ease-out]">
            UK Professional Body Delivering Practical, <br className="hidden md:block" />
            <span className="text-brand-red">Globally Recognised Credentials</span>
          </h1>
          
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
