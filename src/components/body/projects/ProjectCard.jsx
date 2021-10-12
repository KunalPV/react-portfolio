import './project-card.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} className="project-link">
              <div className="link-btn">
                <i className="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a href={project.github} className="project-link">
              <div className="link-btn">
                <i className="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <div className="project-about">
          <p>{project.about}</p>
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return (
              <label className="tag" key={Math.random(10)}>
                {tag}
              </label>
            );
          })}
        </div>
      </div>
      <img src={project.image} alt={project.title} className="project-photo" />
    </div>
  );
}

export default ProjectCard;
