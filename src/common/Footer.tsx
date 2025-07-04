import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-black/90 border-t border-gray-800 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} GeoSim 3D. {t("footer.developed")}{" "}
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition"
          >
            Davi Komura de Castro Lobato
          </a>
          .
        </div>

        <div className="flex gap-6 justify-center md:justify-end">
          <a
            href="https://github.com/davikomura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/davikomura-2099/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:davi.komura@gmail.com"
            className="hover:text-white transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};