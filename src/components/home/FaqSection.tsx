import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
  const { t } = useTranslation();

  const content = t("faq.faqContent", { returnObjects: true }) as {
    id: string;
    question: string;
    answer: string;
  }[];

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-[90rem] px-4 2xl:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
          {t("faq.title")}
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-[90%] max-w-[800px] mx-auto"
      >
        {content.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-slate-300 dark:border-slate-600">
            <AccordionTrigger className="text-lg font-medium py-4 justify-between text-slate-800 dark:text-slate-100 hover:text-green dark:hover:text-green transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 dark:text-slate-100 pb-6 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
