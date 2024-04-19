import React from "react";

export default function Email({ width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.00991821V15.5331H20V0.00991821H0ZM18 1.95032V2.40146L10 7.57553L2 2.40146V1.95032H18ZM2 13.5927V4.73382L10 9.90886L18 4.73382V13.5927H2Z"
        fill="#92989F"
      />
    </svg>
  );
}
