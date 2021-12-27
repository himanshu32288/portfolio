import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="pr-browser">
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
        <div className="pr-circle"></div>
      </div>
      <a
        href="http://github.com/himanshu32288/nepilson"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://iibmindia.in/wp-content/uploads/2021/08/HiRes-17.jpg"
          alt=""
          className="pr-img"
        />
      </a>
    </div>
  );
};

export default Project;
