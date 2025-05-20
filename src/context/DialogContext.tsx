import React, { createContext, useState, useContext } from "react";

interface DialogContextType {
  isLoginOpen: boolean;
  setIsLoginOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType>({
  isLoginOpen: false,
  setIsLoginOpen: () => {},
});

interface DialogProviderProps {
  children: React.ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  return (
    <DialogContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
