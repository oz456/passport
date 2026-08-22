import { Search, ChevronRight, FileText, Calendar, IndianRupee, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { icon: FileText, name: 'Documents & Eligibility' },
  { icon: Calendar, name: 'Appointments & Locations' },
  { icon: IndianRupee, name: 'Fees & Payments' },
  { icon: HelpCircle, name: 'General Questions' }
];

export default function HelpCentre() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-midnight-navy)] mb-6">What are you trying to figure out?</h1>
        
        <div className="max-w-2xl mx-auto relative">
          <input 
            type="text" 
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="e.g. I changed my address, what documents do I need?"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[var(--color-gov-blue)] focus:ring-0 text-lg shadow-sm transition-all outline-none"
          />
          <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {!query ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 cursor-pointer transition-all text-center group">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                <cat.icon className="w-6 h-6 text-gray-600 group-hover:text-[var(--color-gov-blue)]" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[var(--color-gov-blue)] transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Search Results</h3>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[var(--color-gov-blue)]/50 transition-colors cursor-pointer group">
            <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[var(--color-gov-blue)]">Documents required for Change of Address</h4>
            <p className="text-gray-600 mb-4">If you are changing your address, you must apply for a "Reissue" of passport. You will need to submit proof of your new present address.</p>
            <div className="flex items-center text-[var(--color-gov-blue)] font-medium text-sm">
              Read full guide <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[var(--color-gov-blue)]/50 transition-colors cursor-pointer group">
            <h4 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[var(--color-gov-blue)]">Valid Address Proof Documents</h4>
            <p className="text-gray-600 mb-4">List of acceptable documents: Aadhaar card, current utility bills, bank statement, registered rent agreement, etc.</p>
            <div className="flex items-center text-[var(--color-gov-blue)] font-medium text-sm">
              View accepted documents <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
