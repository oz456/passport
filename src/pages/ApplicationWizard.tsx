import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Save, Clock, ArrowLeft, ArrowRight, Shield } from 'lucide-react';

const steps = [
  { id: 'personal', title: 'Personal Details', time: '2 mins' },
  { id: 'family', title: 'Family Details', time: '1 min' },
  { id: 'address', title: 'Address', time: '2 mins' },
  { id: 'docs', title: 'Documents', time: '1 min' },
  { id: 'review', title: 'Review', time: '1 min' },
  { id: 'payment', title: 'Payment', time: '1 min' },
];

export default function ApplicationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  
  // Dummy logic for prototype
  const completedSections = Object.keys(formData).length; 
  const progress = Math.min(100, Math.round(((currentStep) / steps.length) * 100));

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      // Simulate saving some data
      setFormData(prev => ({ ...prev, [steps[currentStep].id]: true }));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 relative z-10">
      
      {/* Mobile progress indicator */}
      <div className="md:hidden mb-8 bg-white border-[4px] border-retro-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-2">
          <span className="font-display text-xl uppercase text-retro-black">STEP {currentStep + 1} OF {steps.length}</span>
          <span className="font-bold text-retro-pink">{progress}% DONE</span>
        </div>
        <div className="w-full h-3 bg-retro-cream border-2 border-retro-black rounded-full overflow-hidden">
          <div className="h-full bg-retro-yellow" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Main form area */}
        <div className="flex-1 w-full order-2 lg:order-1">
          <div className="mb-8">
            <span className="font-display text-2xl text-retro-black uppercase tracking-widest bg-white border-[3px] border-retro-black px-4 py-1 rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] inline-block mb-4">STEP {currentStep + 1} OF {steps.length}</span>
            <h1 className="text-5xl md:text-7xl font-display text-white text-stroke-lg uppercase mb-2 leading-none">
              {steps[currentStep].title}
            </h1>
            <p className="font-bold text-xl text-retro-black bg-white border-[4px] border-retro-black p-3 rounded-xl shadow-retro inline-block mt-4 rotate-1">Let's get this part sorted quickly!</p>
          </div>

          <div className="bg-white border-[5px] border-retro-black rounded-3xl p-6 md:p-10 shadow-retro-xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Form fields based on step - Mockup */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-display text-2xl uppercase text-retro-black mb-2">Given Name</label>
                        <input type="text" placeholder="First and Middle Name" className="w-full px-4 py-3 rounded-xl border-[4px] border-retro-black font-bold text-lg bg-retro-cream focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" />
                      </div>
                      <div>
                        <label className="block font-display text-2xl uppercase text-retro-black mb-2">Surname</label>
                        <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-xl border-[4px] border-retro-black font-bold text-lg bg-retro-cream focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-display text-2xl uppercase text-retro-black mb-2">Any other names?</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer bg-retro-cream border-[3px] border-retro-black px-4 py-2 rounded-xl hover:bg-retro-yellow transition-colors font-bold text-xl">
                          <input type="radio" name="aliases" className="w-5 h-5 accent-retro-black" /> Yes
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer bg-retro-green text-white border-[3px] border-retro-black px-4 py-2 rounded-xl transition-colors font-bold text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <input type="radio" name="aliases" defaultChecked className="w-5 h-5 accent-retro-black" /> No
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-display text-2xl uppercase text-retro-black mb-2">Employment</label>
                      <select className="w-full px-4 py-3 rounded-xl border-[4px] border-retro-black font-bold text-lg bg-retro-cream focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all appearance-none">
                        <option value="">Select employment type...</option>
                        <option value="private">Private Sector</option>
                        <option value="govt">Government</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                )}
                
                {/* Fallback for other steps */}
                {currentStep > 0 && (
                  <div className="py-12 text-center border-[4px] border-retro-black border-dashed rounded-xl bg-retro-cream">
                    <p className="font-display text-3xl uppercase text-retro-black">Form fields for "{steps[currentStep].title}"</p>
                    <p className="font-bold text-gray-500 mt-2">Interactive prototype stops here</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 pt-8 border-t-[4px] border-retro-black flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              <button 
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`font-display text-2xl uppercase flex items-center gap-2 ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-retro-black hover:text-retro-orange hover:-translate-x-1 transition-transform'}`}
              >
                <ArrowLeft className="w-6 h-6" strokeWidth={4} /> BACK
              </button>
              
              <button 
                onClick={handleNext}
                className="w-full sm:w-auto bg-retro-pink text-white font-display text-3xl uppercase border-[4px] border-retro-black px-8 py-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg transition-all flex items-center justify-center gap-3 active:translate-y-0 active:translate-x-0 active:shadow-none"
              >
                {currentStep === steps.length - 1 ? 'SUBMIT!' : 'NEXT STEP'} 
                <ArrowRight className="w-6 h-6" strokeWidth={4} />
              </button>
            </div>
          </div>
        </div>

        {/* Application Health Sidebar */}
        <div className="lg:w-96 w-full shrink-0 order-1 lg:order-2">
          <div className="sticky top-28 bg-retro-yellow border-[5px] border-retro-black rounded-3xl p-6 shadow-retro-xl rotate-1">
            <h3 className="font-display text-4xl text-retro-black mb-2 uppercase flex items-center gap-2 border-b-4 border-retro-black border-dashed pb-4">
              <Shield className="w-8 h-8 fill-retro-black text-white" strokeWidth={2} /> APP HEALTH
            </h3>
            
            <p className="font-bold text-retro-black text-lg mb-6 bg-white border-[3px] border-retro-black p-3 rounded-xl mt-4 -rotate-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              You have <span className="font-display text-2xl">~7 MINS</span> of work remaining!
            </p>
            
            <div className="space-y-4">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;
                
                return (
                  <div key={step.id} className={`flex items-center gap-4 ${isCompleted ? 'opacity-50' : 'opacity-100'} bg-white border-[3px] border-retro-black p-3 rounded-xl ${isCurrent ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1' : ''} transition-all`}>
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-8 h-8 text-retro-green" strokeWidth={3} />
                      ) : isCurrent ? (
                        <div className="w-8 h-8 rounded-full border-[4px] border-retro-black flex items-center justify-center bg-retro-pink animate-pulse">
                          <div className="w-2 h-2 bg-retro-black rounded-full"></div>
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border-[4px] border-retro-black bg-retro-cream"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className={`font-display text-2xl uppercase ${isCurrent ? 'text-retro-pink' : 'text-retro-black'}`}>
                        {step.title}
                      </div>
                    </div>
                    
                    {isCurrent && (
                      <span className="font-bold text-xs bg-retro-orange text-retro-black border-2 border-retro-black px-2 py-1 rounded uppercase rotate-3 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                        DOING
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 pt-4 border-t-4 border-retro-black border-dashed flex items-center gap-2 text-retro-black bg-white p-3 rounded-xl border-[3px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Save className="w-6 h-6" strokeWidth={3} />
              <span className="font-bold text-lg uppercase">Auto-saving!</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
