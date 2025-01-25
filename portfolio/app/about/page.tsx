// app/about/page.tsx

import Image from 'next/image';

const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 70 },
  { name: 'Tailwind CSS', level: 50 },
  { name: 'JAVASCRIPT', level: 50 },
  { name: 'C# Programming', level: 50 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07374a] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* About Section */}
        <section id='about' className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-teal-400 mb-20">About Me</h1>
          
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/images/people/guy4.jpg" 
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <p className="text-lg text-white  mb-6 max-w-2xl mx-auto leading-relaxed">
            I am a passionate front-end developer with a strong focus on creating beautiful,
            user-friendly websites. With expertise in modern web technologies, I transform
            complex problems into simple, intuitive solutions. When I am not coding, you can
            find me exploring new design trends or contributing to open-source projects.
          </p>
        </section>

        
        <section className="bg-[#07374a] rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center">
            My Skills
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-white border border-none text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full progress-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}   