import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";
import { useState, useEffect } from "react";
import { 
  Network, 
  TrendingUp, 
  GitBranch, 
  ChevronRight, 
  BookOpen 
} from "lucide-react";

export const LearnAdvanced = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("gauss-bonnet");

  const topics = [
    { id: "gauss-bonnet", label: t("learnAdvanced.topic1.title"), icon: Network, color: "from-purple-500 to-indigo-500" },
    { id: "geodesics", label: t("learnAdvanced.topic2.title"), icon: TrendingUp, color: "from-indigo-500 to-pink-500" },
    { id: "christoffel", label: t("learnAdvanced.topic3.title"), icon: GitBranch, color: "from-pink-500 to-rose-500" },
    { id: "references", label: t("learnBasics.references.title"), icon: BookOpen, color: "from-rose-500 to-red-500" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const topic of topics) {
        const el = document.getElementById(topic.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(topic.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[92vh] bg-black text-gray-100 px-4 md:px-8 py-12 md:py-16 relative overflow-hidden">
      {/* React 19 Native SEO Meta Tags Hoisting */}
      <title>{t("seo.learnAdvanced.title")}</title>
      <meta name="description" content={t("seo.learnAdvanced.description")} />

      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      <main className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Header Hero */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-purple-400 font-extrabold bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
            {t("header.learnAdvanced")}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none pt-2">
            {t("learnAdvanced.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("learnAdvanced.intro")}
          </p>
        </motion.div>

        {/* Outer Grid: Left Timeline Sidebar / Right Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start">
          
          {/* LEFT Sidebar - Scroll Navigation Menu */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-6 rounded-3xl backdrop-blur-md shadow-2xl">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3">
              Sumário dos Tópicos
            </h3>
            <div className="flex flex-col gap-1 relative pl-2 border-l border-white/10">
              {topics.map((topic) => {
                const IconComponent = topic.icon;
                const isSelected = activeSection === topic.id;

                return (
                  <button
                    key={topic.id}
                    onClick={() => scrollToSection(topic.id)}
                    className={`flex items-center gap-3 px-3 py-3.5 text-sm rounded-xl text-left transition-all duration-300 w-full relative cursor-pointer group ${
                      isSelected 
                        ? "text-white font-bold" 
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {/* Active highlight background */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeOutlineTabAdvanced"
                        className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-10 rounded-xl`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    
                    {/* Active side bar indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeSideBarIndAdvanced"
                        className={`absolute -left-[9px] top-4 bottom-4 w-[3px] bg-gradient-to-b ${topic.color} rounded-full`}
                      />
                    )}

                    <IconComponent className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                      isSelected ? "text-purple-400" : "text-gray-600"
                    }`} />
                    <span className="truncate">{topic.label}</span>
                    <ChevronRight className={`ml-auto w-3 h-3 transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`} />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT Section - Textbook Content Details */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. Gauss-Bonnet */}
            <section id="gauss-bonnet" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                    <Network className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnAdvanced.explanations.gauss_bonnet.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnAdvanced.explanations.gauss_bonnet.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-purple-300 font-mono">
                      <InlineMath math="M" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.gauss_bonnet.paragraph1.2")}
                  </p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-purple-300 shadow-inner">
                    <BlockMath math="\iint_{M} K \, dA = 2\pi \chi(M)" />
                  </div>

                  <p>
                    {t("learnAdvanced.explanations.gauss_bonnet.paragraph2.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-purple-300 font-mono">
                      <InlineMath math="K" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.gauss_bonnet.paragraph2.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-purple-300 font-mono">
                      <InlineMath math="\chi(M)" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.gauss_bonnet.paragraph2.3")}
                  </p>
                  
                  <p className="text-xs text-gray-500 italic">
                    Este teorema mostra que não importa como você curve ou deforme continuamente uma superfície (como uma esfera), a integral de sua curvatura total permanecerá sempre constante e vinculada ao número de furos (sua topologia)!
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Geodesics */}
            <section id="geodesics" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnAdvanced.explanations.geodesics.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnAdvanced.explanations.geodesics.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-indigo-300 font-mono">
                      <InlineMath math="\gamma(t)" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.geodesics.paragraph1.2")}
                  </p>

                  <p className="text-gray-300">{t("learnAdvanced.explanations.geodesics.paragraph2.1")}</p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-indigo-300 shadow-inner">
                    <BlockMath math="\frac{d^2 x^k}{dt^2} + \sum_{i,j} \Gamma^k_{ij} \frac{dx^i}{dt} \frac{dx^j}{dt} = 0" />
                  </div>

                  <p>
                    {t("learnAdvanced.explanations.geodesics.paragraph3.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-indigo-300 font-mono">
                      <InlineMath math="\Gamma^k_{ij}" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.geodesics.paragraph3.2")}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Christoffel & Covariant Derivative */}
            <section id="christoffel" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnAdvanced.explanations.christoffel.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnAdvanced.explanations.christoffel.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-pink-300 font-mono">
                      <InlineMath math="\Gamma^k_{ij}" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.christoffel.paragraph1.2")}
                  </p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-pink-300 shadow-inner">
                    <BlockMath math="\Gamma^k_{ij} = \frac{1}{2} \sum_{l} g^{kl} \left( \frac{\partial g_{il}}{\partial x^j} + \frac{\partial g_{jl}}{\partial x^i} - \frac{\partial g_{ij}}{\partial x^l} \right)" />
                  </div>

                  <p>
                    {t("learnAdvanced.explanations.christoffel.paragraph2.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-pink-300 font-mono">
                      <InlineMath math="v" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.christoffel.paragraph2.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-pink-300 font-mono">
                      <InlineMath math="u" />
                    </span>{" "}
                    {t("learnAdvanced.explanations.christoffel.paragraph2.3")}
                  </p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-pink-300 shadow-inner">
                    <BlockMath math="\nabla_j v^i = \frac{\partial v^i}{\partial x^j} + \sum_{k} \Gamma^i_{jk} v^k" />
                  </div>
                </div>
              </div>
            </section>

            {/* 4. References */}
            <section id="references" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.references.title")}
                  </h2>
                </div>
                
                <ul className="list-none space-y-4 text-sm text-gray-400 pl-1">
                  <li className="bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                    <span className="block font-bold text-gray-300 mb-1">Manfredo P. do Carmo</span>
                    <span className="italic">Geometria diferencial de curvas e superfícies</span>. 4. ed. Rio de Janeiro: SBM, 2010.
                  </li>
                  <li className="bg-white/[0.01] border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                    <span className="block font-bold text-gray-300 mb-1">Alfred Gray, Elsa Abbena, Simon Salamon</span>
                    <span className="italic">Modern Differential Geometry of Curves and Surfaces with Mathematica</span>. 3. ed. Boca Raton, FL: CRC Press, 2006.
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnAdvanced;
