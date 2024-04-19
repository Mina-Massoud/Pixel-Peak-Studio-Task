import React, { useState } from "react";
import EyeHide from "../../../Icons/EyeHide";
import Eye from "../../../Icons/Eye";
import GoogleLoginHandler from "../../../Auth/GoogleAuth/GoogleLoginHandler";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createAccount } from "../../../Auth/GoogleAuth/sanityClient";

import { useNavigate } from "react-router-dom";
import Facebook from "../../../Icons/Facebook";
import Instgram from "../../../Icons/Instgram";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function CreateAccountForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await createAccount(values);
        const date = { name: response.name, img: "" };

        localStorage.setItem("account", JSON.stringify(date));
        navigate("/", { replace: true });
        setSubmitting(false);
      } catch (error) {
        console.error("Error sending data to Sanity:", error);
        formik.setFieldError("email", "Account already exists");
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <h1 className="poppins text-[2.5rem] font-[400]">Create Account</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-[2em] flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
          placeholder="Email Address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
          placeholder="Full Name"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full bg-[#FCF7E8] p-5 rounded-[20px]"
            placeholder="Password"
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
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}

        <button
          type="submit"
          className="w-fit mx-auto bg-[#0FB3BB] px-[3.5em] mt-[1em] py-[0.5em] text-[1.4rem] text-white rounded-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="flex items-center mt-[1em] gap-2">
          <div className="line w-full h-[0.7px] bg-gray-400" />
          <p className="min-w-fit px-[1em]">Or Sign Up with</p>
          <div className="line w-full h-[0.7px] bg-gray-400" />
        </div>

        <div className="flex w-fit flex-col md:flex-row justify-center mx-auto gap-4 items-center">
          <GoogleLoginHandler />
          <div className="flex gap-[1em] items-center">
            {" "}
            <Facebook width={30} height={30} />
            <Instgram width={30} height={30} />
          </div>
        </div>
      </form>
    </div>
  );
}
