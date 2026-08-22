import { Link } from 'react-router-dom';
import { Menu, Globe, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ authenticated = false }: { authenticated?: boolean }) {
  return (
    <motion.header 
      className="fixed top-4 left-4 right-4 z-50 bg-retro-cream border-[4px] border-retro-black shadow-retro rounded-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button className="p-2 -ml-2 hover:bg-retro-yellow rounded-xl border-2 border-transparent hover:border-retro-black transition-colors sm:hidden">
              <Menu className="w-6 h-6 text-retro-black font-bold" strokeWidth={3} />
            </button>
            <Link to="/" className="flex items-center gap-2 group transform transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 bg-retro-orange border-[3px] border-retro-black rounded-lg flex items-center justify-center rotate-[-10deg] group-hover:rotate-0 transition-transform">
                <span className="text-white font-display text-xl text-stroke tracking-widest">GOI</span>
              </div>
              <span className="font-display text-2xl text-retro-black mt-1">
                PASSPORT SEVA
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-6">
            <nav className="flex space-x-6 font-display text-xl">
              <Link to="/journey" className="hover:text-retro-orange hover:scale-110 transition-transform">Apply</Link>
              <Link to="/track" className="hover:text-retro-pink hover:scale-110 transition-transform">Track Status</Link>
              <Link to="/help" className="hover:text-retro-blue hover:scale-110 transition-transform">Help</Link>
            </nav>

            <div className="h-8 w-[3px] bg-retro-black rounded-full mx-2"></div>
            
            {authenticated ? (
              <div className="flex items-center gap-5">
                <button className="text-retro-black hover:text-retro-orange relative hover:scale-110 transition-transform">
                  <Bell className="w-6 h-6" strokeWidth={3} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-retro-pink rounded-full border-2 border-retro-black animate-pulse"></span>
                </button>
                <div className="w-10 h-10 rounded-full bg-retro-yellow border-[3px] border-retro-black text-retro-black flex items-center justify-center font-display text-2xl shadow-retro transform hover:-translate-y-1 transition-transform cursor-pointer">
                  A
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="font-display text-xl hover:text-retro-blue hover:scale-110 transition-transform">
                  Login
                </Link>
                <Link to="/journey" className="font-display text-xl bg-retro-yellow px-6 py-2 border-[3px] border-retro-black rounded-xl shadow-retro hover:-translate-y-1 hover:-translate-x-1 hover:shadow-retro-lg transition-all active:translate-y-0 active:translate-x-0 active:shadow-none">
                  Apply Now!
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
