'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const scrollPosition = window.scrollY + headerHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <header className="bg-teal-400 shadow sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 md:py-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-lg sm:text-xl md:text-2xl font-bold ml-1 sm:ml-2 md:ml-4 hover:text-[#07374a] transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('home');
            setActiveSection('home');
          }}
        >
          Ahmed Barabaa
        </a>

        <nav>
          <ul className="flex space-x-2 sm:space-x-3 md:space-x-5 text-sm sm:text-base md:text-xl">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`hover:text-[#07374a] transition-colors ${
                    activeSection === section ? 'text-[#07374a] font-semibold' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}