import Typewriter from "@/components/typeWriter"; // Import your Typewriter component

export default function HeroSection() {
  return (
    <section className="bg-teal-400 text-white py-80">
      <div className="container px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-2xl">
          Hi, I am <span className="text-[#07374a] text-3xl">Ahmed Barabaa</span>
        </p>
        
        {/* Replace static text with Typewriter component */}
        <div className="text-xl">
          <Typewriter
            sequence={[
              "Software Engineer",
              2000,
              "Front-End Developer",
              2000,
              "React Js Enthusiast", 
              2000,
            ]}
            wrapper="p"
            speed={30}
            deletionSpeed={40}
            cursor={true}
            repeat={Infinity}
            className="text-xl mt-2 animate-pulse" 
          />
        </div>
      </div>
    </section>
  );
}