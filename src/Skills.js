import SkillList from "./SkillList";
import useFetch from "./useFetch";

const Skills = () => {

    const {data: skills, isLoading, error} = useFetch('http://localhost:8080/skills');

    return (
        <div className="skills">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {skills && <SkillList skillList = {skills} title = "Tech skills"/>}
        </div>
    )
}

export default Skills;