import { useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import Home from './pages/Home';

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData) }}
      />
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <AnimatePresence mode="wait">
          <Home />
        </AnimatePresence>
      </Layout>
    </>
  );
}
