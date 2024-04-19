import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { createAccount } from "./sanityClient";

export default function GoogleLoginHandler({ style }) {
  const navigate = useNavigate();

  const decodeJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  function onSuccessGoogle({ credential }) {
    const info = decodeJwt(credential);
    const { name, email, picture } = info;

    localStorage.setItem("account", JSON.stringify({ name, img: picture }));

    createAccount({ name, email, password: "password" }, true).then(() => {
      navigate("/");
    });

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
