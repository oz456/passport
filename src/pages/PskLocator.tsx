import { useState } from 'react';
import { MapPin, Search, Navigation2, Clock, Calendar, Accessibility, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const mockCenters = [
  {
    id: 1,
    name: 'Passport Seva Kendra - Rajahmundry',
    distance: '4.8 km away',
    address: 'D.No. 46-17-45, 1st Floor, Danavaipeta, Rajahmundry',
    status: 'Appointments available',
    features: ['Accessible', 'Parking available'],
    dates: ['AUG 26', 'AUG 27', 'AUG 28', 'AUG 29']
  },
  {
    id: 2,
    name: 'Post Office Passport Seva Kendra - Kakinada',
    distance: '12.3 km away',
    address: 'Head Post Office, Kakinada',
    status: 'Appointments available',
    features: ['Accessible'],
    dates: ['AUG 29', 'AUG 30', 'SEP 01']
  }
];

export default function PskLocator() {
  const [searched, setSearched] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row gap-8">
      
      {/* Search Panel */}
      <div className="w-full md:w-[400px] flex-shrink-0">
        <h1 className="text-3xl font-display font-bold text-[var(--color-midnight-navy)] mb-6">Find a Passport Seva Kendra</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSearch}>
            <div className="mb-4">
              <button 
                type="button"
                onClick={() => setSearched(true)}
                className="w-full py-3 px-4 bg-blue-50 text-[var(--color-gov-blue)] rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
              >
                <Navigation2 className="w-5 h-5" /> Use my current location
              </button>
            </div>
            
            <div className="flex items-center gap-4 my-6 text-sm text-gray-400 font-medium">
              <div className="h-px bg-gray-200 flex-1"></div>
              OR
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enter PIN code or City</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g. 533103"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-gov-blue)] focus:border-transparent outline-none"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button type="submit" className="w-full mt-4 py-3 bg-[var(--color-midnight-navy)] text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results Panel */}
      <div className="flex-1">
        <AnimatePresence>
          {!searched ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="h-full min-h-[400px] bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center p-8"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <MapPin className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Search for centers</h3>
              <p className="text-gray-500 max-w-sm">Enter your location to find the nearest Passport Seva Kendras and view their appointment availability.</p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Found 2 centers near you</h3>
              
              {mockCenters.map((center, idx) => (
                <div key={center.id} className={`bg-white rounded-2xl border transition-all overflow-hidden ${selectedCenter === center.id ? 'border-[var(--color-gov-blue)] shadow-md' : 'border-gray-200 shadow-sm hover:border-blue-300'}`}>
                  <div className="p-6 cursor-pointer flex justify-between items-start" onClick={() => setSelectedCenter(selectedCenter === center.id ? null : center.id)}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-[var(--color-gov-blue)]" />
                        <h4 className="font-bold text-lg text-gray-900">{center.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 pl-7">{center.address}</p>
                      
                      <div className="flex flex-wrap gap-4 pl-7 text-sm">
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <Navigation2 className="w-4 h-4 text-gray-400" /> {center.distance}
                        </div>
                        <div className="flex items-center gap-1.5 text-green-600 font-medium">
                          <Clock className="w-4 h-4" /> {center.status}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pl-7 mt-4">
                        {center.features.map(f => (
                          <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                            {f === 'Accessible' ? <Accessibility className="w-3 h-3" /> : <Car className="w-3 h-3" />}
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="px-4 py-2 bg-blue-50 text-[var(--color-gov-blue)] text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors">
                      {selectedCenter === center.id ? 'Hide slots' : 'View slots'}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {selectedCenter === center.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-100 bg-gray-50/50"
                      >
                        <div className="p-6 pl-13">
                          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" /> Available Dates
                          </h5>
                          
                          <div className="flex flex-wrap gap-3 mb-6">
                            {center.dates.map((date, dIdx) => (
                              <button key={date} className={`px-4 py-2 rounded-lg text-sm font-semibold border ${dIdx === 0 ? 'bg-[var(--color-gov-blue)] text-white border-[var(--color-gov-blue)]' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'}`}>
                                {date}
                              </button>
                            ))}
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                              <h6 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Morning</h6>
                              <div className="grid grid-cols-2 gap-2">
                                <button className="py-2 border border-green-200 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">09:00 AM</button>
                                <button className="py-2 border border-green-200 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">09:30 AM</button>
                                <button className="py-2 border border-green-200 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">10:00 AM</button>
                              </div>
                            </div>
                            <div>
                              <h6 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Afternoon</h6>
                              <div className="grid grid-cols-2 gap-2">
                                <button className="py-2 border border-green-200 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">02:00 PM</button>
                                <button className="py-2 border border-green-200 bg-green-50 text-green-700 rounded-md text-sm font-medium hover:bg-green-100">02:30 PM</button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-8">
                            <button className="w-full md:w-auto px-8 py-3 bg-[var(--color-midnight-navy)] text-white font-bold rounded-xl shadow-md hover:bg-gray-800 transition-colors">
                              Choose this centre →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
