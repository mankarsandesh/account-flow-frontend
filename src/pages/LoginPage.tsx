"use client";
import { useEffect, useState } from "react";
import Forgot from "../components/Forgot";
import Login from "../components/Login";

export default function LoginPage() {
  const [login, setLogin] = useState(true);
  // Re-run whenever the location changes
  useEffect(() => {
    window.location.search === "?forgotpassword"
      ? setLogin(false)
      : setLogin(true);
  }, [window.location.search]);

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mb-20">
          <div className="mx-auto w-full max-w-sm lg:w-96 ">
            {login ? <Login /> : <Forgot />}
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block ">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
