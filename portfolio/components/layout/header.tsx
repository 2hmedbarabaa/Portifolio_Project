import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-400 shadow sticky top-0 z-50"> {/* Added sticky classes */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold ml-4 hover:cursor-pointer">
          Ahmed Barabaa
        </Link>
        
        <nav>
          <ul className="flex space-x-5 text-xl">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}