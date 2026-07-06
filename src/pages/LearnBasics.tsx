import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";
import { useState, useEffect } from "react";
import { 
  Compass, 
  Activity, 
  GitCommit, 
  ChevronRight, 
  RotateCw, 
  Layers, 
  BookOpen, 
  Bookmark 
} from "lucide-react";

export const LearnBasics = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("parameterized-curves");

  const topics = [
    { id: "parameterized-curves", label: t("learnBasics.topic1.title"), icon: Compass, color: "from-blue-500 to-cyan-500" },
    { id: "regular-curves", label: t("learnBasics.topic2.title"), icon: GitCommit, color: "from-cyan-500 to-teal-500" },
    { id: "arc-length", label: t("learnBasics.topic3.title"), icon: Activity, color: "from-teal-500 to-green-500" },
    { id: "curvature", label: t("learnBasics.topic4.title"), icon: RotateCw, color: "from-green-500 to-yellow-500" },
    { id: "torsion", label: t("learnBasics.topic5.title"), icon: Layers, color: "from-yellow-500 to-orange-500" },
    { id: "frenet-frame", label: t("learnBasics.topic6.title"), icon: Bookmark, color: "from-orange-500 to-red-500" },
    { id: "references", label: t("learnBasics.references.title"), icon: BookOpen, color: "from-red-500 to-pink-500" }
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
      <title>{t("seo.learnBasics.title")}</title>
      <meta name="description" content={t("seo.learnBasics.description")} />
      <meta property="og:title" content={t("seo.learnBasics.title")} />
      <meta property="og:description" content={t("seo.learnBasics.description")} />
      <meta property="og:image" content="/logo/ManifoldSim3d.png" />
      <meta property="twitter:title" content={t("seo.learnBasics.title")} />
      <meta property="twitter:description" content={t("seo.learnBasics.description")} />
      <meta property="twitter:image" content="/logo/ManifoldSim3d.png" />

      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <main className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Header Hero */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest text-orange-400 font-extrabold bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
            {t("header.learnBasics")}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none pt-2">
            {t("learnBasics.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t("learnBasics.intro")}
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
                        layoutId="activeOutlineTab"
                        className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-10 rounded-xl`}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    
                    {/* Active side bar indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeSideBarInd"
                        className={`absolute -left-[9px] top-4 bottom-4 w-[3px] bg-gradient-to-b ${topic.color} rounded-full`}
                      />
                    )}

                    <IconComponent className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                      isSelected ? "text-orange-400" : "text-gray-600"
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
            
            {/* 1. Parameterized Curves */}
            <section id="parameterized-curves" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.parameterized_curves.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.parameterized_curves.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-blue-300 font-mono">
                      <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
                    </span>{" "}
                    {t("learnBasics.explanations.parameterized_curves.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-blue-300 font-mono">
                      <InlineMath math="I = (a, b)" />
                    </span>{" "}
                    {t("learnBasics.explanations.parameterized_curves.paragraph1.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-blue-300 font-mono">
                      <InlineMath math="\mathbb{R}" />
                    </span>{" "}
                    {t("learnBasics.explanations.parameterized_curves.paragraph1.4")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-blue-300 font-mono">
                      <InlineMath math="\mathbb{R}^3" />
                    </span>.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Intuitivamente, uma curva parametrizada representa a trajetória de uma partícula no espaço tridimensional ao longo do tempo. O parâmetro \(t \in I\) atua como a variável temporal.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Regular Curves */}
            <section id="regular-curves" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white shadow-lg">
                    <GitCommit className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.regular_curves.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.regular_curves.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-teal-300 font-mono">
                      <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
                    </span>{" "}
                    {t("learnBasics.explanations.regular_curves.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-teal-300 font-mono">
                      <InlineMath math="\alpha ' (t) \neq 0" />
                    </span>{" "}
                    {t("learnBasics.explanations.regular_curves.paragraph1.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-teal-300 font-mono">
                      <InlineMath math="t \in I" />
                    </span>.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    A regularidade garante que a curva não possua "bicos", cúspides ou paradas instantâneas, permitindo que definamos vetores tangentes bem-comportados ao longo de todo o percurso.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Arc Length */}
            <section id="arc-length" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center text-white shadow-lg">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.arc_length.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.arc_length.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="t_0 \in I" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph1.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="t_0" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph1.4")}
                  </p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-green-300 shadow-inner overflow-x-auto">
                    <BlockMath math="s(t) = \int_{t_0}^{t} |\alpha '(t)| dt" />
                  </div>

                  <p>{t("learnBasics.explanations.arc_length.paragraph2.1")}</p>

                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center text-green-300 shadow-inner overflow-x-auto">
                    <BlockMath math="|\alpha '(t)| = \sqrt{ (x'(t))^2 + (y'(t))^2 + (z'(t))^2 }" />
                  </div>

                  <p>
                    {t("learnBasics.explanations.arc_length.paragraph3.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="\alpha'(t)" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph3.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="\alpha'(t) \neq 0" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph3.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="s" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph3.4")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="t" />
                    </span>{" "}
                    {t("learnBasics.explanations.arc_length.paragraph3.5")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-green-300 font-mono">
                      <InlineMath math="\frac{ds}{dt} = |\alpha'(t)|" />
                    </span>.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Curvature */}
            <section id="curvature" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-green-500 to-yellow-500 flex items-center justify-center text-white shadow-lg">
                    <RotateCw className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.curvature.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.curvature.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-yellow-300 font-mono">
                      <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
                    </span>{" "}
                    {t("learnBasics.explanations.curvature.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-yellow-300 font-mono">
                      <InlineMath math="s \in I" />
                    </span>{" "}
                    {t("learnBasics.explanations.curvature.paragraph1.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-yellow-300 font-mono">
                      <InlineMath math="|\alpha''(s)| = k(s)" />
                    </span>{" "}
                    {t("learnBasics.explanations.curvature.paragraph1.4")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-yellow-300 font-mono">
                      <InlineMath math="\alpha" />
                    </span>{" "}
                    {t("learnBasics.explanations.curvature.paragraph1.5")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-yellow-300 font-mono">
                      <InlineMath math="s" />
                    </span>.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    A curvatura mede quão acentuada é a curva localmente. Uma reta possui curvatura idêntica a zero em todos os pontos, enquanto um círculo de raio \(R\) possui curvatura constante igual a \(1/R\).
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Torsion */}
            <section id="torsion" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.torsion.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.torsion.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="s" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.3")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="\alpha''(s) \neq 0, s \in I" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.4")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="\tau(s)" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.5")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="b'(s) = \tau(s)n(s)" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.6")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="\alpha" />
                    </span>{" "}
                    {t("learnBasics.explanations.torsion.paragraph1.7")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-orange-300 font-mono">
                      <InlineMath math="s" />
                    </span>.
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    A torção descreve como a curva tende a "sair" do plano osculador em 3D. Curvas planas possuem torção nula em todos os pontos. A hélice cilíndrica é o clássico exemplo de curva com torção constante não nula.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Frenet Frame */}
            <section id="frenet-frame" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">
                    {t("learnBasics.explanations.frenetFrame.title")}
                  </h2>
                </div>
                
                <div className="pl-1 text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
                  <p>
                    {t("learnBasics.explanations.frenetFrame.paragraph1.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-red-300 font-mono">
                      <InlineMath math="\alpha (s)" />
                    </span>
                    {t("learnBasics.explanations.frenetFrame.paragraph1.2")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-red-300 font-mono">
                      <InlineMath math="s" />
                    </span>{" "}
                    {t("learnBasics.explanations.frenetFrame.paragraph1.3")}
                  </p>

                  <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 shadow-inner space-y-4 font-mono text-sm">
                    <div className="flex items-start gap-4 p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                      <span className="text-orange-400 font-bold shrink-0">Tangent (t):</span>
                      <p className="text-gray-300">
                        <InlineMath math="t(s) = \alpha '(s)" /> — indica a direção instantânea da curva.
                      </p>
                    </div>

                    <div className="flex items-start gap-4 p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                      <span className="text-red-400 font-bold shrink-0">Normal (n):</span>
                      <p className="text-gray-300">
                        <InlineMath math="n(s) = \frac{t'(s)}{|t'(s)|}" /> — vetor unitário normal principal que aponta para o centro de curvatura.
                      </p>
                    </div>

                    <div className="flex items-start gap-4 p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                      <span className="text-pink-400 font-bold shrink-0">Binormal (b):</span>
                      <p className="text-gray-300">
                        <InlineMath math="b(s) = t(s) \times n(s)" /> — vetor binormal ortogonal aos anteriores que completa a base tridimensional.
                      </p>
                    </div>
                  </div>

                  <p>
                    {t("learnBasics.explanations.frenetFrame.paragraph5.1")}{" "}
                    <span className="inline-block bg-white/5 px-2 py-0.5 rounded text-red-300 font-mono">
                      <InlineMath math="\{t(s), n(s), b(s)\}" />
                    </span>{" "}
                    {t("learnBasics.explanations.frenetFrame.paragraph5.2")}
                  </p>
                </div>
              </div>
            </section>

            {/* 7. References */}
            <section id="references" className="scroll-mt-28 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
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

export default LearnBasics;
