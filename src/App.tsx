import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Laboratorio from './pages/Laboratorio';
import Metodologia from './pages/Metodologia';
import Recursos from './pages/Recursos';
import Blog from './pages/Blog';

function AnimatedRoutes({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) {
  const location = useLocation();

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <AnimatePresence mode="wait">
        <Routes location={location} {...({ key: location.pathname } as any)}>
          <Route path="/" element={<Home />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const seoData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "adan_cb90 IA Disruptiva",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    "@id": "",
    "url": window.location.href,
    "telephone": "+34000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Digital Nomad",
      "postalCode": "",
      "addressCountry": "ES"
    }
  }), []);

  return (
    <BrowserRouter>
      <script type="application/ld+json">
        {JSON.stringify(seoData)}
      </script>
      <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
    </BrowserRouter>
  );
}
