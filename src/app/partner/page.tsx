"use client";

import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { countryCodes } from "@/data/countries";

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

  const benefits = [
    { title: "Immediate Access", desc: "Gain instant, unrestricted access to CBPD's comprehensive programme content, expertly crafted curriculums, and rigorous assessment tools.", icon: "⚡" },
    { title: "Delivery Rights", desc: "Acquire the exclusive rights to officially deliver high-level education and certify successful learners with prestigious CBPD credentials.", icon: "📜" },
    { title: "Flexible Solutions", desc: "Capitalise on highly adaptable delivery options, successfully integrating dynamic voucher-based models and comprehensive e-learning solutions.", icon: "🔄" },
    { title: "Regional Exclusivity", desc: "Unlock premium regional exclusivity opportunities within targeted geographical markets to firmly establish your competitive educational dominance.", icon: "🗺️" },
    { title: "Dedicated Support", desc: "Receive ongoing, dedicated marketing guidance, operational streamlining, and comprehensive quality assurance support directly from CBPD.", icon: "🤝" },
    { title: "Revenue Growth", desc: "Drive exceptional revenue growth and institutional expansion by offering highly demanded, globally trusted professional certification programmes.", icon: "📈" }
  ];

  const processSteps = [
    { title: "Submit Enquiry", desc: "Initiate your journey by formally submitting your partnership enquiry through our dedicated portal.", icon: "📝" },
    { title: "Documentation", desc: "Provide comprehensive supporting documentation detailing your institutional standing and track record.", icon: "📂" },
    { title: "Capability Review", desc: "Successfully complete a rigorous quality and infrastructural capability review, conducted virtually or in-person.", icon: "🔍" },
    { title: "Agreement", desc: "Sign the official CBPD partnership agreement upon successfully passing the quality assurance phase.", icon: "✍️" },
    { title: "Launch Programmes", desc: "Officially launch your CBPD programmes to the market, fully backed by our continuous operational support.", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent z-0"></div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none z-0 animate-[pulse_8s_infinite]"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 z-0 animate-[pulse_10s_infinite_reverse]"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block px-5 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red mb-8 backdrop-blur-sm">
              <span className="text-sm font-bold tracking-wider uppercase">Partnership Program</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Become a <span className="text-brand-red">CBPD</span> <br />
              Authorised Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the Central Board of Professional Development (CBPD) global network as an authorised partner or approved centre, and dynamically expand your institutional offering with prestigious UK professional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* About / Who Can Become Section */}
      <section className="py-24 relative bg-white dark:bg-[#050812] border-b border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out">
              <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-2 block">Our Network</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                Who Can Become a <span className="text-brand-red">Partner?</span>
              </h2>
              <div className="w-20 h-1 bg-brand-red"></div>
              
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  CBPD partners exclusively with highly capable educational entities that share our steadfast commitment to driving educational excellence and fostering professional growth.
                </p>
                <div className="border-l-[6px] border-brand-red pl-6 py-4 bg-slate-50 dark:bg-primary-800 rounded-r-2xl shadow-sm">
                  <p className="font-semibold text-slate-800 dark:text-white m-0">
                    We boldly welcome applications from distinguished Training Providers, esteemed Educational Institutions, and robust Corporate Organisations.
                  </p>
                </div>
                <p>
                  Ideal partnership candidates must powerfully demonstrate proven educational delivery capability, secure and suitable administrative infrastructure, and a profoundly shared commitment to maintaining rigorous quality standards. By meeting these critical criteria, you actively ensure that every learner experiences world-class support and transformative career outcomes.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 delay-200 ease-out">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Partnership Agreement" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Achievement Box */}
                <div className="absolute bottom-8 left-8 bg-white/90 dark:bg-primary-900/90 backdrop-blur-md border border-slate-200 dark:border-primary-700 p-6 rounded-2xl z-20 shadow-xl">
                  <p className="text-slate-800 dark:text-white font-bold text-3xl mb-1">Global Reach</p>
                  <p className="text-slate-500 dark:text-slate-300 text-sm font-medium">Empowering Local Centres</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out">
            <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">The Value</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits of Partnering with <span className="text-brand-red">CBPD</span>
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Unlock a comprehensive suite of institutional advantages designed specifically to accelerate your growth and firmly establish your regional authority in the professional education sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: `${idx * 100}ms` }}>
                <TiltCard sensitivity={7} className="h-full">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 h-full hover:bg-white/10 transition-all group shadow-xl flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary-800 border border-white/10 flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary-700 group-hover:border-brand-red/50">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-red transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-white dark:bg-[#050812] border-y border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-brand-blue dark:text-brand-red font-bold tracking-wider text-sm uppercase mb-4 block">Onboarding</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16">
            CBPD Partnership Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative max-w-7xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-0 border-t-[2px] border-dashed border-slate-300 dark:border-primary-700 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <TiltCard key={idx} sensitivity={5} className="relative z-10 flex flex-col items-center group h-full">
                <div className="flex flex-col items-center w-full h-full">
                  <div className="w-24 h-24 bg-brand-blue dark:bg-primary-900 text-white rounded-full border-[4px] border-white dark:border-[#050812] flex items-center justify-center text-4xl shadow-xl mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all shrink-0">
                    {step.icon}
                  </div>
                  <div className="bg-slate-50 dark:bg-primary-800 p-6 pt-8 rounded-3xl w-full border border-slate-200 dark:border-primary-700 shadow-sm relative grow flex flex-col">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white font-black px-4 py-1 rounded-full text-xs whitespace-nowrap tracking-wider">
                      STEP 0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 mt-2 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mt-auto">{step.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-transparent z-0"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-on-scroll translate-y-12 opacity-0 transition-all duration-700 ease-out delay-200 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight mx-auto leading-tight">
            Ready to <span className="text-brand-red">Accelerate</span> Your Institution?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 mx-auto leading-relaxed">
            CBPD partners securely benefit from a modern, agile, and fiercely learner-focused model that guarantees faster, more tangible results than many established, traditional awarding bodies.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton strength={15}>
              <a href="#enquiry" onClick={(e) => {
                e.preventDefault();
                document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }} className="px-10 py-5 rounded-full bg-brand-red text-white font-bold text-lg lg:text-xl hover:bg-white hover:text-brand-red transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:shadow-[0_15px_40px_rgba(212, 53, 28,0.5)] flex items-center justify-center gap-3 group w-full md:w-auto mt-4 cursor-pointer">
                Submit Your CBPD Partnership Enquiry Today
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="py-24 bg-slate-50 dark:bg-[#0a0f1c] relative border-t border-slate-200 dark:border-primary-800">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white dark:bg-primary-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_5px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-bl-full pointer-events-none"></div>
            <div className="relative z-10 text-center mb-10">
              <span className="text-brand-red font-bold tracking-wider text-sm uppercase mb-2 block">Partnership Enquiry</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Begin the Conversation</h2>
            </div>
                  
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">First Name *</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">Last Name *</label>
                  <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">Email Address *</label>
                  <input type="email" required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="work@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">Phone</label>
                  <div className="flex">
                    <select className="w-1/3 px-3 py-4 bg-slate-100 dark:bg-primary-800 border border-r-0 border-slate-200 dark:border-primary-700 rounded-l-xl focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white">
                      {countryCodes.map((c, i) => (
                        <option key={i} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <input type="tel" className="w-2/3 pl-3 pr-5 py-4 rounded-r-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="20..." />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">Institution / Company Name *</label>
                <input type="text" required className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white" placeholder="Your Institution" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-300 text-left block">Tell us about your requirements</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-primary-800 border border-slate-200 dark:border-primary-700 focus:outline-none focus:border-brand-blue dark:focus:border-brand-red focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-red transition-colors text-slate-900 dark:text-white resize-none" placeholder="We are interested in delivering CBPD programs..."></textarea>
              </div>

              <div className="flex justify-center mt-8">
                <MagneticButton strength={15}>
                  <button type="submit" className="px-10 py-5 rounded-full bg-brand-red text-white font-bold text-lg hover:bg-brand-blue transition-colors shadow-[0_5px_20px_rgba(212,53,28,0.4)] hover:shadow-[0_10px_30px_rgba(30,64,175,0.5)] flex items-center gap-2 group w-full md:w-auto">
                    Submit Enquiry
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
