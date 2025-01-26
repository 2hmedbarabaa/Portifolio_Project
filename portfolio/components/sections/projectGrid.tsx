import { projects } from '@/lib/data/projects';
import ProjectCard from '../ui/projectCard';

export default function ProjectGrid() {
  return (
    <section id='projects' className="bg-teal-400 py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}