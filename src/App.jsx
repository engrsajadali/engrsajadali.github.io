import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Experience from './pages/Experience';

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const Contact = () => (
    <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Contact Page Coming Soon</h1>
        <p className="mt-4">Email: Sajadali.meees24@iba-Suk.edu.pk</p>
    </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/research" element={<Research />} />
             <Route path="/experience" element={<Experience />} />
             <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <p>&copy; 2025 Sajad Ali. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
