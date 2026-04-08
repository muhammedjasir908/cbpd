"use client";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is CBPD Accreditation?",
      answer: "The Central Board of Professional Development (CBPD) provides global accreditation for professionals and training providers across various industries. It emphasizes practical experience, professional mastery, and academic relevance in a real-world setting."
    },
    {
      question: "How do I verify a certificate?",
      answer: "All candidates who meet our skill requirements are issued a digitally verifiable credential. You can use our secure online verification portal and input your registry number to instantly validate the authenticity of the certificate globally."
    },
    {
      question: "How long does it take to get certified?",
      answer: "CBPD provides a highly streamlined and efficient path. Because our programs are designed to deliver in-depth subject mastery within a short time frame, the duration varies by discipline but is generally much faster than traditional academic routes."
    },
    {
      question: "Are the training programs available online?",
      answer: "Yes, 'Best Online Learning' is one of our golden principles. We collaborate with learning partners to offer high-quality online modules, ensuring you can learn at your own pace from anywhere in the world."
    },
    {
      question: "How can my institution become a CBPD Partner?",
      answer: "Educational institutions and training providers must meet our minimum eligibility criteria. The process involves an initial application, capability assessment, and infrastructure review before being authorized to conduct our proctored assessments."
    },
    {
      question: "What disciplines do you cover?",
      answer: "We offer comprehensive programs across multiple fields including Technology and Data, Education and Training, Language and Creative Arts, Health and Safety, and Business and Management."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-accent-gold font-semibold tracking-wide text-sm uppercase">Support Hub</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Frequently Asked <br/>
            <span className="text-brand-red">Questions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Find quick answers to common questions about our accreditation process, verification, and partnership opportunities.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="bg-white dark:bg-primary-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_5px_40px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 transition-all duration-300">
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index} 
                      className={`border border-slate-100 dark:border-primary-800 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-slate-50 dark:bg-primary-800/50 shadow-sm border-brand-blue/30 dark:border-brand-red/30' : 'bg-white dark:bg-primary-900 hover:border-brand-blue/20 dark:hover:border-primary-700'}`}
                    >
                      <button 
                        className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between gap-4 focus:outline-none"
                        onClick={() => handleToggle(index)}
                      >
                        <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-brand-blue dark:text-brand-red' : 'text-slate-800 dark:text-white'}`}>
                          {faq.question}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-red text-white rotate-180 shadow-md' : 'bg-slate-100 dark:bg-primary-800 text-slate-500 dark:text-slate-400'}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </button>
                      
                      <div 
                        className="transition-all duration-500 ease-in-out" 
                        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0, overflow: 'hidden' }}
                      >
                        <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                          <div className="w-full h-px bg-slate-200 dark:bg-primary-700 mb-6"></div>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">Still have questions? Tell us about it.</p>
            <a href="/contact" className="inline-flex px-8 py-4 rounded-full bg-brand-blue text-white font-bold hover:bg-brand-red transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(194,151,49,0.4)] items-center gap-2 group">
              Contact Support
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
