import React from "react";

export default function NextArrow({ width = 5, height = 8, ...props }) {
  return (
    <button {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5356 4.7071C4.9261 4.3166 4.9261 3.6834 4.5356 3.2929L1.7071 0.464467C1.4211 0.178467 0.991 0.0929072 0.6174 0.247687C0.2437 0.402467 0 0.767107 0 1.17157V6.8284C0 7.2329 0.2437 7.5975 0.6174 7.7523C0.991 7.9071 1.4211 7.8215 1.7071 7.5355L4.5356 4.7071Z"
          fill="black"
          fillOpacity="0.28"
        />
      </svg>
    </button>
  );
}
