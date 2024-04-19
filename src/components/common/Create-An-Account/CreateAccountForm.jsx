import React, { useState } from "react";
import EyeHide from "../../../Icons/EyeHide";
import Eye from "../../../Icons/Eye";
import GoogleLoginHandler from "../../../Auth/GoogleAuth/GoogleLoginHandler";

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className="poppins text-[2.5rem] font-[400]">Create Account</h1>
      <div className="mt-[2em] flex flex-col gap-4">
        <input
          className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
          placeholder="Full Name"
        />
        <input
          className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
          placeholder="Email Address"
        />
        <div className="relative">
          <input
            className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          {showPassword ? (
            <EyeHide
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute vertical-center right-[20px]"
              width={28}
              height={28}
            />
          ) : (
            <Eye
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
              className="absolute vertical-center right-[20px]"
              width={28}
              height={28}
            />
          )}
        </div>
        <button className="w-fit mx-auto bg-[#0FB3BB] px-[3.5em] mt-[1em] py-[0.5em] text-[1.4rem] text-white rounded-full">
          Sign Up
        </button>

        <div className="flex items-center mt-[1em] gap-2">
          <div className="line w-full h-[0.7px] bg-gray-400" />
          <p className="min-w-fit px-[1em]">Or Sign Up with</p>
          <div className="line w-full h-[0.7px] bg-gray-400" />
        </div>

        <GoogleLoginHandler />
      </div>
    </div>
  );
}
