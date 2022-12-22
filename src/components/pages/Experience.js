import TEXPcard from "../timeline/TEXP/TEXPcard"; 

const Experience = () => { return (
<div className="card">
  <div className="card-content">
    <h6 className="at-bottom">
      <strong>EXPERIENCE</strong>
    </h6>
    <div className="timeline-wrapper">
      <div class="timeline">
        <div class="outer">
          <TEXPcard
            title="Seeking Work"
            year="MAR 2022 - PRESENT"
            position="Looking for work and taking on training courses to upskill."
          />
          <TEXPcard
            title="Sabbatical"
            year="NOV 2021 - MAR 2022"
            position=" "
          />
          <TEXPcard
            title="Azura Group Ltd"
            year="NOV 2019 - NOV 2021"
            position="Software developer and Customer Project Manager"
          />

          <TEXPcard
            title="Oxberry Ltd"
            year="AUG 2018 - OCT 2019"
            position="Systems Programmer"
          />

          <TEXPcard
            title="C3 Custom Code Crafters"
            year="SEP 2015 - JUL 2018"
            position="Crestron Programmer"
          />
        </div>
      </div>
    </div>
  </div>
</div>
); }; export default Experience;
