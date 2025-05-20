import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import CreateFaqForm from "../forms/CreateFaqForm";
import Form from "../forms/Form";
import { useState } from "react";

const HandleFaq = () => {
  const { t } = useTranslation();

  const faqs = t("faq.faqContent", { returnObjects: true }) as Array<any>;
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="flex flex-col pb-10">
      <h3 className="text-2xl py-10">Current FAQs</h3>
      <div className="flex flex-row gap-4 mb-6 items-center">
        Add new faq:
        <Button onClick={toggleForm} variant="default" size="sm">
          Create new
        </Button>
      </div>
      <Form isFormOpen={isFormOpen} toggleForm={toggleForm}>
        <CreateFaqForm />
      </Form>
      {/* Current FAQs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {faqs.map((faq: any) => (
          <form
            action=""
            key={faq.id}
            className="flex flex-col w-full max-w-[540px] space-y-4 rounded-md bg-primary text-primary-foreground border border-border p-4 shadow-sm"
          >
            <p>Card: {faq.id}</p>
            <div className="flex flex-col space-y-2">
              <Label>Current question</Label>
              <Input placeholder={faq.question} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Current answer</Label>
              <Input placeholder={faq.answer} />
            </div>

            <div className="flex flex-row justify-end space-x-4 w-full ">
              <Button variant="edit" size={"sm"}>
                Edit
              </Button>
              <Button variant="danger" size={"sm"}>
                Delete
              </Button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default HandleFaq;
