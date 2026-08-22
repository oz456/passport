import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar authenticated={false} />
      <main className="flex-grow pt-24 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
