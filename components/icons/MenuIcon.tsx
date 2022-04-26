import * as React from "react";

const MenuIcon = (props: any) => (
  <div
    className={`xs:w-[50px] sm:w-[50px] md:w-[80px] rounded-full flex items-center justify-center aspect-square bg-white md:hidden xs:flex sm:flex`}
  >
    <svg
      className="w-[50%] aspect-square flex items-center justify-center  "
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="15%" y="25%" className="w-3/4" height={8} fill="#ffd727" />
      <rect x="15%" y="45%" className="w-3/4" height={8} fill="#ffd727" />
      <rect x="15%" y="65%" className="w-3/4" height={8} fill="#ffd727" />
    </svg>
  </div>
);

export default MenuIcon;
