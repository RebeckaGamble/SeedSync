import React, { useState } from "react";
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "../ui/dialog";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { X } from "lucide-react";

interface LoginDialogProps {
  isLoginOpen: boolean;
  toggleLoginDialog: (open: boolean) => void;
}

const UserForm: React.FC<LoginDialogProps> = ({
  isLoginOpen,
  toggleLoginDialog,
}) => {
  const [isRegister, setIsRegister] = useState(false);

  const onCloseDialog = () => {
    toggleLoginDialog(false); 
  };

  return (
    <Dialog open={isLoginOpen} onOpenChange={toggleLoginDialog}>
      <DialogOverlay className="backdrop-blur-xs" />
      <DialogContent className="fixed border border-border top-1/2 sm:top-1/3 left-1/2 w-[98%] sm:w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 text-primary-foreground bg-primary py-6 px-4 rounded-lg shadow-lg">
        <DialogClose asChild className="absolute top-2 right-2">
          <X className="w-[36px] h-[36px] p-2 text-primary-foreground rounded-full hover:bg-accent" />
        </DialogClose>

        {isRegister ? (
          <RegisterForm onSwitch={() => setIsRegister(false)} />
        ) : (
          <LoginForm onCloseDialog={onCloseDialog} onSwitch={() => setIsRegister(true)} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserForm;
