import Image from 'next/image';
import { Project } from '@/types/portfolio';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-[#07374a]">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-white mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-[#07374a] border border-white px-2 py-1 rounded text-sm">
            {tech}
          </span>
          ))}
        </div>
      </div>
    </div>
  );
}