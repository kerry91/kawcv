import Homebtn from "../navbar/Homebtn";


const Skills = () => {
    return (
      <>
        <div className="card">
          <div className="card-content">
          <h6 className="at-bottom">
              <strong>SKILLS</strong>
            </h6>
            <strong>HTML</strong>
                <div className="skills-wrapper">
              <div className="skills html">90%</div>
            </div>  

            <strong>CSS</strong>
            <div className="skills-wrapper">
              <div className="skills css">90%</div>
            </div>  

            <strong>JavaScript</strong>
            <div className="skills-wrapper">
              <div className="skills js">80%</div>
            </div>  

            <strong>SQL</strong>
            <div className="skills-wrapper">
              <div className="skills sql">50%</div>
            </div>
          </div>
          <Homebtn/>
        </div>
      </>
    );
  };
  
  export default Skills;
  