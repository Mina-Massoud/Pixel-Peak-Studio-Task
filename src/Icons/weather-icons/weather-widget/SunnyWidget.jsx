import React from "react";

export default function SunnyWidget({ width = "25", height = "25" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.97639 4.44981L5.54431 4.01596C5.11224 3.58211 4.41428 3.59324 3.99328 4.01596L3.9822 4.02709C3.55013 4.46094 3.55013 5.16177 3.9822 5.58449L4.41428 6.01834C4.84635 6.45219 5.53323 6.45219 5.96531 6.01834L5.97639 6.00722C6.40846 5.58449 6.40846 4.87254 5.97639 4.44981V4.44981ZM2.60843 11.5249H1.47839C0.869059 11.5249 0.381592 12.0144 0.381592 12.6262V12.6373C0.381592 13.2492 0.869059 13.7386 1.47839 13.7386H2.59735C3.21776 13.7498 3.70523 13.2603 3.70523 12.6484V12.6373C3.70523 12.0144 3.21776 11.5249 2.60843 11.5249ZM12.5794 0.456177H12.5683C11.9479 0.456177 11.4604 0.945647 11.4604 1.55749V2.62542C11.4604 3.23726 11.9479 3.72673 12.5572 3.72673H12.5683C13.1887 3.73785 13.6762 3.24838 13.6762 2.63655V1.55749C13.6762 0.945647 13.1887 0.456177 12.5794 0.456177V0.456177ZM21.1543 4.02709C20.7223 3.59324 20.0243 3.59324 19.5922 4.01596L19.1602 4.44981C18.7281 4.88366 18.7281 5.58449 19.1602 6.00722L19.1712 6.01834C19.6033 6.45219 20.3013 6.45219 20.7223 6.01834L21.1543 5.58449C21.5864 5.15064 21.5864 4.46094 21.1543 4.02709V4.02709ZM19.1491 20.8248L19.5812 21.2587C20.0132 21.6925 20.7112 21.6925 21.1433 21.2587C21.5753 20.8248 21.5753 20.124 21.1433 19.6901L20.7112 19.2563C20.2791 18.8224 19.5812 18.8336 19.1602 19.2563C18.717 19.7013 18.717 20.391 19.1491 20.8248ZM21.4313 12.6262V12.6373C21.4313 13.2492 21.9188 13.7386 22.5281 13.7386H23.6471C24.2564 13.7386 24.7439 13.2492 24.7439 12.6373V12.6262C24.7439 12.0144 24.2564 11.5249 23.6471 11.5249H22.5281C21.9188 11.5249 21.4313 12.0144 21.4313 12.6262ZM12.5683 5.96272C8.90119 5.96272 5.92099 8.95516 5.92099 12.6373C5.92099 16.3195 8.90119 19.3119 12.5683 19.3119C16.2354 19.3119 19.2156 16.3195 19.2156 12.6373C19.2156 8.95516 16.2354 5.96272 12.5683 5.96272ZM12.5572 24.8185H12.5683C13.1776 24.8185 13.6651 24.329 13.6651 23.7171V22.6492C13.6651 22.0374 13.1776 21.5479 12.5683 21.5479H12.5572C11.9479 21.5479 11.4604 22.0374 11.4604 22.6492V23.7171C11.4604 24.329 11.9479 24.8185 12.5572 24.8185ZM3.9822 21.2475C4.41428 21.6814 5.11224 21.6814 5.54431 21.2475L5.97639 20.8137C6.40846 20.3799 6.39738 19.679 5.97639 19.2563L5.96531 19.2452C5.53323 18.8113 4.83527 18.8113 4.4032 19.2452L3.97112 19.679C3.55013 20.124 3.55013 20.8137 3.9822 21.2475Z"
        fill="black"
        fillOpacity="0.8"
      />
    </svg>
  );
}