import { User, Mail, Phone, MapPin, Shield, Bell, Key } from 'lucide-react';

export default function ProfileSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-24 h-24 bg-[var(--color-midnight-navy)] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
          A
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-display font-bold text-gray-900">Aarav Sharma</h1>
          <p className="text-gray-500 font-medium">aarav.sharma@example.com</p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-2">
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full border border-green-200 flex items-center gap-1">
              <Shield className="w-3 h-3" /> DigiLocker Verified
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="md:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-blue-50 text-[var(--color-gov-blue)] font-semibold rounded-xl transition-colors">
            Personal Information
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
            Linked Family Members
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
            Security & Login
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
            Notifications
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
            Accessibility
          </button>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Personal Information</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <div className="relative">
                    <input type="text" defaultValue="Aarav" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 outline-none" readOnly />
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" defaultValue="Sharma" className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 outline-none" readOnly />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input type="email" defaultValue="aarav.sharma@example.com" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-700 outline-none" readOnly />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <input type="tel" defaultValue="+91 98765 43210" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-gov-blue)] outline-none" />
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button className="px-6 py-2 bg-[var(--color-midnight-navy)] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-gov-blue)]" /> Verify with DigiLocker
              </h3>
              <p className="text-sm text-gray-600 mt-1">Speed up your applications by linking your DigiLocker account.</p>
            </div>
            <button className="px-4 py-2 bg-white text-[var(--color-gov-blue)] font-bold rounded-lg shadow-sm border border-blue-200 hover:bg-gray-50 transition-colors whitespace-nowrap">
              Manage Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
