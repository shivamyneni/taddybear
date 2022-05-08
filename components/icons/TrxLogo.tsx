import * as React from "react";

const TrxLogo = (props: any) => (
  <div
    className={`xs:w-[40px] sm:w-[40px] md:w-[60px] rounded-full flex items-center justify-center aspect-square `}
  >
    <svg
      className="w-[100%] aspect-square "
      viewBox="0 0 91 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M72.0426 10.5933L65.0495 0H54.7227L65.2179 15.8991L72.0426 10.5933Z"
        fill="white"
      />
      <path
        d="M79.5071 21.9023L72.6836 27.2081L79.6767 37.8015H90.0023L79.5071 21.9023Z"
        fill="white"
      />
      <path
        d="M90 0H79.6744L62.7994 25.5636C62.0168 26.7486 60.9489 27.7217 59.6922 28.3952C58.4355 29.0687 57.0295 29.4214 55.601 29.4214C54.1725 29.4214 52.7664 29.0687 51.5097 28.3952C50.253 27.7217 49.1852 26.7486 48.4025 25.5636L47.5703 24.3009C50.1669 23.5769 52.4574 22.039 54.0993 19.9171C55.7411 17.7952 56.6462 15.2032 56.679 12.5289C56.7601 5.63855 50.9483 0 43.9982 0H0L5.53158 8.38103H16.103V37.8036H24.5565V8.38103H44.1014C46.1911 8.38103 47.9612 10.0753 47.9231 12.1449C47.9045 13.1121 47.5038 14.0335 46.8073 14.7109C46.1109 15.3883 45.1741 15.7676 44.1985 15.7675L38.0523 15.7492C37.4552 15.7472 36.8687 15.9057 36.355 16.2077C35.8414 16.5097 35.4198 16.944 35.135 17.4644C34.8503 17.9849 34.713 18.5721 34.7377 19.1637C34.7624 19.7554 34.9483 20.3293 35.2755 20.8246L41.3959 30.0966C42.9567 32.462 45.0867 34.405 47.5938 35.7505C50.1009 37.096 52.9063 37.8015 55.7571 37.8036C58.6092 37.8039 61.4165 37.0998 63.9255 35.7549C66.4345 34.41 68.5662 32.4666 70.1281 30.1003L90 0Z"
        fill="white"
      />
    </svg>
  </div>
);

export default TrxLogo;
