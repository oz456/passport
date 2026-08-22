import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-midnight-navy)] text-white/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-xl text-white mb-4 block">Passport Seva</span>
            <p className="text-sm">
              Ministry of External Affairs<br />
              Government of India
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/journey" className="hover:text-white transition-colors">Apply for Passport</Link></li>
              <li><Link to="/journey" className="hover:text-white transition-colors">Renew / Reissue</Link></li>
              <li><Link to="/journey" className="hover:text-white transition-colors">Police Clearance</Link></li>
              <li><Link to="/locate-psk" className="hover:text-white transition-colors">Locate PSK</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Centre</Link></li>
              <li><Link to="/grievance" className="hover:text-white transition-colors">Grievance</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Fee Calculator</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Document Advisor</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-center">
          <p>© {new Date().getFullYear()} Ministry of External Affairs, Government of India. Prototype redesigned for demonstration.</p>
        </div>
      </div>
    </footer>
  );
}
