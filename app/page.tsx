import Navigationbar from  "@components/main/Navbar"
import Hero from "@components/main/Hero";
import '@app/globals.css'
import AboutMe from "@components/main/AboutMe";

export default function Home() {
 
  return (
    <>
  <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className=" flex flex-col w-full font-inter ">
        <Navigationbar />
        <Hero />
        <AboutMe />
      </div>
      </div>
      </>
  );
}