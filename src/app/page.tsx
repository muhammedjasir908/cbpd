import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import ProcessFlow from "@/components/ProcessFlow";
import Programs from "@/components/Programs";
import GlobalRecognition from "@/components/GlobalRecognition";
import GlobalPartners from "@/components/GlobalPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <WhyChooseUs />
      <Partners />
      <ProcessFlow />
      <Programs />
      <GlobalRecognition />
      <GlobalPartners />
      {/* Education meets personality could be another section, but we've covered the main ones for the redesign demo */}
      <section className="py-24 relative overflow-hidden bg-primary-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join CBPD and Redefine Your <br />
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Earn UK-certified credentials and sharpen leadership, communication, and interview skills. Stay updated with exclusive insights as a CBPD member.
          </p>
          <button className="px-10 py-5 rounded-full bg-accent-gold text-primary-900 font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 inline-flex items-center gap-2">
            Claim Your Membership
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </button>
        </div>
      </section>
    </>
  );
}
