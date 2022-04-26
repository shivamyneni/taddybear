import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";
import { RiBearSmileLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import TrxLogo from "../components/icons/TrxLogo";
import Opensea from "../components/icons/Opensea";
import MenuIcon from "../components/icons/MenuIcon";
const Home: NextPage = () => {
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    gsap
      .timeline()
      .to(".heading", { duration: 1, opacity: 1 })
      .to(".subheading", { duration: 1, opacity: 1 });
  }, []);

  const [scrollId, setScrollId] = useState("header");
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: `.${scrollId}` });
  }, [scrollId]);
  return (
    <div className="w-screen h-auto">
      <Head>
        <title>ThaddyBear</title>
        <meta name="description" content="Fundraising Initiative" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed xs:px-[30px] sm:px-[30px] md:px-[50px] xs:py-[20px] sm:py-[20px] md:py-[10px] bg-white w-screen shadow-md flex flex-row items-center justify-between header xs:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center self-start">
            <RiBearSmileLine
              color="white"
              size={50}
              className="bg-[#ffd727] rounded-full p-[10px] "
            />
            <p className="text-[#ffd727] font-SquarePeg font-bold  xs:text-[20px] sm:text-[20px] md:text-[25px] ml-[10px] md:flex sm:hidden xs:hidden">
              ThaddyBear
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-row items-center justify-end">
            <MenuIcon
              onClick={() => {
                setShowNavbar(!showNavbar);
              }}
            />
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden"
              onClick={() => setScrollId("about")}
            >
              About
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden"
              onClick={() => setScrollId("journey")}
            >
              Journey
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden"
              onClick={() => setScrollId("updates")}
            >
              Updates
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden"
              onClick={() => setScrollId("contactus")}
            >
              Contact Us
            </p>
          </div>
        </div>
        {showNavbar && (
          <div className="w-full h-fit z-50 md:hidden sm:flex xs:flex xs:flex-col sm:flex-col mt-[10px]">
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] "
              onClick={() => setScrollId("about")}
            >
              About
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] "
              onClick={() => setScrollId("journey")}
            >
              Journey
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] "
              onClick={() => setScrollId("updates")}
            >
              Updates
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px]  "
              onClick={() => setScrollId("contactus")}
            >
              Contact Us
            </p>
          </div>
        )}
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center  Imagebackground xs:px-[40px] sm:px-[40px] md:px-[90px] ">
        <p className="text-white font-Inter font-bold xs:text-[30px] sm:text-[30px] md:text-[50px] capitalize heading opacity-0">
          {`"no act of kindness, no matter how small is ever wasted."`}
        </p>
        {/* <p className="text-white font-SquarePeg font-bold xs:text-[30px] sm:text-[30px] md:text-[50px] self-start capitalize   subheading opacity-0">
          {`Help us bring smile on taddy's face.`}
        </p> */}
      </div>
      <div className="w-screen xs:h-auto sm:h-auto md:h-auto flex xs:flex-col sm:flex-col md:flex-row flex-wrap overflow-hidden about">
        <div className="xs:w-full sm:w-full md:w-1/2 aspect-square bg-white flex flex-col items-center justify-center px-[40px]">
          <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mt-[20px] mb-[20px] capitalize">
            {`"About Thaddy"`}
          </p>
          <p className="text-black font-Inter font-normal text-[15px] ">
            Thaddeus was diagnosed with High Risk Neuroblastoma at 7 years of
            age in Oct 2021. He is an active boy who loved school, nature,
            travelling as well as family day-out shopping and dining. He also
            enjoys swimming and has a keen interest in Taekwondo and playing the
            keyboard . Although he cannot do most of these activities now,
            Thaddeus is staying positive and indulging in other hobbies such as
            drawing and organising.
          </p>
          <br />
          <br />

          <p className="text-black font-Inter font-normal text-[15px] ">
            Thaddeus started having persistent fever episodes from Sep 2021 to
            Oct 2021. His visit to Accident & Emergency in Sep 2021 at Sengkang
            General Hospital did not diagnose his cancer. In Oct 2021, he
            started to have difficulty walking and complained of severe pain in
            his chest and lower body. He was brought to KKH Accident & Emergency
            and an X-ray showed some abnormalities. Further tests revealed that
            he had a tumor in his abdomen that traversed to the chest and that
            it had spread to his bone marrow and bones.
          </p>
          <br />

          <p className="text-black font-Inter font-normal text-[15px] ">
            Thaddeus’s life changed overnight and he had to get used to invasive
            procedures and long stays in the hospital. It was a tough time for
            him and his family as they adapted to this new lifestyle. With the
            treatment, Thaddeus’s immune system is very weak and he is not able
            to pursue his hobbies and indulge in most of his favourite
            activities. However, Thaddeus has amazed his family with his
            positivity and toughness, undergoing 2-hour long MRIs without
            general anasthesia, enduring a 13-hour long surgery, bone marrow
            aspirations, blood tests, multiple scans and countless procedures
            involving needles and tubes in his chest and down his throat.
          </p>
        </div>
        <div className="xs:w-full sm:w-full md:w-1/2 flex flex-wrap flex-row bg-white justify-end ">
          <img
            alt=""
            src="/Images/Active5.png"
            className="xs:w-full sm:w-full md:w-auto md:mt-[0px] xs:mt-[40px] sm:mt-[40px] "
          />

          <img
            alt=""
            src="/Images/Active3.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
          <img
            alt=""
            src="/Images/Active4.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
        </div>
      </div>
      <div className=" px-[40px] my-[50px]">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`"What is Neuroblastoma?"`}
        </p>
        <p className="text-black font-Inter font-normal text-[15px]  w-4/5">
          Neuroblastoma is a rare form of childhood cancer that affects less
          than 10 children in Singapore each year. It develops in the nerve
          cells and can spread to other parts of the body including the lymph
          nodes, bones, bone marrow and soft tissue. High risk Neuroblastoma is
          very difficult to treat and requires multimodal treatment that usually
          lasts more than a year. Children with High Risk Neuroblastoma have to
          go through chemotherapy, surgery, stem cell transplant, radiation
          therapy, immunotherapy and maintenance treatment.
        </p>
        <br />

        <p className="text-black font-Inter font-normal text-[15px]  w-4/5">
          Neuroblastoma develops in the nerve tissue and can spread to other
          parts of the body including the lymph nodes, bones, bone marrow and
          soft tissue. High risk neuroblastoma is very difficult to treat and
          requires multi modal treatments that last more than 18 months.
          Children with Neuroblastoma have to go through chemotherapy, surgery,
          radiation, stem cell transplant, immunotherapy and maintenance
          treatment. The side effects are extensive and rough on the children.
          In addition, children undergoing treatment are immune compromised and
          fall sick very easily.
        </p>
      </div>
      <div className="w-screen xs:h-auto sm:h-auto md:h-auto flex xs:flex-col sm:flex-col md:flex-row flex-wrap overflow-hidden journey">
        <div className="xs:w-full sm:w-full md:w-1/2 flex flex-wrap flex-row bg-white ">
          <img
            alt=""
            src="/Images/Treatment1.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
          <img
            alt=""
            src="/Images/Treatment2.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
          <img
            alt=""
            src="/Images/Treatment3.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
          <img
            alt=""
            src="/Images/Treatment4.png"
            className="xs:w-full sm:w-full md:w-auto"
          />
        </div>
        <div className="xs:w-full sm:w-full md:w-1/2 aspect-square bg-white flex flex-col items-center justify-center px-[40px]">
          <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px]  self-start  mt-[20px] mb-[20px] capitalize">
            {`"Thaddy's journey"`}
          </p>
          <p className="text-black font-Inter font-normal text-[15px] ">
            Thaddeus has completed 6 cycles of chemotherapy, tumour removal
            surgery and is undergoing a chemotherapy + immunotherapy phase which
            consists of 5 cycles.
          </p>
          <br />
          <br />

          <p className="text-black font-Inter font-normal text-[15px] ">
            Following this, the treatment will include stem cell transplant with
            high dose chemotherapy, radiation, immunotherapy and maintenance
            therapy consisting of a series of injections (vaccine) done
            overseas. The family expects treatment to last well into 2023.
          </p>
          <br />

          <p className="text-black font-Inter font-normal text-[15px]">
            Thaddeus has completed 13 hospital stays since Oct 21 and expects
            more in this year. The hospital stays range from 4 days to 14 days.
            In between hospital stays, Thaddeus will return to the hospital
            weekly for scans, tests, blood tests and blood transfusions (if
            necessary). Otherwise, he will have to rest at home and can only
            leave the house when his blood test results are good. Even then, he
            must avoid crowded places and dining out is not an option as he has
            to observe a low bacteria diet.
          </p>
        </div>
      </div>
      <div className=" px-[40px] my-[50px]">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`"How can you contribute to this cause?"`}
        </p>
        <p className="text-black font-Inter font-normal text-[15px]  w-4/5">
          You can contribute by buying nfts in our collection or you can send
          donations in Give.Asia or gogetfunding.com
        </p>
      </div>
      <div className=" px-[40px] my-[50px] updates">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`Updates`}
        </p>
        <div>
          <div className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start mb-[20px] capitalize">
            <p className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start mb-[10px] capitalize">
              A)Treatment
            </p>
            <div>
              <div className="flex-row flex h-fit mb-[20px]">
                <div className="bg-[#070707] border-[#ffd000] rounded-full border-[4px] w-[20px] h-[20px]" />
                <div>
                  <p className="text-black font-Inter font-normal xs:text-[13px] sm:text-[13px] md:text-[15px] ml-[10px]">
                    Completed 6 cycles of chemotherapy
                  </p>
                </div>
              </div>
              <div className="flex-row flex h-fit mb-[20px]">
                <div className="bg-[#070707] border-[#ffd000] rounded-full border-[4px] w-[20px] h-[20px]" />
                <div>
                  <p className="text-black font-Inter font-normal xs:text-[13px] sm:text-[13px] md:text-[15px] ml-[10px]">
                    Surgery to remove tumour
                  </p>
                </div>
              </div>
              <div className="flex-row flex h-fit mb-[20px]">
                <div className="bg-white border-[#ffd000] rounded-full border-[4px] w-[20px] h-[20px]" />
                <div>
                  <p className="text-black font-Inter font-normal xs:text-[13px] sm:text-[13px] md:text-[15px] ml-[10px]">
                    5 cycles of chemo + immunotherapy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start mb-[10px] capitalize">
              B)Funds Raised
            </p>
            <p className="text-[#e7c21d] font-Inter font-bold xs:text-[20px] sm:text-[20px] md:text-[40px] self-start mb-[10px] capitalize fund">
              $2308
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start  capitalize">
              C)Expenditure
            </p>
            <div className="flex flex-row items-center">
              <p className="text-black font-Inter font-normal xs:text-[13px] sm:text-[13px] md:text-[15px] ">
                You can check the Expenditure sheet here:
              </p>
              <a href="https://drive.google.com/drive/folders/1C26ElFmluUNtKr-4zTAiLL5B__EkYqSP">
                <DiGoogleDrive
                  color="black"
                  size={"100%"}
                  className="mr-[20px] xs:w-[25px] sm:w-[25px] md:w-[35px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto flex flex-row justify-between items-center  bg-[#e7c21d] pt-[30px] pb-[50px] xs:px-[20px] sm:px-[20px] md:px-[40px] contactus">
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
          <div className="flex items-center justify-center flex-col">
            <TrxLogo />
            <p className="font-Inter text-white xs:text-[12px] sm:text-[12px] md:text-[15px]">
              Supported by Trx Labs
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
