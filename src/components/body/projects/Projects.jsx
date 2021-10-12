import { ProjectData } from '../../data/ProjectData';
import Seperator from '../common/seperator/Seperator';
import ProjectCard from './ProjectCard';
import './projects.css';

function Projects() {
  const data = ProjectData;

  return (
    <div className="projects">
      <Seperator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
