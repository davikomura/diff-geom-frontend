import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black border-t border-white/5 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-xs text-gray-600">
          © {new Date().getFullYear()} GeoSim 3D. {t("footer.developed")}{" "}
          <a
            href="https://github.com/davikomura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Davi Komura de Castro Lobato
          </a>
          . {t("footer.rights")}
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="https://github.com/davikomura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/davikomura-2099/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:davi.komura@gmail.com"
            className="text-gray-600 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};