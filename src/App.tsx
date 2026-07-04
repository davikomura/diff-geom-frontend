import { useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { useTranslation } from 'react-i18next';

const VALID_LANGUAGES = ['pt', 'en', 'es', 'de', 'fr'];

function App() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

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

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <Header />
      <div className="flex-1 flex flex-col pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
