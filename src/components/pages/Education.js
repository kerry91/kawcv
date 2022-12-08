
import Tcard from "../timeline/Tcard";

const Education = () =>{
    return(
        <>
         
      <div className="card">
        <div className="card-content">
          <h6 className="at-bottom">
            <strong>EDUCATION</strong>
          </h6>
          <div className="timeline-wrapper">
            <div class="timeline">
              <div class="outer">
                <Tcard
                  TcardTitle="Bath Spa University (SEP 2022 - NOV 2022 )"
                  TcardContent="BSU-IOC Web Development Digital Skills Bootcamp - COMPLETED"
                />

                <Tcard
                  TcardTitle="Learning Curve Group (JUN 2022 - AUG 2022)"
                  TcardContent="NCFE Level 3 Certificate in Coding Practices - COMPLETED"
                />

                <Tcard
                  TcardTitle="Gateshead College (MAY 2022 - JUN 2022)"
                  TcardContent="Web development level 3 - DISTINCTION"
                />

                <Tcard
                  TcardTitle="Colchester Institute (2012 - 2015)"
                  TcardContent="Bachelor's degree in computer science - HIGH 2:2"
                />

                <Tcard
                  TcardTitle="Colchester Institute (2010 - 2012)"
                  TcardContent="BTEC level 3 in computing- MERIT"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Education