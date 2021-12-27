import "./ProjectList.css";
import Project from "./Project";
const ProjectList = () => {
  return (
    <div className="projectlist">
      <div className="p-texts">
        <h1 className="p-title">Projects</h1>
        <p className="p-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          sequi eius ullam error praesentium officia nam sed delectus sint
          cumque nulla, soluta natus molestiae earum ratione, hic nesciunt vero
          quod!
        </p>
      </div>
      <div className="p-list">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default ProjectList;
