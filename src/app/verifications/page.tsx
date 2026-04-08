"use client";

import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerificationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [verifyInput, setVerifyInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyInput.trim()) return;
    
    setVerifyStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      // Just a mock response based on input length
      if (verifyInput.length > 5) {
        setVerifyStatus("success");
      } else {
        setVerifyStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] pt-20 flex flex-col">
      {/* Main Verification Section */}
      <section className="relative flex-grow flex items-center justify-center py-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-[40%] h-[60%] rounded-full bg-brand-blue/10 blur-[120px] animate-[pulse_8s_infinite]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[50%] rounded-full bg-accent-gold/10 blur-[100px] animate-[pulse_10s_infinite_reverse]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 border border-brand-blue/20 text-brand-blue dark:text-brand-blue mb-8 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-sm font-bold tracking-wider uppercase">Official Directory</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
              Verification <span className="text-brand-blue">Portal</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Verify the authenticity of CBPD certificates and memberships. Enter the unique ID provided on the official document to confirm its validity.
            </p>

            {/* Verification Form Card */}
            <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-accent-gold to-brand-red"></div>
              
              <form onSubmit={handleVerify} className="relative z-10">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
                    </div>
                    <input 
                      type="text" 
                      value={verifyInput}
                      onChange={(e) => setVerifyInput(e.target.value)}
                      placeholder="Enter Certificate or Membership ID (e.g. CBPD-98765)" 
                      className="w-full pl-12 pr-4 py-4 md:py-5 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all text-lg"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={verifyStatus === "loading"}
                    className="px-8 py-4 md:py-5 bg-brand-blue text-white font-bold rounded-2xl hover:bg-brand-red transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(194,151,49,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                  >
                    {verifyStatus === "loading" ? (
                      <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      "Verify Now"
                    )}
                  </button>
                </div>
              </form>

              {/* Status Display Area */}
              <div className={`mt-8 overflow-hidden transition-all duration-500 ${verifyStatus !== "idle" && verifyStatus !== "loading" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                {verifyStatus === "success" && (
                  <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-start gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-1">Authentic Record Found</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        The ID <span className="font-mono font-bold">{verifyInput}</span> matches an official CBPD document. This certification/membership is currently active and in good standing.
                      </p>
                    </div>
                  </div>
                )}
                
                {verifyStatus === "error" && (
                  <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-1">Record Not Found</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        We could not find any active record matching <span className="font-mono font-bold">{verifyInput}</span>. Please ensure you have entered the ID exactly as it appears on your document.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 text-sm text-slate-500 flex flex-col items-center justify-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                <span>Secured by CBPD Global Database</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative text-center border-t border-slate-200 dark:border-white/5 bg-white dark:bg-transparent">
        <div className="container mx-auto px-6 md:px-12 relative z-10 transition-all duration-700 transform delay-300">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-6">
            Join CBPD and Redefine Your <br className="hidden md:block"/> Professional Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Ready to earn a credential worth verifying? Explore our programs and take the next step in your career.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton strength={15}>
              <Link href="/contact" className="px-10 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-primary-900 font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3">
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
