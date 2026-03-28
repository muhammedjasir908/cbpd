import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";

export default function AboutPage() {
  const benefits = [
    { title: "Professional Mastery", desc: "Strive for Excellence", icon: "🏆" },
    { title: "Greater Heights", desc: "Climbing the Corporate World", icon: "📈" },
    { title: "Career-Specific Skills", desc: "Develop exactly what you need", icon: "🎯" },
    { title: "Industry Experts", desc: "Connecting with top professionals", icon: "🤝" },
  ];

  return (
    <main className="min-h-screen">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-accent-gold font-semibold tracking-wide text-sm uppercase">About CBPD</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Step into the future of <br/>
            <span className="text-brand-red">career growth</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Turn learning into mastery with CBPD! Professional certifications designed for real-world impact in a short time. Join the innovative way of career building today!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0f1c]">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              CBPD Accreditation for <span className="text-brand-blue dark:text-brand-red">Training and Events</span>
            </h2>
            <div className="w-20 h-1 bg-accent-gold mb-10"></div>
            
            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300">
              <p className="mb-6">
                In today’s competitive world, gaining international recognition in your profession is crucial for career growth and success. The Central Board of Professional Development (CBPD) is dedicated to providing global accreditation for professionals across various industries, ensuring that their expertise is recognized at every level.
              </p>
              <p className="mb-6">
                By emphasizing practical experience, professional mastery, and academic relevance, CBPD offers a streamlined and cost-effective approach to building a globally competitive career profile. One of the key advantages of CBPD is its affordability and efficiency. Unlike traditional certification paths that require extensive time and financial investment, CBPD provides a shorter, more direct route to professional success.
              </p>
              <p>
                At CBPD, we firmly believe that professional excellence is built on dedication, integrity, and expertise. We empower individuals by equipping them with the necessary credentials to boost their self-confidence, increase their earning potential, and achieve career milestones with distinction.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <TiltCard key={index} className="h-full" sensitivity={10}>
                  <div className="bg-white dark:bg-primary-800 rounded-3xl p-8 border border-slate-100 dark:border-primary-700 shadow-sm hover:shadow-xl hover:border-brand-red/50 transition-all duration-300 h-full flex flex-col animate-[float_6s_ease-in-out_infinite]" style={{ transform: "translateZ(20px)", transitionDelay: `${index * 150}ms` }}>
                    <div className="text-4xl mb-6 bg-slate-50 dark:bg-primary-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-primary-700 shadow-inner group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Join CBPD and Redefine Your <span className="text-accent-gold">Professional Journey</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Choosing CBPD means choosing a faster, more affordable, and globally recognized route to professional success.
          </p>
          <div className="flex justify-center">
            <MagneticButton strength={20}>
              <button className="px-10 py-5 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] flex items-center gap-3 mx-auto group">
                Contact Us Today
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
