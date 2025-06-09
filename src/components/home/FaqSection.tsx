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
    <section className="py-16 sm:py-20 bg-primary">
      <div className="container mx-auto max-w-[90rem] px-4 2xl:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
          {t("faq.title")}
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-[90%] max-w-[800px] mx-auto "
      >
        {content.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-border">
            <AccordionTrigger className="text-lg font-medium text-start py-4 justify-between text-primary-foreground ">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-secondary-foreground pb-6 text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
