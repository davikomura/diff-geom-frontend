import { useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { useTranslation } from 'react-i18next';

const VALID_LANGUAGES = ['pt', 'en', 'es', 'de', 'fr'];

function App() {
  const { lang = 'pt' } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang) {
      if (VALID_LANGUAGES.includes(lang)) {
        if (i18n.language !== lang) {
          i18n.changeLanguage(lang);
        }
        document.documentElement.lang = lang;
      } else {
        // Redireciona para o idioma padrão se o prefixo for inválido
        navigate('/pt', { replace: true });
      }
    }
  }, [lang, i18n, navigate]);

  // SEO: Dynamic Canonical and Alternate (hreflang) calculation
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://manifoldsim.com';
  const pathParts = location.pathname.split('/').filter(Boolean);
  const hasLang = VALID_LANGUAGES.includes(pathParts[0]);
  const subPath = hasLang 
    ? '/' + pathParts.slice(1).join('/')
    : location.pathname;
  const cleanSubPath = subPath === '/' ? '' : subPath;
  const canonicalUrl = `${origin}/${lang}${cleanSubPath}`;
  const alternates = VALID_LANGUAGES.map((l) => ({
    lang: l,
    url: `${origin}/${l}${cleanSubPath}`
  }));
  const defaultUrl = `${origin}/pt${cleanSubPath}`;

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      {/* React 19 Native Metadata Hoisting for Alternate and Canonical Links */}
      <link rel="canonical" href={canonicalUrl} />
      {alternates.map((alt) => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />

      <Header />
      <div className="flex-1 flex flex-col pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
