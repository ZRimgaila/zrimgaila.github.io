import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProjectList = ({projects, title}) => {

    return ( 
        <div className="project-list container">
            <div className="project-list">
                <h2 className="pb-4 mb-4 border-bottom">{title}</h2>
                <div className="row justify-content-center">
                    {projects.slice().sort((a, b) => a.priority - b.priority).map((project) => (
                        <div className="row mb-2" key={project.id}>
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">{project.name}</h3>
                                    <div className="mb-1 text-body-secondary">Skills:</div>
                                    <div className="d-flex flex-wrap">
                                        {project.skills.map((skill) => (
                                            <img 
                                                key={skill.id} 
                                                src={`http://localhost:8080/skills/${skill.id}`} 
                                                alt={skill.name} 
                                                className="me-2 mb-2 rounded-circle" 
                                                style={{ width: '40px', height: '40px' }}
                                            />
                                        ))}
                                    </div>
                                    <Link to={`/projects/${project.id}`} className="stretched-link text-decoration-none">
                                        View Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
     );
}
 
export default ProjectList;