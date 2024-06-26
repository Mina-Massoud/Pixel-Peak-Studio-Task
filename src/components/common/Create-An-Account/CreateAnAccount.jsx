import React from "react";
import Clouds from "../../../assets/Cloud-Img.png";
import DownList from "../../../Icons/DownList";
import CreateAccountForm from "./CreateAccountForm";
import { motion } from "framer-motion";
export default function CreateAnAccount() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-grow flex"
    >
      <div className="left-side hidden lg:block h-[100vh] max-h-[100vh] gradient-bg fixed w-[50%] py-[4em]">
        <h1 className="text-center text-[2.5rem] px-[4em] font-bold">
          Join to our community
        </h1>
        <p className="text-[1.7rem] my-[1.5em] px-[4em]">
          “Sunshine is delicious, rain is refreshing, wind braces up, snow is
          exhilarating; there is no such thing as bad weather, only different
          kinds of good weather.”
        </p>
        <img src={Clouds} className="object-contain relative left-0" alt="" />
      </div>
      <div className="right-side flex flex-col gap-[2em] lg:ml-[50%] p-[4em] w-full lg:w-[50%]">
        <div className="flex items-center gap-3 w-fit ml-auto">
          <p className="text-[#00000080] font-semibold">English (U.K)</p>
          <DownList />
        </div>
        <CreateAccountForm />
      </div>
    </motion.div>
  );
}
