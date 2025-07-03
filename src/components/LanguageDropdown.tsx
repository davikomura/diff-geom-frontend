import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Globe } from "lucide-react";

const languages = [
  { code: "pt", flag: "/flags/br.png" },
  { code: "en", flag: "/flags/us.png" },
  { code: "es", flag: "/flags/es.png" },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 px-4 py-2 bg-gray-800/90 hover:bg-gray-700/70 text-gray-200 rounded-md transition-all shadow-lg border border-gray-700 backdrop-blur-sm">
        <Globe className="w-5 h-5" />
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
        <Menu.Items className="absolute right-0 mt-2 w-15 origin-top-right bg-gray-800/90 border border-gray-700 divide-y divide-gray-700 rounded-md shadow-xl backdrop-blur-sm z-50">
          {languages.map(({ code, flag }) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  onClick={() => changeLanguage(code)}
                  className={`${
                    active ? "bg-gray-700/70" : ""
                  } flex items-center w-full px-4 py-2 text-sm text-gray-200 gap-2 transition-colors`}
                >
                  <img
                    src={flag}
                    className="w-6 h-6 rounded-sm"
                  />
                  {currentLanguage === code && (
                    <span className="ml-auto text-xs text-green-400">
                      •
                    </span>
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