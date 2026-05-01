"use client";

import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function VerificationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [certType, setCertType] = useState<"student" | "membership" | "centre">("student");
  
  // Form States
  const [studentName, setStudentName] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [learnerNo, setLearnerNo] = useState("");
  
  const [membershipName, setMembershipName] = useState("");
  const [membershipNo, setMembershipNo] = useState("");
  
  const [centreName, setCentreName] = useState("");
  const [centreCode, setCentreCode] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyStatus("loading");
    
    try {
      let result;
      if (certType === 'student') {
        result = await api.verifyStudent({
          name: studentName,
          regNumber: registrationNo,
          certNumber: certificateNo,
          learnerNumber: learnerNo
        });
      } else if (certType === 'membership') {
        result = await api.verifyMembership({
          name: membershipName,
          memberId: membershipNo
        });
      } else if (certType === 'centre') {
        result = await api.verifyCentre({
          name: centreName,
          centreId: centreCode
        });
      }

      // Check if we got data back (assuming the backend returns a `data` array or similar structure)
      // Usually a search endpoint returns an array of matches.
      if (result && result.data && result.data.length > 0) {
        setVerifyStatus("success");
      } else {
        setVerifyStatus("error");
      }
    } catch (err) {
      console.error("Verification error:", err);
      setVerifyStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] pt-20 flex flex-col">
      {/* Main Verification Section */}
      <section className="relative flex-grow flex items-center justify-center py-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-[40%] h-[60%] rounded-full bg-brand-blue/10 blur-[120px] animate-[pulse_8s_infinite]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[50%] rounded-full bg-brand-red/10 blur-[100px] animate-[pulse_10s_infinite_reverse]"></div>
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
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-red"></div>
              
              <form onSubmit={handleVerify} className="relative z-10 space-y-6">
                
                {/* Type Selection */}
                <div className="flex flex-wrap gap-4 mb-2">
                  <label className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${certType === 'student' ? 'bg-brand-blue/10 border-brand-blue text-brand-blue dark:text-white' : 'bg-slate-50 dark:bg-primary-900 border-slate-200 dark:border-white/10 text-slate-500'}`}>
                    <input type="radio" name="certType" value="student" className="hidden" checked={certType === 'student'} onChange={() => setCertType('student')} />
                    <span className="font-semibold text-sm">Student Certificate</span>
                  </label>
                  <label className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${certType === 'membership' ? 'bg-brand-red/10 border-brand-red text-brand-red dark:text-white' : 'bg-slate-50 dark:bg-primary-900 border-slate-200 dark:border-white/10 text-slate-500'}`}>
                    <input type="radio" name="certType" value="membership" className="hidden" checked={certType === 'membership'} onChange={() => setCertType('membership')} />
                    <span className="font-semibold text-sm">Membership Certificate</span>
                  </label>
                  <label className={`cursor-pointer px-4 py-3 rounded-xl border transition-all ${certType === 'centre' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-white' : 'bg-slate-50 dark:bg-primary-900 border-slate-200 dark:border-white/10 text-slate-500'}`}>
                    <input type="radio" name="certType" value="centre" className="hidden" checked={certType === 'centre'} onChange={() => setCertType('centre')} />
                    <span className="font-semibold text-sm">Approved Centre Certificate</span>
                  </label>
                </div>

                <div className="space-y-4">
                  {certType === 'student' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[fadeInUp_0.3s_ease-out]">
                      <input type="text" required placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all" />
                      <input type="text" required placeholder="Registration No" value={registrationNo} onChange={(e) => setRegistrationNo(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all" />
                      <input type="text" required placeholder="Certificate No" value={certificateNo} onChange={(e) => setCertificateNo(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all" />
                      <input type="text" required placeholder="Learner No" value={learnerNo} onChange={(e) => setLearnerNo(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-blue focus:outline-none transition-all" />
                    </div>
                  )}

                  {certType === 'membership' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[fadeInUp_0.3s_ease-out]">
                      <input type="text" required placeholder="Membership Name" value={membershipName} onChange={(e) => setMembershipName(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" />
                      <input type="text" required placeholder="Membership No" value={membershipNo} onChange={(e) => setMembershipNo(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-brand-red focus:outline-none transition-all" />
                    </div>
                  )}

                  {certType === 'centre' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[fadeInUp_0.3s_ease-out]">
                      <input type="text" required placeholder="Centre Name" value={centreName} onChange={(e) => setCentreName(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                      <input type="text" required placeholder="Centre Code" value={centreCode} onChange={(e) => setCentreCode(e.target.value)} className="w-full px-5 py-4 bg-slate-50 dark:bg-primary-900 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all" />
                    </div>
                  )}
                </div>
                  
                <button 
                  type="submit" 
                  disabled={verifyStatus === "loading"}
                  className="w-full px-8 py-5 bg-brand-blue text-white font-bold rounded-2xl hover:bg-brand-red transition-all shadow-[0_5px_15px_rgba(30,64,175,0.3)] hover:shadow-[0_10px_25px_rgba(212, 53, 28,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
                >
                  {verifyStatus === "loading" ? (
                    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Verify Document"
                  )}
                </button>
              </form>

              {/* Status Display Area */}
              <div className={`mt-8 overflow-hidden transition-all duration-700 ease-in-out ${verifyStatus !== "idle" && verifyStatus !== "loading" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                {verifyStatus === "success" && (
                  <div className="p-8 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-[fadeInUp_0.6s_ease-out]">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-500 animate-[pulse_2s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2 font-serif">Verified Authentic Credential</h3>
                      <div className="w-12 h-1 bg-green-500 rounded-full mb-4 mx-auto sm:mx-0"></div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {certType === 'student' && "This academic credential has been successfully authenticated against the official Central Board of Professional Development registry. The learner holds a verified qualification in excellent standing."}
                        {certType === 'membership' && "This professional membership has been successfully authenticated against the official Central Board of Professional Development registry. The individual holds an active, verified professional standing."}
                        {certType === 'centre' && "This institution has been successfully authenticated against the official Central Board of Professional Development registry. It is an approved and accredited educational centre in full compliance with CBPD academic standards."}
                      </p>
                    </div>
                  </div>
                )}
                
                {verifyStatus === "error" && (
                  <div className="p-8 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-lg transform transition-all duration-500 hover:scale-[1.02] animate-[fadeInUp_0.6s_ease-out]">
                    <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center shrink-0 shadow-inner">
                      <svg className="w-8 h-8 text-red-600 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2 font-serif">Credential Unverified</h3>
                      <div className="w-12 h-1 bg-red-500 rounded-full mb-4 mx-auto sm:mx-0"></div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {certType === 'student' && "We are unable to locate a verified academic record matching the provided details in the central registry. Please verify the learner information and registration number as printed on the official transcript."}
                        {certType === 'membership' && "We are unable to locate a verified professional membership matching the provided details in the central registry. Please verify the membership name and identification number."}
                        {certType === 'centre' && "We are unable to locate a verified accreditation record for this institution in the central registry. Please verify the centre name and unique accreditation code."}
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
