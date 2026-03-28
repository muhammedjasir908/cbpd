"use client";

import { useState } from "react";
import TiltCard from "@/components/TiltCard";

export default function ProgramsPage() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const programData = [
    { title: "Business", icon: "💼", subs: ["MBA Essentials", "Corporate Strategy & Leadership", "Business Ethics", "Organizational Behavior"] },
    { title: "Construction", icon: "🏗️", subs: ["Project Management for Construction", "Site Safety Fundamentals", "Structural Planning", "Sustainable Building"] },
    { title: "Design", icon: "🎨", subs: ["UI/UX Masterclass", "Graphic & Layout Design", "Interior Space Planning", "Product Prototype Design"] },
    { title: "Education", icon: "🎓", subs: ["Train the Trainer", "Digital & Distance Learning", "Special Education Needs", "Curriculum Development"] },
    { title: "Energy", icon: "⚡", subs: ["Renewable Energy Sources", "Oil & Gas Management", "Solar Technology Fundamentals", "Energy Trading Policies"] },
    { title: "Engineering", icon: "⚙️", subs: ["Mechanical Systems", "Electrical Engineering Basics", "Civil Planning & Infrastructure", "Mechatronics"] },
    { title: "Finance", icon: "📈", subs: ["Accounting Principles", "Investment Strategies", "Risk Management & Compliance", "Corporate Finance"] },
    { title: "Fire & Safety", icon: "🔥", subs: ["Fire Prevention Systems", "Emergency Response Tactics", "Occupational Hazard Control", "Safety Auditing"] },
    { title: "Healthcare & Medical", icon: "🏥", subs: ["Nursing Administration", "Medical Billing & Coding", "Clinical Care Leadership", "Healthcare Operations"] },
    { title: "Hospitality", icon: "🏨", subs: ["Hotel & Resort Management", "Culinary Arts & Services", "Guest Experience Optimization", "Event Coordination"] },
    { title: "Human Resources", icon: "👥", subs: ["Talent Acquisition", "Payroll & Compliance Systems", "Employee Relations", "Performance Management"] },
    { title: "Information Technology", icon: "💻", subs: ["Full-Stack Software Development", "Cybersecurity Protocols", "Cloud Architecture AWS/Azure", "Data Engineering"] },
    { title: "International Studies", icon: "🌍", subs: ["Global Political Economics", "Cross-Cultural Communication", "International Trade Laws", "Diplomatic Relations"] },
    { title: "Marine", icon: "⚓", subs: ["Oceanography & Marine Biology", "Maritime Logistics & Law", "Naval Architecture basics", "Offshore Operations"] },
    { title: "Media", icon: "🎥", subs: ["Digital Journalism", "Broadcasting Techniques", "Video Production & Editing", "Mass Communication Strategies"] },
    { title: "Science", icon: "🔬", subs: ["Biotechnology Fundamentals", "Applied Chemistry", "Environmental Tech Solutions", "Laboratory Data Analysis"] },
    { title: "Security", icon: "🛡️", subs: ["Cyber Defense Strategies", "Physical Facility Security", "Intelligence & Threat Analysis", "CCTV & Surveillance Ops"] },
    { title: "Social Care", icon: "🤝", subs: ["Youth Counseling & Development", "Elderly Care Administration", "Community Outreach & Support", "Child Welfare Programs"] },
    { title: "Sport", icon: "⚽", subs: ["Sports Management & Economics", "Athletic Training Principles", "Coaching Methodologies", "Sport Psychology"] },
    { title: "Telecommunications", icon: "📡", subs: ["Network Topologies", "5G Infrastructure Planning", "Satellite Communications", "Fiber Optics Deployment"] },
    { title: "Tourism", icon: "✈️", subs: ["Travel Agency Operations", "Ecotourism Development", "Destination Management", "Cultural Heritage Travel"] },
    { title: "Transport", icon: "🚆", subs: ["Logistics & Fleet Ops", "Supply Chain Management", "Aviation Basics & Guidelines", "Railway Network Operations"] },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-accent-gold font-semibold tracking-wide text-sm uppercase">Comprehensive Courses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Explore Our Comprehensive <br/>
            <span className="text-brand-red">Disciplines</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            We offer 22 highly specialized main programs, broken down into expert-led sub-programs designed for real-world impact and career mastery.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {programData.map((prog, index) => {
              // Using Picsum seed to generate a unique but consistent high-quality image for each category
              const imageUrl = `https://picsum.photos/seed/${prog.title.replace(/ & | /g, "")}/800/500`;

              return (
                <TiltCard key={index} sensitivity={12} className="h-full">
                  <div 
                    className="bg-white dark:bg-primary-900 rounded-[2rem] shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 hidden-overflow group hover:shadow-[0_20px_40px_rgba(30,64,175,0.1)] transition-all duration-500 h-full flex flex-col relative overflow-hidden" 
                    style={{ transform: "translateZ(15px)" }}
                  >
                    
                    {/* Header Image */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-brand-blue/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                      <img 
                        src={imageUrl} 
                        alt={prog.title} 
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                        loading="lazy"
                      />
                      
                      {/* Icon Badge */}
                      <div className="absolute -bottom-6 right-8 bg-white dark:bg-primary-800 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl z-20 border border-slate-100 dark:border-primary-700 group-hover:-translate-y-2 transition-transform duration-500">
                        {prog.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-10 flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors">
                        {prog.title}
                      </h2>
                      
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">
                        Master the principles of {prog.title.toLowerCase()} with our globally accredited industry curriculum. 
                      </p>
                      
                      {/* Expandable Sub-Programs List */}
                      <div className={`transition-all duration-500 overflow-hidden ease-in-out w-full ${expandedCards[index] ? 'max-h-[500px] mb-8 opacity-100' : 'max-h-0 mb-0 opacity-0'}`}>
                        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-primary-700">
                          {prog.subs.map((sub, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 dark:bg-brand-red/10 flex items-center justify-center shrink-0">
                                <span className="text-brand-blue dark:text-brand-red text-xs">✓</span>
                              </div>
                              <span className="text-slate-600 dark:text-slate-300 font-medium">{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => toggleExpanded(index)}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-auto transition-all duration-300 ${expandedCards[index] ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30' : 'bg-slate-50 dark:bg-primary-800 text-brand-blue dark:text-white hover:bg-brand-blue hover:text-white dark:hover:bg-brand-red'}`}
                      >
                        {expandedCards[index] ? 'Hide Sub-Programs' : 'Explore Full Program'}
                        <svg className={`w-5 h-5 transition-transform duration-300 ${expandedCards[index] ? 'rotate-180' : 'group-hover:translate-x-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedCards[index] ? "M5 15l7-7 7 7" : "M14 5l7 7m0 0l-7 7m7-7H3"} /></svg>
                      </button>
                    </div>

                  </div>
                </TiltCard>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
