import * as React from "react";
import { useTranslation } from "react-i18next";
import { DialogTitle, DialogDescription } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import type { UserLogin } from "../../types";
import { useUserAuth } from "@/context/UserAuthContext";
import { Eye, EyeOff } from "lucide-react";

const initialValue: UserLogin = {
  email: "",
  password: "",
};

type LoginProps = {
  onSwitch: any;
  onCloseDialog: () => void;
};

const LoginForm = ({ onSwitch, onCloseDialog }: LoginProps) => {
  const { t } = useTranslation();
  const { googleSignIn, logIn } = useUserAuth();
  const [userLoginInfo, setUserLoginInfo] =
    React.useState<UserLogin>(initialValue);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const userCredentials = await googleSignIn();
      navigate(`/profile/${userCredentials.user.uid}`);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredentials = await logIn(
        userLoginInfo.email,
        userLoginInfo.password
      );

      const tokenResult = await userCredentials.user.getIdTokenResult();
      const isAdmin = !!tokenResult.claims.admin;

      setUserLoginInfo(initialValue);

      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

      onCloseDialog();
    } catch (error) {
      console.error("Error creating account", error);
    }
  };

  return (
    <div>
      <DialogTitle className="text-xl text-center font-bold">
        {t("login.title")}
      </DialogTitle>
      <DialogDescription className="text-sm text-center mt-4 mb-6">
        {t("login.subtitle")}
      </DialogDescription>
      <div className="flex items-center justify-between w-full">
        <Button
          variant="outline"
          size="default"
          onClick={handleGoogleSignIn}
          className="w-full"
        >
          {t("login.googleLogin")}
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
            {t("login.email")}
          </Label>
          <Input
            id="email"
            type="email"
            value={userLoginInfo.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserLoginInfo({ ...userLoginInfo, email: e.target.value })
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <Label htmlFor="password" className="block mb-1 text-sm">
            {t("login.password")}
          </Label>
          <div className="relative items-center flex ">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              value={userLoginInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserLoginInfo({ ...userLoginInfo, password: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            />
            {/* Eye icon for toggling password visibility */}
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
        </div>
        <div className="flex w-full flex-col gap-3 mt-4">
          <div className="flex w-full">
            <Button
              type="submit"
              size="default"
              className="px-4 py-1.5 w-full bg-green hover:bg-green-hover text-white rounded"
            >
              {t("login.loginBtn")}
            </Button>
          </div>
          <p className="text-center text-sm ">
            {t("login.account")}
            <span onClick={onSwitch} className="text-link underline">
              {" "}
              {t("login.link")}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
