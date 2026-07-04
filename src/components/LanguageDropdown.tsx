import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Globe } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
  { code: "pt", flag: "/flags/br.png" },
  { code: "en", flag: "/flags/us.png" },
  { code: "es", flag: "/flags/es.png" },
  { code: "de", flag: "/flags/de.png" },
  { code: "fr", flag: "/flags/fr.png" },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    // Calcula o novo path substituindo o prefixo de idioma
    const parts = location.pathname.split('/');
    if (parts.length > 1) {
      parts[1] = lng;
      const newPath = parts.join('/');
      navigate(newPath);
    } else {
      navigate(`/${lng}`);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center justify-center p-1.5 bg-white/5 hover:bg-white/10 text-gray-300 rounded-full transition-all border border-white/5 hover:border-white/10 shadow-lg cursor-pointer">
        <Globe className="w-4 h-4" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-3 w-32 origin-top-right bg-neutral-950/95 border border-white/10 divide-y divide-white/5 rounded-2xl shadow-2xl backdrop-blur-2xl z-50 p-1 flex flex-col gap-0.5">
          {languages.map(({ code, flag }) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  onClick={() => changeLanguage(code)}
                  className={`${
                    active ? "bg-white/5 text-white font-semibold" : "text-gray-400"
                  } flex items-center w-full px-3 py-2 text-xs rounded-xl gap-2.5 transition-colors cursor-pointer`}
                >
                  <img
                    src={flag}
                    alt={code}
                    className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/10"
                  />
                  <span className="uppercase">{code}</span>
                  {currentLanguage === code && (
                    <span className="ml-auto w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                  )}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}