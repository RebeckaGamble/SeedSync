import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onOpenChange }) => {
    const { t } = useTranslation()
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.Content className="fixed top-1/3 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 py-6 px-4 rounded-lg shadow-lg">
          <Dialog.Close asChild className="absolute top-4 right-4 ">
            <button
              type="button"
              className="px-2.5 py-0.5 hover:bg-slate-50 hover:text-slate-900 rounded-full"
            >
              X
            </button>
          </Dialog.Close>
          <Dialog.Title className="text-xl font-bold mb-2">{t("login.title")}</Dialog.Title>
          <Dialog.Description className="text-sm mb-4">
            {t("login.subtitle")}
          </Dialog.Description>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">{t("login.email")}</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 text-sm">{t("login.password")}</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="flex w-full flex-col gap-2 mt-4">
              <div className="flex gap-2 justify-end">
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-green text-white rounded"
                >
                  {t("login.loginBtn")}
                </button>
              </div>
              <p className="text-end">
              {t("login.account")}
                <span className="text-link underline"> {t("login.link")}</span>
              </p>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginModal;
