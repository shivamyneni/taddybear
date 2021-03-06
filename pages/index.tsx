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
import Link from "next/link";
import Footer from "../components/icons/Footer";
import { db } from '@/firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'
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
    <div className="w-screen h-auto overflow-hidden">
      <Head>
        <title>ThaddyBear</title>
        <meta name="description" content="Fundraising Initiative" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="fixed xs:px-[30px] sm:px-[30px] md:px-[50px] xs:py-[20px] sm:py-[20px] md:py-[10px] bg-white w-screen shadow-md flex flex-row items-center justify-between header xs:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center self-start">
            <RiBearSmileLine
              color="yellow"
              size={50}
              className="bg-[#8d19b1] rounded-full p-[10px] border-[3px] border-[#FFFF00] "
            />
            <p className="text-[#ffd727] font-SquarePeg font-bold  xs:text-[20px] sm:text-[20px] md:text-[25px] ml-[10px] md:flex sm:hidden xs:hidden">
              ThaddyBear
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-row items-center justify-end cursor-pointer">
            <MenuIcon
              onClick={() => {
                setShowNavbar(!showNavbar);
              }}
            />
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden cursor-pointer"
              onClick={() => setScrollId("about")}
            >
              About
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden cursor-pointer"
              onClick={() => setScrollId("journey")}
            >
              Journey
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden cursor-pointer"
              onClick={() => setScrollId("updates")}
            >
              Updates
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[20px] sm:text-[20px] md:text-[15px] ml-[20px] md:flex sm:hidden xs:hidden cursor-pointer"
              onClick={() => setScrollId("contactus")}
            >
              Contact Us
            </p>
          </div>
        </div>
        {showNavbar && (
          <div className="w-full h-fit z-50 md:hidden sm:flex xs:flex xs:flex-col sm:flex-col mt-[10px]">
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] cursor-pointer "
              onClick={() => setScrollId("about")}
            >
              About
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] cursor-pointer"
              onClick={() => setScrollId("journey")}
            >
              Journey
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] mb-[8px] cursor-pointer"
              onClick={() => setScrollId("updates")}
            >
              Updates
            </p>
            <p
              className="text-[#ffd727] font-Inter font-bold  xs:text-[15px] sm:text-[15px] md:text-[15px] cursor-pointer "
              onClick={() => setScrollId("contactus")}
            >
              Contact Us
            </p>
          </div>
        )}
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center  Imagebackground bg-center xs:px-[40px] sm:px-[40px] md:px-[90px] ">
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
            Thaddeus???s life changed overnight and he had to get used to invasive
            procedures and long stays in the hospital. It was a tough time for
            him and his family as they adapted to this new lifestyle. With the
            treatment, Thaddeus???s immune system is very weak and he is not able
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
        The cost of Thaddybear???s treatment even after claiming from the insurer amount to approx. SGD $1.7 mil. The bulk of the cost is from the use of Hu3F8 (Naxitamab) in immunotherapy. This drug is commercially available in the USA and has to be imported for use in SG. The family was quoted approx. SGD $1.3 mil by the hospital. Some treatments are not covered by the insurer, such as a cancer vaccine regime lasting 5 years that is available and administered in the USA. Other treatments like Proton Therapy are only partially covered by the insurer (SGD $15k). 
	Each year, the insurer will pay-out SGD $1 mil, with the family bearing a 10% co-payment up to SGD $30,750 per policy year. Currently, treatment stretches across two policy years. Any cost incurred beyond the payout will be fully borne by the family. By the middle of this policy year, treatment would have cost SGD $844 420, without immunotherapy.
	The family has started fundraising. 100% of the donations will go to funding the medical bills and costs related to Thaddybear???s treatment locally and overseas. Crowdfunding platforms that the family has approached are not able to make payment to overseas institutions. Furthermore, a portion of the funds raised will be retained by these platforms as fees.   
	Donations will be made to a joint account managed by mum and dad.
        </p>
        <img src='/Images/paymentqr.png' className="aspect-square w-[150px] mt-[10px]"/>
      </div>
      <div className=" px-[40px] my-[50px] updates">
        <p className="text-black font-Inter font-bold xs:text-[25px] sm:text-[25px] md:text-[40px] self-start mb-[20px] capitalize">
          {`Updates`}
        </p>
        <div>
          <Link href="/Blog">
            <div
              className="mb-[20px] pb-[20px]  rounded-[10px]  xs:w-auto sm:w-auto md:w-[200px] h-fit overflow-hidden cursor-pointer"
              style={{
                boxShadow:
                  "0 19px 38px rgba(0,0,0, 0.3), 0 15px 12px rgba(0,0,0, 0.2)",
              }}
            >
              <img
                className="xs:w-screen sm:w-screen  md:w-[200px] h-[200px] rounded-t-[10px]  "
                src={"/Images/Blog2.png"}
                alt=""
              />
              <p className="py-[5px] font-Inter font-bold px-[10px] text-[20px]">
                The Bomb
              </p>
              <p className="text-[12px]  w-full  px-[10px] font-Inter mt-2 font-medium line-clamp-5 text-black">
                I brought Thaddeus to KKH A&E one October night. Singapore was
                still in the midst of dealing with the Omicron wave. He had been
                having fever for almost two weeks and complained that he could
                not walk. It pained me to see him like this. A fatherly A&E
                doctor told me there seemed to be something in his chest X-Rays.
                I thought that it was probably pneumonia since he tested ART
                negative. Because of his fever, we were sent to an isolation
                ward. The doctors permitted me to drive my car home and get some
                necessities in anticipation of a long stay. I left Thaddeus if
                their care and hurried home. When I made it back to the ward,
                Thaddeus cried when he saw me. They had inserted an IV plug into
                his hand to facilitate other tests and procedures. My heart was
                torn to shreds as it was the first time he had been subjected to
                needles since his newborn vaccinations. We were transferred to a
                paediatric ward once he had tested negative (PCR) for covid.
                There, the doctor informed me that he would be scheduled for an
                MRI the next day as they ???saw something in the X Ray???. After
                awhile, I persuaded another doctor to tell me what they saw. She
                told me that they suspected something more sinister, probably
                Neuroblastoma. That was the first time I heard of this term and
                it was forever seared in my brain. I did not know how to tell my
                wife and I now prayed that my baby had Pneumonia instead.
                Neuroblastoma was such a foreign word to me. I never knew this
                disease existed and none of our family and friends had ever
                heard of it. I was lost. I finally told my wife about this
                possibility over the phone and we both broke down. The next day,
                we did the MRI. The doctor asked if Thaddeus could keep still
                for one and a half hours, otherwise he would have to be under
                GA. Thaddeus asked me if GA was good for him, and I replied that
                it was not. He said he would keep still. I had my doubts as he
                was a mischievous child that could never follow instructions.
                Having went through a couple of MRIs myself for less than an
                hour each time, I knew how claustrophobic it felt.
              </p>
            </div>
          </Link>
          
          <div className="flex flex-col">
            <p className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start mb-[10px] capitalize">
              Funds Raised
            </p>
            <p className="text-[#e7c21d] font-Inter font-bold xs:text-[20px] sm:text-[20px] md:text-[40px] self-start mb-[10px] capitalize fund">
              $2308
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-black font-Inter font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] self-start  capitalize">
              Expenditure
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
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const HomeData:any = []
  try {
    // await the promise
    const querySnapshot = await getDocs(collection(db, 'THADDYBEAR_DATA'))
    querySnapshot.forEach((doc) => {
      HomeData.push(doc.data())
    })
  } catch (error) {
    console.log('Error Occured while fetching the Data', error)
  }
  return {
    props: {
      HomeData,
    },
    revalidate: 1200,
  }
}
export default Home;
