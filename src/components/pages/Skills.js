import buefy from "../images/buefy.png"
import materialize from "../images/materialize.png"
import bsuBadge from "../images/bsuBadge.png"
import Lcard from "./languages/Lcard";

const Skills = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="at-bottom">
            <strong>LANGUAGES</strong>
          </h6>
          <div class="row">
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/html-1.svg"/>
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/css-3.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/sass-1.svg" />
            </div>
          </div>
          <hr />

          <h6 className="at-bottom">
            <strong>FRAMEWORKS</strong>
          </h6>
          <h6>
            <strong>JAVASCRIPT</strong>
          </h6>
          <div className="row">
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/vue-js-1.svg" />
            </div>
          </div>

          <h6>
            <strong>CSS</strong>
          </h6>
          <div className="row">
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/bulma.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image={materialize}/>
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image={buefy} />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/uikit.svg" />
            </div>
          </div>
          <hr />

          <h6>
            <strong>DATABASE</strong>
          </h6>
          <div className="row">
          <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/mysql-6.svg" />
            </div>
          </div>
          <hr />
          <h6>
            <strong>VERSION CONTROL</strong>
          </h6>
          <div className="row">
          <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/git-icon.svg" />
            </div>
            <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"/>
            </div>
          </div>
          <hr />
          <h6>
            <strong>PACKAGE MANAGER/SCRIPTS</strong>
          </h6>
          <div className="row">
          <div class="col s12 m6 l6 xl3">
              <Lcard image="https://cdn.worldvectorlogo.com/logos/npm.svg"/>
            </div>
          </div>
          <hr/>
          <h6>
            <strong>BADGES</strong>
          </h6>
          <div className="row">
          <div class="col s12 m6 l6 xl3">
              <Lcard image={bsuBadge} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Skills;
