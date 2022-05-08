import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";
import Opensea from "./Opensea";
import TrxLogo from "./TrxLogo";

const Footer = () => {
  return (
    <div className="w-screen h-auto flex flex-row justify-between   bg-[#e7c21d] pt-[30px] pb-[50px] xs:px-[20px] sm:px-[20px] md:px-[40px] contactus xs:flex-col sm:flex-col md:flex-row xs:items-start sm:items-start md:items-start">
      <div>
        <p className="font-Inter text-white font-bold mb-[20px] xs:text-[25px] sm:text-[25px] md:text-[40px] ">
          Contact Us
        </p>
        <div className="flex flex-row">
          <a href="https://www.facebook.com/iamthaddybear">
            <BsFacebook
              color="white"
              size={"100%"}
              className="mr-[20px] xs:w-[20px] sm:w-[20px] md:w-[30px]"
            />
          </a>
          <a href="https://www.instagram.com/iamthaddybear/?hl=en">
            <BsInstagram
              color="white"
              size={"100%"}
              className="mr-[20px] xs:w-[20px] sm:w-[20px] md:w-[30px]"
            />
          </a>
          <a href="https://twitter.com/iamthaddybear">
            <BsTwitter
              color="white"
              size={"100%"}
              className="mr-[20px] xs:w-[20px] sm:w-[20px] md:w-[30px]"
            />
          </a>
          <a href="https://drive.google.com/drive/folders/1n-N_FcnoRUlgws_A0p68z0BHdObsDllg?usp=sharing">
            <DiGoogleDrive
              color="white"
              size={"100%"}
              className="mr-[15px] xs:w-[25px] sm:w-[25px] md:w-[35px]"
            />
          </a>
          <a href="https://opensea.io/Thaddybear">
            <Opensea />
          </a>
        </div>
      </div>
      <a href="https://trxlabs.io/">
        <div className="flex items-start justify-center flex-col xs:mt-[40px] sm:mt-[40px] md:mt-[0px]">
          <TrxLogo />
          <p className="font-Inter text-white xs:text-[12px] sm:text-[12px] md:text-[15px]">
            sponsored by Trx Labs
          </p>
        </div>
      </a>
    </div>
  );
};

export default Footer;
