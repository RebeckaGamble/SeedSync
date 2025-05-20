import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface FormProps {
  isFormOpen: boolean;
  toggleForm: (open: boolean) => void;
  children: any
}

const Form = ({ isFormOpen, toggleForm, children }: FormProps) => {
  return (
    <Dialog open={isFormOpen} onOpenChange={toggleForm}>
      <DialogOverlay className=" backdrop-blur-xs " />
      <DialogContent className="fixed border border-border top-1/3 left-1/2 w-[98%] sm:w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 text-primary-foreground bg-primary py-6 px-4 rounded-lg shadow-lg">
        <DialogClose asChild className="absolute top-2 right-2">
          <X className="w-[36px] h-[36px] p-2 text-primary-foreground rounded-full hover:bg-accent" />
        </DialogClose>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Form;
