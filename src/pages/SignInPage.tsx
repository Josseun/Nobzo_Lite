import { Icon } from "@iconify/react";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router";

const SignInPage = () => {
  const [getLogIn, setGetLogIn] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetLogIn({
      ...getLogIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = await login(getLogIn);
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
      }
      console.log("Logged in:", user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (storedUser) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex-center-col bg-tertiary/50 w-screen min-h-screen my-10 overflow-hidden max-lg:px-10 max-lg:my-8">
      <div className="flex-center-col">
        <div className="bg-primary size-15 flex-center rounded-xl">
          <Icon
            className="text-tertiary size-10"
            icon="material-symbols:apartment"
          />
        </div>
        <h2 className="text-3xl text-primary font-black">Nobzo Lite</h2>
        <p className="text-neutral text-lg font-medium">Admin Console Access</p>
      </div>

      <div className="my-3 p-6 w-full max-w-md flex-justify bg-white overflow-hidden shadow-lg border-neutral border-t border-t-neutral/20 rounded-2xl">
        <div className="flex flex-col">
          <h2 className="text-xl text-black font-black">Welcome back</h2>
          <p className="text-sm text-gray-500">
            Please enter your details to sign in.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5 mb-5 mt-8"
          action=""
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-sm text-secondary font-semibold"
              htmlFor="user-email"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                name="email"
                value={getLogIn.email}
                onChange={handleChange}
                className="border-2 outline-0 rounded-md border-secondary/40 w-full h-12 px-12 text-xl flex-center placeholder:text-secondary/30"
                type="email"
                placeholder="admin@nobzo.com"
              />
              <Icon
                className="size-6 absolute top-3 left-3 text-neutral"
                icon="lucide:mail"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label
                className="text-sm text-secondary font-semibold"
                htmlFor="user-password"
              >
                Password
              </label>
              <a className="text-primary font-bold text-sm" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <input
                className="border-2 rounded-md outline-0 border-secondary/40 w-full h-12 px-12 text-xl flex-center placeholder:text-secondary/30"
                value={getLogIn.password}
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="••••••••"
              />
              <Icon
                className="size-6 absolute top-3 left-3 text-neutral"
                icon="material-symbols:lock-outline-sharp"
              />
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setRememberMe(e.target.checked)}
              checked={rememberMe}
              className="peer hidden"
            />

            <span
              className="w-5 h-5 border-2 border-neutral/40 rounded
           peer-checked:bg-blue-600
           peer-checked:border-blue-600
           transition"
            ></span>

            <span>Remember this device</span>
          </label>

          <button
            className="flex-center w-full bg-primary p-3 rounded-md cursor-pointer text-white font-bold gap-1"
            type="submit"
          >
            Sign In <Icon className="size-5" icon="tabler:arrow-right" />
          </button>
        </form>

        <div className="flex-center uppercase gap-2 text-sm text-neutral/60 mb-6">
          <hr className="w-full max-w-29 " /> Or continue with
          <hr className="w-full max-w-29 " />
        </div>

        <div className="flex-center gap-5 w-full mb-5">
          <Button icon="material-icon-theme:google" title="Google" />
          <Button icon="material-symbols:domain" title="SSO" />
        </div>
      </div>

      <div className="flex-center gap-1 max-lg:text-sm text-lg">
        <span className="text-neutral">Don't have an account?</span>
        <a className="text-primary font-bold cursor-pointer">
          Contact your administrator
        </a>
      </div>

      <div className="flex-center mt-10 gap-10 text-neutral/70 font-semibold">
        <span className="cursor-pointer">Privacy Policy</span>
        <span className="cursor-pointer">Terms of Service</span>
      </div>
    </div>
  );
};

export default SignInPage;
