import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { InlineMath, BlockMath } from "react-katex";
import { ConceptChip } from "../components/ConceptChip";

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
        </motion.div>

        <section className="flex flex-wrap gap-4 justify-center max-w-4xl">
          <ConceptChip
            index={0}
            title={t("learnBasics.topic1.title")}
            anchor="parameterized-curves"
          />
          <ConceptChip
            index={1}
            title={t("learnBasics.topic2.title")}
            anchor="regular-curves"
          />
          <ConceptChip
            index={2}
            title={t("learnBasics.topic3.title")}
            anchor="arc-length"
          />
          <ConceptChip
            index={3}
            title={t("learnBasics.topic4.title")}
            anchor="curvatura"
          />
          <ConceptChip
            index={4}
            title={t("learnBasics.topic5.title")}
            anchor="torsion"
          />
          <ConceptChip
            index={5}
            title={t("learnBasics.topic6.title")}
            anchor="frenetFrame"
          />
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

          <div id="frenetFrame" className="scroll-mt-24">
            <h3 className="text-3xl font-semibold text-red-500 mb-4 border-l-4 border-red-500 pl-3">
              {t("learnBasics.explanations.frenetFrame.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.frenetFrame.paragraph1.1")}{" "} <InlineMath math="\alpha (s)"/>{t("learnBasics.explanations.frenetFrame.paragraph1.2")}{" "}<InlineMath math="s" /> {t("learnBasics.explanations.frenetFrame.paragraph1.3")}
            </p>
            <p className="text-gray-400 mt-3 leading-relaxed">
              <li>
                <InlineMath math="t(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph2.1")}{" "} <InlineMath math="t(s) = \alpha '(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph2.2")}
              </li>
              <li>
                <InlineMath math="n(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph3.1")}{" "} <InlineMath math="t(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph3.2")}
              </li>
              <li>
                <InlineMath math="b(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph4.1")}{" "} <InlineMath math="b(s) = t(s) \times n(s)" /> {t("learnBasics.explanations.frenetFrame.paragraph4.2")}
              </li>
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              {t("learnBasics.explanations.frenetFrame.paragraph5.1")}{" "} <InlineMath math="\{t(s), n(s), b(s)\}" /> {t("learnBasics.explanations.frenetFrame.paragraph5.2")}
            </p>
          </div>
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
