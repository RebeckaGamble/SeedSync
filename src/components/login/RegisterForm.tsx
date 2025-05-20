import * as React from "react";
import { useTranslation } from "react-i18next";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import type { CreateUserAccount } from "../types";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { inputError } from "@/styles/styles";
import { Eye, EyeOff } from "lucide-react";

const initialValue: CreateUserAccount = {
  email: "",
  password: "",
  confirmPassword: "",
};

type CreateAccountProps = {
  onSwitch: any;
};

const RegisterForm = ({ onSwitch }: CreateAccountProps) => {
  const { t } = useTranslation();
  const { googleSignIn, signUp } = useUserAuth();
  const [userInfo, setUserInfo] =
    React.useState<CreateUserAccount>(initialValue);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

  const [errors, setErrors] = React.useState<Partial<CreateUserAccount>>({});
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();

      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Error
    const newErrors: Partial<CreateUserAccount> = {};

    if (!userInfo.email.trim()) {
      newErrors.email = t("createAccount.errors.emailRequired");
    }

    if (!userInfo.password.trim()) {
      newErrors.password = t("createAccount.errors.passwordRequired");
    } else if (userInfo.password.length < 6) {
      newErrors.password = t("createAccount.errors.passwordTooShort");
    }

    if (!userInfo.confirmPassword.trim()) {
      newErrors.confirmPassword = t(
        "createAccount.errors.confirmPasswordRequired"
      );
    } else if (userInfo.password !== userInfo.confirmPassword) {
      newErrors.confirmPassword = t("createAccount.errors.passwordMismatch");
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await signUp(userInfo.email, userInfo.password);

      setUserInfo(initialValue);

      navigate("/login");
    } catch (error) {
      console.error("Error creating account");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof CreateUserAccount
  ) => {
    setUserInfo({ ...userInfo, [field]: e.target.value });

    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <div>
      <DialogTitle className="text-xl text-center font-bold">
        {t("createAccount.title")}
      </DialogTitle>
      <DialogDescription className="text-sm text-center mb-6 mt-4">
        {t("createAccount.subtitle")}
      </DialogDescription>
      <div className="flex items-center justify-between w-full">
        <Button
          variant="outline"
          size="default"
          onClick={handleGoogleSignIn}
          className="w-full"
        >
          {t("createAccount.googleSignin")}
        </Button>
      </div>
      <div className="flex items-center gap-4 text-xs uppercase text-primary-foreground py-6">
        <div className="flex-grow h-px bg-border ml-6" />
        <span className="bg-primary px-2">{t("login.or")}</span>
        <div className="flex-grow h-px bg-border mr-6" />
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email" className="block mb-1 text-sm">
            {t("createAccount.email")}
          </Label>
          <Input
            id="email"
            type="email"
            value={userInfo.email}
            onChange={(e) => handleChange(e, "email")}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && <p className={inputError}>{errors.email}</p>}
        </div>
        <div>
          <Label htmlFor="password" className="block mb-1 text-sm">
            {t("createAccount.password")}
          </Label>
          <div className="relative items-center flex ">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              value={userInfo.password}
              onChange={(e) => handleChange(e, "password")}
              className="w-full border rounded px-3 py-2"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <EyeOff className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Eye className="w-5 h-5 text-primary-foreground" />
              )}
            </button>
          </div>
          {errors.password && <p className={inputError}>{errors.password}</p>}
        </div>
        <div>
          <Label htmlFor="confirmpassword" className="block mb-1 text-sm">
            {t("createAccount.confirmPassword")}
          </Label>
          <div className="relative items-center flex ">
            <Input
              id="confirmpassword"
              type={confirmPasswordVisible ? "text" : "password"}
              value={userInfo.confirmPassword}
              onChange={(e) => handleChange(e, "confirmPassword")}
              className="w-full border rounded px-3 py-2"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? (
                <EyeOff className="w-5 h-5 text-primary-foreground" />
              ) : (
                <Eye className="w-5 h-5 text-primary-foreground" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className={inputError}>{errors.confirmPassword}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full">
            <Button
              size="default"
              type="submit"
              className="px-4 py-1.5 w-full bg-green text-white rounded"
            >
              {t("createAccount.submitBtn")}
            </Button>
          </div>
          <p className="text-center text-sm">
            {t("createAccount.account")}
            <span onClick={onSwitch} className="text-link underline">
              {" "}
              {t("createAccount.link")}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
