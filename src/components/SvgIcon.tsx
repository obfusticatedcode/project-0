import * as React from "react";

interface IconProps {
  color?: string;
  id: string;
}

const SvgIcon = ({ color = "#dd2e44", id }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.5 47.5"
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <defs>
        <clipPath id={id}>
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path={`url(#${id})`} transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          fill={color}
          d="M36 19c0-9.389-7.611-17-17-17S2 9.611 2 19s7.611 17 17 17 17-7.611 17-17"
        ></path>
      </g>
    </svg>
  );
};

export default SvgIcon;
