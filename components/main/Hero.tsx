"use client"
import { Spotlight } from "@components/ui/Spotlight";
import { TextGenerateEffect } from "@components/ui/TextGen"; 
import { TypewriterEffectSmooth } from "@components/ui/TypeWriter";

export default  function Hero(){
  type WordsType = {
    text: string;
    className?: string | undefined;
  }[];
  const words: WordsType = [
    {
      text: "I am a Full Stack developer !",
      className:
        "text-center text-xl md:text-3xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500",
    },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return(
    <div
   
      id="1"
      className=" flex  items-center relative justify-center w-full h-screen bg-black overflow-x-hidden "
    >
      <Spotlight className='pt-12 '></Spotlight>
      <div className="absolute text-center  ">
        <div className="text-4xl md:text-6xl font-bold font-poppins text-white ">
          <TextGenerateEffect
            words="Vansh Parate"
            className="font-semibold bg-clip-text text-transparent text-4xl md:text-6xl leading-snug tracking-wide"
          />
        </div>
        <hr className="mt-4 w-full"></hr>
        <div className=" text-sm md:text-xl">
          <TypewriterEffectSmooth words={words} className="text-sm" />
        </div>
      </div>  
    </div>
  )
}