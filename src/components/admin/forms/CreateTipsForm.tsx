import { DialogDescription, DialogTitle } from "../../ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateTipsForm = () => {
  const handleCreateTips = () => {};
  return (
    <>
      <DialogTitle className="mb-4 text-2xl">Create new tips</DialogTitle>
      <DialogDescription className="sr-only">
        Create new tips card
      </DialogDescription>
      <form
        action=""
        onSubmit={handleCreateTips}
        className="flex flex-col space-y-4"
      >
        <div className="flex space-y-1 flex-col">
          <Label>Title</Label>
          <Input type="text" placeholder="Card title" />
        </div>
        <div className="flex space-y-1 flex-col">
          <Label>Text</Label>
          <Input type="text" placeholder="Card text" />
        </div>
        <div className="flex space-y-1 flex-col">
          <Label>Icon</Label>
          <select
            name=""
            id=""
            className="border border-border px-2 py-1.5 rounded-md bg-primary text-primary-foreground"
          >
            <option value="sprout" className="text-slate-500">
              Sprout
            </option>
            <option value="leaf">Leaf</option>
            <option value="droplet">Droplet</option>
          </select>
        </div>
        <Button variant="default" size="default">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreateTipsForm;
