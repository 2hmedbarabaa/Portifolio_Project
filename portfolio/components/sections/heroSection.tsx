import Typewriter from "@/components/typeWriter";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  return (
    <section className="bg-teal-400 text-white py-32 md:py-40" id="home">
      <div className="container px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl md:text-2xl">
          Hi, I am <span className="text-[#07374a] text-2xl md:text-3xl">Ahmed Barabaa</span>
        </p>
        <div className="text-lg md:text-xl mt-4">
  <Typewriter
    sequence={[
      "Software Engineer",
      2000,
      "Front-End Developer",
      2000,
      "React Js Enthusiast",
      2000,
    ]}
    className="animate-pulse"
  />
</div>


        {/* Buttons Container with Icons */}
        <div className="flex justify-center gap-4 md:gap-10 mt-14">
          <a
            href="#contact"
            className="bg-[#07374a] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg
                     hover:bg-[#052a3a] transition-colors duration-300
                     text-base md:text-lg font-medium flex items-center gap-2"
          >
            Hire Me
            <EnvelopeIcon className="h-4 w-4 md:h-5 md:w-5 inline-block" />
          </a>
          <a
            href="/cv-ahmed-barabaa.pdf"
            download
            className="bg-[#07374a] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg
                     hover:bg-[#052a3a] transition-colors duration-300
                     text-base md:text-lg font-medium flex items-center gap-2"
          >
            Download CV
            <ArrowDownTrayIcon className="h-4 w-4 md:h-5 md:w-5 inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
}