import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 03 . FEATURED WORK"
          title="Things I've built."
          subtitle="A selection of mobile applications and features I've worked on — featuring smart pharmacy inventory systems, cloud-connected Android TV digital signage, and dual-app commercial online ordering."
        />

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
