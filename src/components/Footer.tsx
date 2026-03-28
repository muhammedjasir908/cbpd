import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-300 border-t border-primary-800">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
              <img src="https://www.cbpd.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCBPD_LOGO.7c42c792.png&w=256&q=75" alt="CBPD Logo" className="h-16 w-auto bg-white rounded p-1" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Global Recognition and Prestige. Professional association dedicated to awarding certification based on the practical application of knowledge.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Programs', 'Verify Certificate'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent-gold transition-colors text-sm font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Become a Partner', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent-gold transition-colors text-sm font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Global Education Hub, London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@cbpd.co.uk</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-16 pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2026 CBPD. All rights reserved. Registered Number: ZC015593</p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-primary-800 hover:bg-accent-gold transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-primary-800 hover:bg-accent-gold transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-primary-800 hover:bg-accent-gold transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
