import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div className="fixed xs:px-[30px] sm:px-[30px] md:px-[50px] xs:py-[20px] sm:py-[20px] md:py-[10px]  w-screen flex flex-row items-center justify-between header xs:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-row items-center self-start">
          <Link href="/">
            <IoIosArrowBack
              color="white"
              size={50}
              className="bg-[#ffd727] rounded-full p-[10px]  shadow-lg cursor-pointer "
            />
          </Link>
        </div>
      </div>
      <div className="w-screen h-fit flex flex-row bg-top">
        <img
          className="w-full object-top object-cover h-[80vh] bg-top"
          src={"/Images/Blog2.png"}
          alt=""
        />
        <p
          className="absolute  w-1/2 text-left font-alphaSlabOne font-bold   md:left-14 xs:left-1 sm:left-1 xs:text-[30px] xs:w-4/5 sm:text-[35px] md:text-[50px]"
          style={{
            display: "inline",
            lineHeight: 1.1,
            fontWeight: 400,
            top: "60%",

            color: "white",
          }}
        >
          {`"The Bomb"`}
        </p>
      </div>
      <div className="w-full flex flex-col  items-center">
        <Article />
      </div>
    </div>
  );
};

const Article = (props: any) => {
  return (
    <div
      className="xs:px-1 sm:px-1 md:px-8"
      style={{ background: "#fff", width: "100%" }}
    >
      <div className="content md:p-14 xs:p-1 sm:p-1 xs:mt-4 sm:mt-4 ">
        <div className="flex flex-col items-start">
          <p className="font-Inter font-bold" style={{ fontSize: 30 }}>
            The Bomb
          </p>
          <div className="flex xs:flex-col sm:flex-col md:flex-row">
            <div className="flex flex-col items-start justify-between md:w-1/2 pr-8 xs:w-full sm:w-full ">
              <p className="text-[15px] font-Inter mt-2 font-medium text-black">
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
                MRI the next day as they “saw something in the X Ray”. After
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
                <br />
                <br /> After the MRI, we made our way back to the ward. As the
                door to the Diagnostic and Imaging Centre opened, the oncologist
                and his team was already waiting there for us with a concerned
                look on his face. My stomach turned. He introduced himself, “Hi
                Daddy, I am not the doctor anyone wants to see”. What followed
                was a few sessions of counselling and family discussions. I also
                went down the rabbit hole of Googling all I could about the
                cancer, its prognosis, treatment and long term side effects.
                This was against the Dr’s advice, as he felt that it would make
                communication between the medical team and parents more
                complicated. As a parent, I could not help it. I had no other
                ways to deal with this. This diagnosis hit my wife very hard.
                Since then, she has doubled down on her efforts to find the best
                treatment for Thaddeus. Things happened very fast from here, as
                Thaddeus had to begin treatment as soon as possible. Routines
                involving work and home were quickly adjusted.
              </p>
            </div>
            <div className="md:w-1/2 xs:w-full sm:w-full mt-2 flex-row flex-wrap flex overflow-hidden">
              <img className="w-fit h-fit" src={"/Images/Blog3.png"} alt="" />
              <img className="w-fit h-fit" src={"/Images/Blog1.png"} alt="" />
              <img className="w-fit h-fit" src={"/Images/Blog4.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
