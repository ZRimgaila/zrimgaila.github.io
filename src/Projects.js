import useFetch from "./useFetch";
import ProjectList from "./ProjectList";

const Projects = () => {
    const {data: projects, isLoading, error} = useFetch('http://localhost:8080/projects');
    return (
        <div className="projects">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {projects && <ProjectList projects = {projects} title = "Projects"/>} {/* jei projects nera null tuomet einanam i ProjectList */}
        </div>
    );
}
 
export default Projects;