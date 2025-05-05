import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const ProjectDetails = () => {
    const {id} = useParams();
    const {data: project, isLoading, error} = useFetch('http://localhost:8080/projects/' + id);
    const handleClick = () => {
        window.open(project.linkToProject, '_blank', 'noopener,noreferrer');
      };

    return ( 
        <div className="project-details container" >
            <div className="row justify-content-center">
                {isLoading && <div>Loading ...</div>}
                {error && <div>{error}</div>}

                {/* Algorithm for solving biobjective travel salesman problem */}
                {project && project.id == 2 && 
                    <article class="blog-post">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div>
                            {"Tech skills used: "}
                            {project.skills.map((skill) => (
                                <img src={`http://localhost:8080/skills/${skill.id}`} alt="" className="my-image"/>
                            ))}
                        </div>

                        <div class="row justify-content-center mt-2">
                            {project.images.map((image) => (
                                <div class="col-md-6">
                                    <figure key={image.id} className="project-image-container-2 text-center">
                                        <img src={`http://localhost:8080/image/${image.id}`} alt="" className="project-image img-fluid rounded mb-2"/>  
                                        <figcaption className="image-caption text-muted text-center">{image.description}</figcaption>
                                    </figure> 
                                </div>           
                            ))}
                        </div>
                        
                        <div>
                            <button onClick={handleClick} class="btn btn-success">Check the code!</button>
                        </div>
                    </article>}

                {/* Brain trainer game */}
                {project && project.id == 1 && 
                    <article class="blog-post">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div>
                            {"Tech skills used: "}
                            {project.skills.map((skill) => (
                                <img src={`http://localhost:8080/skills/${skill.id}`} alt="" className="my-image"/>
                            ))}
                        </div>

                        <div class="pr-1-image-grid">
                            {project.images.slice().slice().sort((a, b) => a.id - b.id).map((image) => (
                                <div>
                                    <figure key={image.id} className="project-image-container-1 text-center">
                                        <img src={`http://localhost:8080/image/${image.id}`} alt="" className="pr-1-image img-fluid rounded mb-2"/>  
                                        <figcaption className="image-caption text-muted">{image.description}</figcaption>
                                    </figure> 
                                </div>           
                            ))}
                        </div>
                        
                        <div>
                            <button onClick={handleClick} class="btn btn-success">Check the code!</button>
                        </div>
                    </article>}

                {/* Tic Tac Toe game */}
                {project && project.id == 3 && 
                    <article class="blog-post">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div>
                            {"Tech skills used: "}
                            {project.skills.map((skill) => (
                                <img src={`http://localhost:8080/skills/${skill.id}`} alt="" className="my-image"/>
                            ))}
                        </div>

                        <div class="row justify-content-center mt-2">
                            {project.images.map((image) => (
                                <div class="col-md-6">
                                    <figure key={image.id} className="project-image-container-2 text-center">
                                        <img src={`http://localhost:8080/image/${image.id}`} alt="" className="project-image img-fluid rounded mb-2"/>  
                                        <figcaption className="image-caption text-muted text-center">{image.description}</figcaption>
                                    </figure> 
                                </div>           
                            ))}
                        </div>
                        
                        <div>
                            <button onClick={handleClick} class="btn btn-success">Check the code!</button>
                        </div>
                    </article>}
            </div>   
        </div>
    );
}
 
export default ProjectDetails;