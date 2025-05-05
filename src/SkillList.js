import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SkillList = ({skillList, title}) => {

    return ( 
        <div className="skill-list container">
            <div className="skill-list">
                <h2 className="pb-4 mb-4 border-bottom">{title}</h2>
                <div className="skill-grid">
                    {skillList.map((skill) => (
                        <div className="skill-preview" key={skill.id}>
                            <Link to={`/image/${skill.id}`}>
                                <div>
                                    <img src={`http://localhost:8080/skills/${skill.id}`} alt={skill.name} className="skill-image"/>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default SkillList;