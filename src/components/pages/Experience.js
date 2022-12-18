
import Tcard from "../timeline/Tcard";

const Experience = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="at-bottom">
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="timeline-wrapper">
            <div class="timeline">
              <div class="outer">
              <Tcard
                  TcardTitle="Looking for work (NOV 2021 - PRESENT)"
                  TcardContent="Looking for work and taking on training courses to upskill."
                />
                <Tcard
                  TcardTitle="Azura Group Ltd (NOV 2019 - NOV 2021)"
                  TcardContent="Software developer and Customer Project Manager"
                />

                <Tcard
                  TcardTitle="Oxberry Ltd (AUG 2018 - OCT 2019)"
                  TcardContent="Systems Programmer"
                />

                <Tcard
                  TcardTitle="C3 Custom Code Crafters (SEP 2015 - JUL 2018)"
                  TcardContent="Crestron Programmer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
