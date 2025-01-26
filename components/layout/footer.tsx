import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-44">
      <div className="container mx-auto px-4 text-center py-10">
        <h2 className="text-teal-400 text-5xl mb-8 font-bold">Contact Me</h2>
        
        <div className="mb-8">
          <p className="text-xl mb-4">
            Get in touch via{' '}
            <Link 
              href="mailto:ahmedbarabaa1@gmail.com" 
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              ahmedbarabaa1@gmail.com
            </Link>
          </p>
          
          <p className="text-teal-400 text-xl mb-4">Or find me on:</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <Link
              href="https://www.linkedin.com/in/ahmedbarabaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://codepen.io/2hmed_10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors"
            >
              CodePen
            </Link>
            <Link
              href="https://github.com/2hmedbarabaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

       
       
      </div>
    </footer>
  );
}