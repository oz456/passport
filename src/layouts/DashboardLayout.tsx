import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, FileText, User, Settings, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DashboardLayout() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar authenticated={true} />
      
      <div className="flex flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32 gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden md:block">
          <nav className="space-y-4 sticky top-32">
            <Link 
              to="/dashboard" 
              className={`flex items-center gap-3 px-6 py-4 font-display text-2xl uppercase rounded-xl border-[4px] border-retro-black transition-all duration-300 ${location.pathname === '/dashboard' ? 'bg-retro-yellow text-retro-black shadow-retro scale-105' : 'bg-white text-retro-black hover:bg-retro-cream hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
            >
              <Home className="w-6 h-6" strokeWidth={3} />
              Dashboard
            </Link>
            <Link 
              to="/track" 
              className={`flex items-center gap-3 px-6 py-4 font-display text-2xl uppercase rounded-xl border-[4px] border-retro-black transition-all duration-300 ${location.pathname === '/track' ? 'bg-retro-pink text-white shadow-retro scale-105' : 'bg-white text-retro-black hover:bg-retro-cream hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
            >
              <FileText className="w-6 h-6" strokeWidth={3} />
              Tracking
            </Link>
            <Link 
              to="/settings" 
              className={`flex items-center gap-3 px-6 py-4 font-display text-2xl uppercase rounded-xl border-[4px] border-retro-black transition-all duration-300 ${location.pathname === '/settings' ? 'bg-retro-blue text-white shadow-retro scale-105' : 'bg-white text-retro-black hover:bg-retro-cream hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1'}`}
            >
              <User className="w-6 h-6" strokeWidth={3} />
              Profile
            </Link>
            
            <div className="pt-6 pb-2">
              <div className="h-[4px] w-full bg-retro-black rounded-full border-dashed"></div>
            </div>
            
            <Link 
              to="/settings" 
              className={`flex items-center gap-3 px-6 py-4 font-display text-2xl uppercase rounded-xl border-[4px] border-retro-black bg-white text-retro-black hover:bg-retro-cream hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300`}
            >
              <Settings className="w-6 h-6" strokeWidth={3} />
              Settings
            </Link>
            
            <div className="mt-8 p-6 bg-retro-orange border-[4px] border-retro-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-retro-black" strokeWidth={3} />
                <span className="font-display text-2xl text-retro-black tracking-wider">SECURE!</span>
              </div>
              <p className="font-bold text-retro-black text-lg">Your data is locked tight by the GOI.</p>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow min-w-0">
          <Outlet />
        </main>
      </div>
      
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-[4px] border-retro-black z-50 px-4 py-3 flex justify-between items-center shadow-[0_-4px_0px_0px_rgba(0,0,0,0.1)]">
        <Link to="/dashboard" className={`flex flex-col items-center gap-1 ${location.pathname === '/dashboard' ? 'text-retro-yellow' : 'text-retro-black'}`}>
          <Home className="w-6 h-6" strokeWidth={3} />
          <span className="font-display text-sm uppercase">Home</span>
        </Link>
        <Link to="/track" className={`flex flex-col items-center gap-1 ${location.pathname === '/track' ? 'text-retro-pink' : 'text-retro-black'}`}>
          <FileText className="w-6 h-6" strokeWidth={3} />
          <span className="font-display text-sm uppercase">Track</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center gap-1 ${location.pathname === '/settings' ? 'text-retro-blue' : 'text-retro-black'}`}>
          <User className="w-6 h-6" strokeWidth={3} />
          <span className="font-display text-sm uppercase">Profile</span>
        </Link>
        <Link to="/settings" className={`flex flex-col items-center gap-1 text-retro-black`}>
          <Settings className="w-6 h-6" strokeWidth={3} />
          <span className="font-display text-sm uppercase">Settings</span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
