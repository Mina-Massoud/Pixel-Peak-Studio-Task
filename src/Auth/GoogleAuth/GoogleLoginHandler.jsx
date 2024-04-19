import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function GoogleLoginHandler({ style }) {
  
  const decodeJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  function onSuccessGoogle({ credential }) {
    return 0;
  }

  return (
    <div className="mx-auto">
      <GoogleLogin
        style={style}
        onSuccess={(res) => {
          onSuccessGoogle(res);
        }}
        onError={() => {}}
      />
    </div>
  );
}
