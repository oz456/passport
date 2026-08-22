import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JourneyAssistant() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 400);
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center py-20 px-4">
      <div className="max-w-3xl mx-auto w-full relative z-10">
        
        <div className="mb-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-retro-yellow text-retro-black border-[3px] border-retro-black shadow-retro text-lg font-bold mb-6 font-display uppercase rotate-2"
          >
            <Sparkles className="w-5 h-5 fill-retro-black" /> MAGICAL ASSISTANT
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display text-white text-stroke-lg uppercase tracking-wide -rotate-1 mb-4">
            {step === 4 ? "YOUR PATH IS SET!" : "WHAT'S THE PLAN?"}
          </h1>
        </div>

        <div className="bg-retro-cream border-[5px] border-retro-black shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] md:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] rounded-3xl p-5 md:p-12 relative overflow-hidden mx-1 md:mx-0">
          {step > 1 && step < 4 && (
            <button 
              onClick={() => setStep(prev => prev - 1)}
              className="absolute top-4 left-4 md:top-6 md:left-6 text-retro-black hover:text-retro-pink flex items-center gap-1 md:gap-2 font-display text-xl md:text-2xl uppercase tracking-wider transition-colors group z-20"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" strokeWidth={4} /> BACK
            </button>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                className="max-w-lg mx-auto mt-12 md:mt-0"
              >
                <h2 className="text-3xl md:text-4xl font-display text-retro-black mb-6 md:mb-8 text-center uppercase border-b-4 border-retro-black pb-4 border-dashed">Ever had an Indian Passport?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <button 
                    onClick={() => handleAnswer('had_passport', 'yes')}
                    className={`p-4 md:p-6 rounded-2xl text-center font-display text-3xl md:text-4xl transition-all duration-300 border-[4px] border-retro-black ${answers.had_passport === 'yes' ? 'bg-retro-pink text-white shadow-none translate-y-1 translate-x-1' : 'bg-white text-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:bg-retro-pink hover:text-white'}`}
                  >
                    YES!
                  </button>
                  <button 
                    onClick={() => handleAnswer('had_passport', 'no')}
                    className={`p-4 md:p-6 rounded-2xl text-center font-display text-3xl md:text-4xl transition-all duration-300 border-[4px] border-retro-black ${answers.had_passport === 'no' ? 'bg-retro-blue text-white shadow-none translate-y-1 translate-x-1' : 'bg-white text-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:bg-retro-blue hover:text-white'}`}
                  >
                    NOPE!
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                className="max-w-lg mx-auto mt-12 md:mt-0"
              >
                <h2 className="text-3xl md:text-4xl font-display text-retro-black mb-6 md:mb-8 text-center uppercase border-b-4 border-retro-black pb-4 border-dashed px-2">
                  {answers.had_passport === 'yes' ? "What happened to it?" : "Who is this for?"}
                </h2>
                
                <div className="flex flex-col gap-3 md:gap-4">
                  {answers.had_passport === 'yes' ? (
                    <>
                      {['It\'s expiring', 'It has expired', 'It\'s damaged', 'I lost it', 'Need to change details'].map((opt, i) => (
                        <button 
                          key={opt}
                          onClick={() => handleAnswer('reason', opt)}
                          className="p-3 md:p-4 bg-white border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] rounded-xl text-left font-bold text-lg md:text-xl hover:bg-retro-yellow hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all flex items-center justify-between group"
                        >
                          <span className="pr-2">{opt}</span>
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0" strokeWidth={3} />
                        </button>
                      ))}
                    </>
                  ) : (
                    <>
                      {['Myself (Adult)', 'My child (Under 18)', 'Senior Citizen (65+)'].map((opt, i) => (
                        <button 
                          key={opt}
                          onClick={() => handleAnswer('applicant', opt)}
                          className="p-3 md:p-4 bg-white border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] rounded-xl text-left font-bold text-lg md:text-xl hover:bg-retro-orange hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all flex items-center justify-between group"
                        >
                          <span className="pr-2">{opt}</span>
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0" strokeWidth={3} />
                        </button>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                className="max-w-lg mx-auto mt-10 md:mt-0"
              >
                <h2 className="text-4xl font-display text-retro-black mb-8 text-center uppercase border-b-4 border-retro-black pb-4 border-dashed">When do you need it?</h2>
                
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'NO RUSH', sub: 'Standard processing time', color: 'hover:bg-retro-green' },
                    { label: 'WITHIN 1 MONTH', sub: 'Normal processing is usually sufficient', color: 'hover:bg-retro-blue' },
                    { label: 'WITHIN 2 WEEKS', sub: 'Tatkaal service recommended', color: 'hover:bg-retro-yellow' },
                    { label: 'YESTERDAY!', sub: 'Urgent Tatkaal service required', color: 'hover:bg-retro-pink' }
                  ].map((opt, i) => (
                    <button 
                      key={opt.label}
                      onClick={() => handleAnswer('urgency', opt.label)}
                      className={`p-4 bg-white border-[4px] border-retro-black shadow-retro rounded-xl text-left ${opt.color} hover:text-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg transition-all flex justify-between items-center group`}
                    >
                      <div>
                        <div className="font-display text-3xl">{opt.label}</div>
                        <div className="text-sm font-bold opacity-80 mt-1">{opt.sub}</div>
                      </div>
                      <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" strokeWidth={4} />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 12, stiffness: 100 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-retro-blue border-[5px] border-retro-black rounded-[2rem] p-4 md:p-8 shadow-retro-xl text-white relative rotate-1">
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-block bg-retro-yellow text-retro-black font-display text-xl md:text-2xl px-4 md:px-6 py-1 rounded-full border-[3px] border-retro-black shadow-retro mb-6 -rotate-3">
                      <Check className="w-5 h-5 md:w-6 md:h-6 inline mr-1" strokeWidth={4} /> PERFECT MATCH!
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white text-stroke-lg uppercase px-2">
                      {answers.had_passport === 'yes' ? 'Reissue' : 'Fresh'} 
                      {answers.urgency === 'YESTERDAY!' || answers.urgency === 'WITHIN 2 WEEKS' ? ' (Tatkaal)' : ' (Normal)'}
                    </h2>
                    
                    <div className="bg-white border-[4px] border-retro-black rounded-xl p-4 md:p-6 text-retro-black shadow-retro rotate-1 mb-8 max-w-full overflow-hidden">
                      <div className="grid grid-cols-[auto_1fr] gap-x-3 md:gap-x-4 gap-y-3 font-bold text-base sm:text-lg md:text-xl items-center text-left max-w-xs mx-auto">
                        <div className="text-right pr-3 md:pr-4 border-r-[3px] border-retro-black border-dashed py-1">STEPS</div>
                        <div>6 Easy Steps</div>
                        
                        <div className="text-right pr-3 md:pr-4 border-r-[3px] border-retro-black border-dashed py-1">DOCS</div>
                        <div className="text-retro-pink">Just 3-4</div>
                        
                        <div className="text-right pr-3 md:pr-4 border-r-[3px] border-retro-black border-dashed py-1">VISIT</div>
                        <div>Yes (PSK)</div>
                        
                        <div className="text-right pr-3 md:pr-4 border-r-[3px] border-retro-black border-dashed py-1">FEE</div>
                        <div className="text-retro-green text-xl md:text-2xl">
                          {answers.urgency === 'YESTERDAY!' || answers.urgency === 'WITHIN 2 WEEKS' ? '₹3500' : '₹1500'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link to="/eligibility" className="retro-button bg-retro-yellow text-white text-stroke text-2xl rotate-1">
                        LET'S GO!
                      </Link>
                      <button onClick={reset} className="font-display text-2xl uppercase underline decoration-[3px] underline-offset-4 hover:text-retro-yellow transition-colors">
                        START OVER
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Progress indicators */}
          {step < 4 && (
            <div className="mt-12 flex justify-center gap-4">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className={`h-4 rounded-full border-2 border-retro-black transition-all duration-300 ${i === step ? 'w-16 bg-retro-pink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : i < step ? 'w-8 bg-retro-pink opacity-50' : 'w-4 bg-white'}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
