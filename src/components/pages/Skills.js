import Homebtn from "../navbar/Homebtn";
import Lcard from "./languages/Lcard";

const Skills = () => {
  return (
    <>
      <div className="card">
        <Homebtn />
        <div className="card-content">
          <h6 className="at-bottom">
            <strong>LANGUAGES</strong>
          </h6>
          <div class="row">
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" />
            </div>
          </div>
          <hr />

          <h6 className="at-bottom">
            <strong>FRAMEWORKS</strong>
          </h6>
          <h6>
            <strong>JS</strong>
          </h6>
          <div className="row">
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nuxtjs-colored.svg" />
            </div>
          </div>

          <h6>
            <strong>CSS</strong>
          </h6>
          <div className="row">
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg" />
            </div>
            <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" />
            </div>
          </div>
          <hr />

          <h6>
            <strong>DATABASE</strong>
          </h6>
          <div className="row">
          <div class="col s12 m6 l3">
              <Lcard image="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
