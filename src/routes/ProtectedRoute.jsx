import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export default function ProtectedRoute() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted && !localStorage.getItem("token")) navigate("/login");
  }, [isMounted]);

  return <Outlet />;

  return <div></div>;
}
