import { DialogDescription, DialogTitle } from "../../ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateFaqForm = () => {
  const handleCreateFaq = () => {};
  return (
    <>
      <DialogTitle className="mb-4 text-2xl">Create new FAQ</DialogTitle>
      <DialogDescription>
        <form
          action=""
          onSubmit={handleCreateFaq}
          className="flex flex-col space-y-4"
        >
          <div className="flex space-y-1 flex-col">
            <Label>Question</Label>
            <Input type="text" placeholder="Question" />
          </div>
          <div className="flex space-y-1 flex-col">
            <Label>Answer</Label>
            <Input type="text" placeholder="Answer" />
          </div>
          <Button variant="default" size="default">
            Submit
          </Button>
        </form>
      </DialogDescription>
    </>
  );
};

export default CreateFaqForm;
