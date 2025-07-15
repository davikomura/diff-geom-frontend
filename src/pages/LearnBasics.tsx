import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";

type ConceptCardProps = {
  title: string;
  description: string;
  anchor: string;
};

const ConceptCard = ({ title, description, anchor }: ConceptCardProps) => (
  <motion.a
    href={`#${anchor}`}
    className="bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-700 hover:scale-105 transition-transform cursor-pointer block"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.a>
);

export const LearnBasics = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-gray-900 text-gray-100 scroll-smooth">
      <main className="flex-1 flex flex-col items-center justify-start px-6 py-12 space-y-16">
        <motion.div
          className="max-w-4xl text-center space-y-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            {t("learnBasics.title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            {t("learnBasics.intro")}
          </p>
          <p className="italic text-gray-500">{t("learnBasics.quote")}</p>
        </motion.div>

        <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <ConceptCard
            title={t("learnBasics.topic1.title")}
            description={t("learnBasics.topic1.desc")}
            anchor="parameterized-curves"
          />
          <ConceptCard
            title={t("learnBasics.topic2.title")}
            description={t("learnBasics.topic2.desc")}
            anchor="regular-curves"
          />
          <ConceptCard
            title={t("learnBasics.topic3.title")}
            description={t("learnBasics.topic3.desc")}
            anchor="arc-length"
          />
          <ConceptCard
            title={t("learnBasics.topic4.title")}
            description={t("learnBasics.topic4.desc")}
            anchor="curvatura"
          />
          <ConceptCard
            title={t("learnBasics.topic5.title")}
            description={t("learnBasics.topic5.desc")}
            anchor="torsion"
          />
          {/* <ConceptCard
            title={t("learnBasics.topic6.title")}
            description={t("learnBasics.topic6.desc")}
            anchor="geodesicas"
          /> */}
        </section>

        <section className="max-w-5xl space-y-28 px-4 md:px-0">
          <div id="parameterized-curves" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.parameterized_curves.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.parameterized_curves.paragraph1.1")}{" "}
              <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />
              {t(
                "learnBasics.explanations.parameterized_curves.paragraph1.2"
              )}{" "}
              <InlineMath math="I = (a, b)" />{" "}
              {t("learnBasics.explanations.parameterized_curves.paragraph1.3")}{" "}
              <InlineMath math="\mathbb{R}" />{" "}
              {t("learnBasics.explanations.parameterized_curves.paragraph1.4")}{" "}
              <InlineMath math="\mathbb{R}^3" />.
            </p>
            <hr className="my-12 border-gray-700" />
          </div>

          <div id="regular-curves" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.regular_curves.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.regular_curves.paragraph1.1")}{" "}
              <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" />{" "}
              {t("learnBasics.explanations.regular_curves.paragraph1.2")}{" "}
              <InlineMath math="\alpha ' (t) \neq 0" /> {t("learnBasics.explanations.regular_curves.paragraph1.3")}{" "} <InlineMath math="t \in I" />.
            </p>
            <hr className="my-12 border-gray-700" />
          </div>

          <div id="arc-length" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.arc_length.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.arc_length.paragraph1.1")}{" "}
              <InlineMath math="t_0 \in I" />{" "}
              {t("learnBasics.explanations.arc_length.paragraph1.2")}{" "}
              <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" /> {t("learnBasics.explanations.arc_length.paragraph1.3")}{" "} <InlineMath math="t_0" /> {t("learnBasics.explanations.arc_length.paragraph1.4")}
            </p>
            <BlockMath math="s(t) = \int_{t_0}^{t} |\alpha '(t)| dt" />
            <p className="text-gray-400 mt-3 leading-relaxed">
              {t("learnBasics.explanations.arc_length.paragraph2.1")}
            </p>
            <BlockMath math="|\alpha '(t)| = \sqrt{ (x'(t))^2 + (y'(t))^2 + (z'(t))^2 }" />
            <p className="text-gray-400 mt-3 leading-relaxed">
              {t("learnBasics.explanations.arc_length.paragraph3.1")}{" "} <InlineMath math="\alpha'(t)" /> {t("learnBasics.explanations.arc_length.paragraph3.2")}{" "} <InlineMath math="\alpha'(t) \neq 0" /> {t("learnBasics.explanations.arc_length.paragraph3.3")}{" "} <InlineMath math="s" /> {t("learnBasics.explanations.arc_length.paragraph3.4")}{" "} <InlineMath math="t" /> {t("learnBasics.explanations.arc_length.paragraph3.5")}{" "} <InlineMath math="\frac{ds}{dt} = |\alpha'(t)|" />.
            </p>
            <hr className="my-12 border-gray-700" />
          </div>

          <div id="curvatura" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.curvature.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.curvature.paragraph1.1")}{" "} <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" /> {t("learnBasics.explanations.curvature.paragraph1.2")}{" "} <InlineMath math="s \in I" /> {t("learnBasics.explanations.curvature.paragraph1.3")}{" "} <InlineMath math="|\alpha''(s)| = k(s)" /> {t("learnBasics.explanations.curvature.paragraph1.4")}{" "} <InlineMath math="\alpha" /> {t("learnBasics.explanations.curvature.paragraph1.5")}{" "} <InlineMath math="s" />.
            </p>
            <hr className="my-12 border-gray-700" />
          </div>

          <div id="torsion" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.torsion.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.torsion.paragraph1.1")}{" "} <InlineMath math="\alpha : I \rightarrow \mathbb{R}^3" /> {t("learnBasics.explanations.torsion.paragraph1.2")}{" "} <InlineMath math="s" /> {t("learnBasics.explanations.torsion.paragraph1.3")}{" "} <InlineMath math="\alpha''(s) \neq 0, s \in I" /> {t("learnBasics.explanations.torsion.paragraph1.4")}{" "} <InlineMath math="\tau(s)" /> {t("learnBasics.explanations.torsion.paragraph1.5")}{" "} <InlineMath math="b'(s) = \tau(s)n(s)" /> {t("learnBasics.explanations.torsion.paragraph1.6")}{" "} <InlineMath math="\alpha" /> {t("learnBasics.explanations.torsion.paragraph1.7")}{" "} <InlineMath math="s" />.
            </p>
            <hr className="my-12 border-gray-700" />
          </div>

          {/* <div id="geodesicas" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.geodesics.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.geodesics.paragraph1")}
            </p>
            <BlockMath math="\frac{D\dot{\gamma}}{dt} = 0" />
            <p className="text-gray-400 mt-3 leading-relaxed">
              {t("learnBasics.explanations.geodesics.paragraph2.1")}{" "}
              <InlineMath math="\frac{D}{dt}" />{" "}
              {t("learnBasics.explanations.geodesics.paragraph2.2")}
            </p>
          </div> */}
          <div id="referencias" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.references.title")}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t("learnBasics.references.items.docarmo")}</li>
              <li>{t("learnBasics.references.items.pressley")}</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearnBasics;
