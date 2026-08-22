import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, Phone, AlertCircle } from 'lucide-react';

const grievanceTypes = [
  'My application is delayed',
  'Appointment problem',
  'Police verification issue',
  'Payment issue',
  'Passport delivery issue',
  'Something else'
];

export default function GrievanceCentre() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-midnight-navy)] mb-4">Something went wrong?</h1>
        <p className="text-lg text-gray-600">Tell us what happened and we'll help you resolve it quickly.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">What happened?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {grievanceTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${
                selectedType === type 
                  ? 'border-[var(--color-gov-blue)] bg-blue-50 text-[var(--color-gov-blue)]' 
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selectedType && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="border-t border-gray-100 pt-8"
            >
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100 mb-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">Before raising a grievance</h3>
                    <p className="text-sm text-yellow-700 mb-4">
                      {selectedType === 'My application is delayed' 
                        ? 'Normal applications typically take 30-45 days. If it has been less than 30 days, your application is still within normal processing times.' 
                        : 'Have you checked our Help Centre? Many common issues have quick solutions available.'}
                    </p>
                    
                    <button className="px-4 py-2 bg-white text-yellow-800 rounded-lg text-sm font-semibold shadow-sm hover:bg-yellow-100 transition-colors">
                      Track specific status
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-semibold text-gray-900">File Number (Optional)</label>
                <input type="text" placeholder="e.g. HYD07122026" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-gov-blue)] outline-none" />
                
                <label className="block font-semibold text-gray-900 mt-4">Provide details</label>
                <textarea rows={4} placeholder="Please describe the issue in detail..." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-gov-blue)] outline-none resize-none"></textarea>
                
                <button className="w-full py-4 bg-[var(--color-midnight-navy)] text-white font-bold rounded-xl shadow-md hover:bg-gray-800 transition-colors mt-4 flex items-center justify-center gap-2">
                  Submit Grievance <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <Phone className="w-6 h-6 text-[var(--color-gov-blue)]" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">National Call Centre</h4>
            <p className="text-gray-600 text-sm mt-1">1800-258-1800 (Toll Free)</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-[var(--color-gov-blue)]" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Live Chat Support</h4>
            <p className="text-gray-600 text-sm mt-1">Available 8 AM to 10 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
