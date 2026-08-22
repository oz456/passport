import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Info, ExternalLink } from 'lucide-react';

const steps = [
  { id: 'submitted', label: 'Application submitted', status: 'completed', date: '12 Aug 2026' },
  { id: 'payment', label: 'Payment received', status: 'completed', date: '12 Aug 2026' },
  { id: 'appointment', label: 'Appointment completed', status: 'completed', date: '18 Aug 2026' },
  { id: 'police', label: 'Police verification', status: 'completed', date: '21 Aug 2026' },
  { id: 'review', label: 'Granting decision', status: 'active', desc: 'Your application is currently being reviewed by the Passport Office.' },
  { id: 'printing', label: 'Printing', status: 'pending' },
  { id: 'dispatch', label: 'Dispatch', status: 'pending' },
  { id: 'delivery', label: 'Delivery', status: 'pending' },
];

export default function ApplicationTracker() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-[var(--color-midnight-navy)]">Application Tracker</h1>
        <p className="mt-2 text-gray-500">File Number: <span className="font-mono font-semibold text-gray-900">HYD07122026</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Main Timeline */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
              {steps.map((step, index) => {
                const isCompleted = step.status === 'completed';
                const isActive = step.status === 'active';
                
                return (
                  <div key={step.id} className="relative flex items-start gap-6 group">
                    <div className="flex-shrink-0 z-10 bg-white pt-1">
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-green-500 bg-white" />
                      ) : isActive ? (
                        <div className="w-8 h-8 rounded-full border-4 border-yellow-400 flex items-center justify-center bg-white shadow-[0_0_0_4px_white]">
                          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-pulse"></div>
                        </div>
                      ) : (
                        <Circle className="w-8 h-8 text-gray-200 bg-white" />
                      )}
                    </div>
                    
                    <div className="flex-1 pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className={`text-lg font-bold ${isActive ? 'text-[var(--color-gov-blue)]' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                          {step.label}
                        </h3>
                        {step.date && (
                          <span className="text-sm font-medium text-gray-500">{step.date}</span>
                        )}
                      </div>
                      
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
                        >
                          <div className="flex gap-3">
                            <Info className="w-5 h-5 text-[var(--color-gov-blue)] flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Current Status</h4>
                              <p className="text-sm text-gray-700">{step.desc}</p>
                              
                              <div className="mt-4 pt-3 border-t border-blue-100">
                                <h4 className="font-semibold text-gray-900 mb-1">What happens next?</h4>
                                <p className="text-sm text-gray-600">If everything is in order, your application will move to the printing queue. No action is required from you at this time.</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Context Panel */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#0B5CAB] to-[#071A2F] rounded-2xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-bold text-lg mb-2 relative z-10">Travel-aware</h3>
            <p className="text-white/80 text-sm mb-4 relative z-10">You indicated travel plans for 15 Sept 2026.</p>
            
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm border border-white/20 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-[var(--color-saffron)]" />
                <span className="font-bold">24 days away</span>
              </div>
              <p className="text-xs text-white/90">Your application is on track. Normal processing usually completes within 7-10 days after police verification.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Applicant details</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Name</span>
                <span className="font-medium text-gray-900">Aarav Sharma</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Service</span>
                <span className="font-medium text-gray-900">Reissue (Normal)</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">PSK Location</span>
                <span className="font-medium text-gray-900">Hyderabad South</span>
              </div>
            </div>
            
            <button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-sm font-medium text-[var(--color-gov-blue)] hover:bg-blue-50 rounded-lg transition-colors">
              View full application <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
