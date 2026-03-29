"use client";

import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Slight delay to trigger enter animations
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Smooth scroll observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-12", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const responsibilities = [
    {
      title: "Establish and Manage",
      desc: "Set up and oversee a network of certified testing centers within your designated region to facilitate high-quality education delivery.",
      icon: "🏢"
    },
    {
      title: "Enhance Service Portfolio",
      desc: "Offer recognized CBPD certifications, expanding your own portfolio of services and providing value to your clients and students.",
      icon: "📈"
    },
    {
      title: "Expand Your Reach",
      desc: "Integrate CBPD support centers and clients into your network, driving exponential growth and regional dominance in the education sector.",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] pt-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/20 blur-[120px] animate-[pulse_8s_infinite]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-red/10 blur-[150px] animate-[pulse_10s_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-5 py-2 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 border border-brand-blue/20 text-brand-blue dark:text-brand-blue mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider uppercase">Partnership Program</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-8 leading-tight">
              Become a <span className="text-brand-red bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-accent-gold">CBPD</span> <br />
              Authorised Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our global network. Expand the reach of high-quality CBPD curriculum and certification programs in your region.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative bg-white dark:bg-transparent border-t border-slate-200 dark:border-transparent">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Partnership" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Achievement Box */}
                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 p-6 rounded-2xl z-20 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                  <p className="text-slate-800 dark:text-white font-bold text-3xl mb-1">Global Reach</p>
                  <p className="text-slate-500 dark:text-slate-300 text-sm font-medium">Empowering Local Centers</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 delay-200 ease-out">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                About The <span className="text-brand-blue">Partnership</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  An Authorized Partner is entrusted with promoting and managing CBPD centers within a designated geographical region of a country. The primary goal is to expand the reach of the CBPD curriculum and certification programs.
                </p>
                <p>
                  Upon approval, partners gain immediate access to CBPD learning content and are authorized to deliver voucher-based and e-learning solutions, offering fast, flexible, and comprehensive education options.
                </p>
                <p>
                  As a recognized CBPD Authorized Partner, you can offer your clients and associates the full advantages of a professionally developed and expertly delivered education platform. Whether you're a company, solution provider, or reseller, you'll gain access to a network of testing centers capable of distributing CBPD vouchers and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-24 bg-[#0a0f1c] border-y border-white/5 relative overflow-hidden">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key <span className="text-accent-gold">Responsibilities</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl">
              As a CBPD Authorized Partner, you will play a pivotal role in the local educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responsibilities.map((req, idx) => (
              <div key={idx} className={`animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out`} style={{ transitionDelay: `${idx * 150}ms` }}>
                <TiltCard sensitivity={7} className="h-full">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 h-full hover:bg-white/10 transition-all group shadow-xl">
                    <div className="w-20 h-20 rounded-2xl bg-primary-800 border border-white/10 flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary-700">
                      {req.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-gold transition-colors">{req.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-base">
                      {req.desc}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out delay-200">
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white mb-8 tracking-tight max-w-4xl mx-auto">
            Ready to <span className="text-brand-red">Redefine</span> Your Professional Journey?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Join the CBPD network today and be part of a global movement transforming education and professional growth.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton strength={15}>
              <Link href="/contact" className="px-12 py-5 rounded-full bg-brand-blue text-white font-bold text-lg hover:bg-brand-red transition-all duration-300 shadow-[0_10px_30px_rgba(30,64,175,0.3)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.4)] hover:-translate-y-1 flex items-center gap-3 group">
                Contact Us to Apply
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
