import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  //useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), [pathname]);
  useEffect(() => {
    const fetchData = async () => {
        const data = await fetchSomething();
        // use data here
    };

    fetchData();
}, []);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="page">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
