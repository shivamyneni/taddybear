import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { DiGoogleDrive } from "react-icons/di";
import { useEffect } from "react";
const Home: NextPage = () => {
  useEffect(() => {
    gsap
      .timeline()
      .to(".heading", { duration: 1, opacity: 1 })
      .to(".subheading", { duration: 1, opacity: 1 });
  }, []);
  return (
    <div className="w-screen h-auto">
      <Head>
        <title>ThaddyBear</title>
        <meta name="description" content="Fundraising Initiative" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="fixed xs:px-[40px] sm:px-[40px] md:px-[90px] xs:py-[20px] sm:py-[20px] md:py-[50px]">
        <RiBearSmileLine
          color="white"
          size={60}
          className="bg-[#c49a11ba] rounded-full p-[15px] "
        />
      </div> */}
      <div className="w-screen h-screen flex flex-col items-center justify-center  Imagebackground xs:px-[40px] sm:px-[40px] md:px-[90px] ">
        <p className="text-white font-Inter font-bold xs:text-[30px] sm:text-[30px] md:text-[50px] capitalize heading opacity-0">
          {`"no act of kindness, no matter how small is ever wasted."`}
        </p>
        {/* <p className="text-white font-SquarePeg font-bold xs:text-[30px] sm:text-[30px] md:text-[50px] self-start capitalize   subheading opacity-0">
          {`Help us bring smile on taddy's face.`}
        </p> */}
      </div>
      <div className="w-screen xs:h-auto sm:h-auto md:h-screen flex xs:flex-col sm:flex-col md:flex-row flex-wrap overflow-hidden">
        <div className="xs:w-full sm:w-full md:w-1/2 aspect-square bg-white flex flex-col items-center justify-center px-[40px]">
          <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mt-[20px] mb-[20px] capitalize">
            {`"About Thaddy"`}
          </p>
          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            Thaddeus Luke Thomas was diagnosed with High Risk Neuroblastoma at 7
            years of age in Oct 21. Before his diagnosis, Thaddeus was an active
            boy who loved school, nature, travelling as well as family day-out
            shopping and dining. He also enjoyed swimming and had a keen
            interest in Taekwondo and keyboard . Thaddeus lists playing in the
            snow and eating ramen as his all-time favourite activities.
          </p>
          <br />
          <br />

          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            In Oct 21, Thaddeus had a prolonged bout of fever and complained of
            pain in his legs and buttocks. Abnormal X-rays led to more
            investigations that finally revealed that the Neuroblastoma had
            spread to his bone marrow, chest, shoulders, legs and skull. The
            tumour also grown out from his chest and compressed his diaphragm
            and adrenal gland.
          </p>
          <br />

          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            Thaddeus’s life changed overnight and he had to get used to invasive
            procedures and long stays in the hospital. It was a tough time for
            him and his family as they adapted to this new lifestyle. With the
            treatment, Thaddeus’s immune system is very low and he is not able
            to pursue his hobbies and indulge in most of his favourite
            activities. However, Thaddeus has amazed his family with his
            positivity and toughness, undergoing 2-hour long MRIs without
            general anasthesia, enduring a 13-hour long surgery and countless
            procedures involving needles and tubes in his chest and down his
            throat.
          </p>
        </div>
        <div className="xs:w-full sm:w-full md:w-1/2 flex flex-wrap flex-row bg-white justify-end ">
          <img
            alt=""
            src="/Images/Active5.png"
            className="xs:w-full sm:w-full md:w-auto md:mt-[0px] xs:mt-[40px] sm:mt-[40px] "
          />
          {/* <img
            alt=""
            src="/Images/Active2.png"
            className="xs:w-full sm:w-full md:w-auto "
          /> */}
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
        <p className="text-black font-Inter font-normal text-[15px] capitalize w-4/5">
          Neuroblastoma is a rare form of childhood cancer that affects less
          than 10 children in Singapore each year. It develops in the nerve
          tissue and can spread to other parts of the body including the lymph
          nodes, bones, bone marrow and soft tissue. High risk neuroblastoma is
          very difficult to treat and requires multi modal treatment that last
          anywhere between 1 to 3 years. Children with Neuroblastoma have to go
          through chemotherapy, surgery, radiation, stem cell transplant,
          immunotherapy and maintenance treatment. There is also a high
          probability of relapse, which will require even more treatment.
        </p>
      </div>
      <div className="w-screen xs:h-auto sm:h-auto md:h-screen flex xs:flex-col sm:flex-col md:flex-row flex-wrap overflow-hidden">
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
          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            Thaddeus has completed 6 cycles of chemotherapy, tumour removal
            surgery and is undergoing a chemotherapy + immunotherapy phase which
            consists of 5 cycles.
          </p>
          <br />
          <br />

          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            Following this, the treatment will include stem cell transplant with
            high dose chemotherapy, radiation, immunotherapy and maintenance
            therapy consisting of a series of injections (vaccine) done
            overseas. The family expects treatment to last well into 2023.
          </p>
          <br />

          <p className="text-black font-Inter font-normal text-[15px] capitalize">
            Thaddeus has completed XX hospital stays and expects XX more in this
            year. The hospital stays range from 4 days to 14 days. In between
            hospital stays, Thaddeus will return to the hospital weekly for
            scans, tests, blood tests and blood transfusions (if necessary).
            Otherwise, he will have to rest at home and can only leave the house
            when his blood test results are good. Even then, he must avoid
            crowded places and dining out is not an option as he has to observe
            a low bacteria diet.
          </p>
        </div>
      </div>
      <div className=" px-[40px] my-[50px]">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`"How can you contribute to this cause?"`}
        </p>
        <p className="text-black font-Inter font-normal text-[15px] capitalize w-4/5">
          You can contribute by buying nfts in our collection or you can send
          donations in Give.Asia or gogetfunding.com
        </p>
      </div>
      <div className=" px-[40px] my-[50px]">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`Updates`}
        </p>
        <ol type="A">
          <li className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[25px] self-start mb-[20px] capitalize">
            Treatment
          </li>
          <li className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[25px] self-start mb-[20px] capitalize">
            Funds Raised
          </li>
          <li className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[25px] self-start mb-[20px] capitalize">
            Expenditure
          </li>
        </ol>
      </div>
      <div className="w-screen h-auto flex flex-col bg-[#c49a11ba] pt-[50px] pb-[100px]  px-[40px]">
        <p className="font-Inter text-white font-bold mb-[20px] text-[40px]">
          Contact Us
        </p>
        <div className="flex flex-row">
          <a href="https://www.facebook.com/iamthaddybear">
            <BsFacebook color="white" size={30} className="mr-[20px]" />
          </a>
          <a href="https://www.instagram.com/iamthaddybear/?hl=en">
            <BsInstagram color="white" size={30} className="mr-[20px]" />
          </a>
          <a href="https://twitter.com/iamthaddybear">
            <BsTwitter color="white" size={30} className="mr-[20px]" />
          </a>
          <a href="https://drive.google.com/drive/folders/1n-N_FcnoRUlgws_A0p68z0BHdObsDllg?usp=sharing">
            <DiGoogleDrive color="white" size={35} className="mr-[20px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
