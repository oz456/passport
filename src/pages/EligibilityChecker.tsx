import { useState } from 'react';
import { CheckCircle2, Circle, AlertCircle, ArrowRight, Upload, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function EligibilityChecker() {
  const [docs, setDocs] = useState({
    identity: false,
    address: false,
    photo: false,
    dob: false
  });

  const readiness = Object.values(docs).filter(Boolean).length;
  const total = Object.values(docs).length;
  const percentage = Math.round((readiness / total) * 100);

  const toggleDoc = (key: keyof typeof docs) => {
    setDocs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-20 relative z-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1 w-full">
          <div className="mb-6 md:mb-10">
            <h1 className="text-4xl md:text-6xl font-display text-white text-stroke-lg uppercase rotate-[-1deg] mb-4 md:mb-6 leading-tight">Am I ready to apply?</h1>
            <div className="bg-white border-[3px] md:border-[4px] border-retro-black p-3 md:p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro inline-block rotate-1">
              <p className="text-base md:text-xl font-bold text-retro-black leading-snug">Check off the documents you have ready. This prevents delays and ensures a smooth application process.</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div 
              className={`p-4 md:p-6 rounded-2xl border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro transition-all cursor-pointer ${docs.identity ? 'bg-retro-yellow text-retro-black translate-y-1 translate-x-1 shadow-none' : 'bg-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:hover:shadow-retro-lg hover:bg-retro-cream'}`}
              onClick={() => toggleDoc('identity')}
            >
              <div className="flex items-start justify-between">
                <div className="pr-2">
                  <h3 className={`font-display text-2xl md:text-3xl uppercase flex items-center gap-2 text-retro-black leading-none`}>
                    Identity Proof
                    <span className="group relative hidden sm:inline-block">
                      <Info className="w-4 h-4 md:w-5 md:h-5 opacity-50 hover:opacity-100" />
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 md:p-4 bg-retro-black text-white text-sm md:text-lg font-bold rounded-xl shadow-retro opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 font-primary">
                        Aadhaar card, PAN card, or Voter ID are generally accepted.
                      </div>
                    </span>
                  </h3>
                  <p className={`font-bold text-sm md:text-lg mt-1 md:mt-2 leading-tight ${docs.identity ? 'text-retro-black' : 'text-gray-600'}`}>Aadhaar / Accepted identity document</p>
                </div>
                {docs.identity ? (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-retro-black flex-shrink-0 mt-1" strokeWidth={3} />
                ) : (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-retro-black opacity-30 flex-shrink-0 mt-1" strokeWidth={3} />
                )}
              </div>
            </div>

            <div 
              className={`p-4 md:p-6 rounded-2xl border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro transition-all cursor-pointer ${docs.address ? 'bg-retro-yellow text-retro-black translate-y-1 translate-x-1 shadow-none' : 'bg-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:hover:shadow-retro-lg hover:bg-retro-cream'}`}
              onClick={() => toggleDoc('address')}
            >
              <div className="flex items-start justify-between">
                <div className="pr-2">
                  <h3 className={`font-display text-2xl md:text-3xl uppercase text-retro-black leading-none`}>Address Proof</h3>
                  <p className={`font-bold text-sm md:text-lg mt-1 md:mt-2 leading-tight ${docs.address ? 'text-retro-black' : 'text-gray-600'}`}>Proof of current residential address (Utility bill, Aadhaar, etc.)</p>
                </div>
                {docs.address ? (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-retro-black flex-shrink-0 mt-1" strokeWidth={3} />
                ) : (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-retro-black opacity-30 flex-shrink-0 mt-1" strokeWidth={3} />
                )}
              </div>
            </div>

            <div 
              className={`p-4 md:p-6 rounded-2xl border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro transition-all cursor-pointer ${docs.dob ? 'bg-retro-yellow text-retro-black translate-y-1 translate-x-1 shadow-none' : 'bg-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:hover:shadow-retro-lg hover:bg-retro-cream'}`}
              onClick={() => toggleDoc('dob')}
            >
              <div className="flex items-start justify-between">
                <div className="pr-2">
                  <h3 className={`font-display text-2xl md:text-3xl uppercase text-retro-black leading-none`}>Date of Birth Proof</h3>
                  <p className={`font-bold text-sm md:text-lg mt-1 md:mt-2 leading-tight ${docs.dob ? 'text-retro-black' : 'text-gray-600'}`}>Birth certificate or educational certificate</p>
                </div>
                {docs.dob ? (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-retro-black flex-shrink-0 mt-1" strokeWidth={3} />
                ) : (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-retro-black opacity-30 flex-shrink-0 mt-1" strokeWidth={3} />
                )}
              </div>
            </div>

            <div 
              className={`p-4 md:p-6 rounded-2xl border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro transition-all cursor-pointer ${docs.photo ? 'bg-retro-yellow text-retro-black translate-y-1 translate-x-1 shadow-none' : 'bg-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] md:hover:shadow-retro-lg hover:bg-retro-cream'}`}
              onClick={() => toggleDoc('photo')}
            >
              <div className="flex items-start justify-between">
                <div className="pr-2">
                  <h3 className={`font-display text-2xl md:text-3xl uppercase text-retro-black leading-none`}>Digital Photograph</h3>
                  <p className={`font-bold text-sm md:text-lg mt-1 md:mt-2 leading-tight ${docs.photo ? 'text-retro-black' : 'text-gray-600'}`}>Recent color passport-sized photograph</p>
                  
                  {/* Photo checking simulator hook */}
                  <div className="mt-3 md:mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
                    <button className="flex items-center gap-1 md:gap-2 bg-retro-blue text-white border-[3px] border-retro-black font-display text-lg md:text-xl uppercase px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <Upload className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} /> Check photo
                    </button>
                  </div>
                </div>
                {docs.photo ? (
                  <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-retro-black flex-shrink-0 mt-1" strokeWidth={3} />
                ) : (
                  <Circle className="w-6 h-6 md:w-8 md:h-8 text-retro-black opacity-30 flex-shrink-0 mt-1" strokeWidth={3} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Readiness panel */}
        <div className="md:w-96 w-full shrink-0">
          <div className="sticky top-28 bg-white border-[3px] md:border-[5px] border-retro-black rounded-2xl md:rounded-[2rem] shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] md:shadow-retro-xl p-5 md:p-8 overflow-hidden rotate-1 mt-4 md:mt-0">
            <h3 className="font-display text-2xl md:text-4xl text-retro-black mb-4 md:mb-8 text-center uppercase border-b-[3px] md:border-b-4 border-retro-black pb-3 md:pb-4 border-dashed">Document Readiness</h3>
            
            {/* Progress circle */}
            <div className="relative w-24 h-24 md:w-40 md:h-40 mx-auto mb-4 md:mb-8 bg-retro-cream rounded-full border-[3px] md:border-[4px] border-retro-black shadow-inner flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90 p-1 md:p-2" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className={percentage === 100 ? "text-retro-green" : "text-retro-orange"}
                  strokeDasharray={`${percentage}, 100`}
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: `${percentage}, 100` }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white m-2 md:m-3 rounded-full border-[2px] md:border-[3px] border-retro-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-2xl md:text-4xl font-display text-retro-black leading-none mt-1">{percentage}%</span>
              </div>
            </div>

            <div className="text-center mb-5 md:mb-8">
              {percentage === 100 ? (
                <div className="bg-retro-green text-white border-[3px] border-retro-black p-3 md:p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                  <h4 className="text-2xl md:text-3xl font-display uppercase mb-1">You're ready!</h4>
                  <p className="font-bold text-sm md:text-lg leading-tight">You have all the necessary documents to complete your application.</p>
                </div>
              ) : (
                <div className="bg-retro-yellow text-retro-black border-[3px] border-retro-black p-3 md:p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                  <h4 className="text-2xl md:text-3xl font-display uppercase mb-1 leading-none">You're {percentage}% ready</h4>
                  <p className="font-bold text-sm md:text-lg leading-tight mt-1">
                    You need <span className="font-display text-xl md:text-2xl px-1 md:px-2 bg-white border-2 border-retro-black rounded inline-block -rotate-3 leading-none">{total - readiness} more</span> doc{total - readiness !== 1 ? 's' : ''} before starting.
                  </p>
                </div>
              )}
            </div>

            {percentage < 100 && (
              <div className="bg-white border-[3px] border-retro-black rounded-xl p-3 md:p-4 mb-5 md:mb-8 flex gap-2 md:gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-retro-orange flex-shrink-0" strokeWidth={3} />
                <p className="text-sm md:text-lg font-bold text-retro-black leading-snug">
                  You can start now and save progress, but you'll need these documents to finish.
                </p>
              </div>
            )}

            <Link 
              to="/apply" 
              className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-xl font-display text-2xl md:text-3xl uppercase transition-all flex items-center justify-center gap-2 md:gap-3 border-[3px] md:border-[4px] border-retro-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg active:translate-y-0 active:translate-x-0 active:shadow-none ${
                percentage === 100 
                  ? 'bg-retro-pink text-white hover:bg-pink-500' 
                  : 'bg-white text-retro-black hover:bg-retro-cream'
              }`}
            >
              {percentage === 100 ? 'START APP!' : 'START ANYWAY'}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={4} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
