
import TEDUcard from "../timeline/TEDU/TEDUcard";

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
              <TEDUcard
                  title="Coursera Project Network"
                  year="DEC 2022"
                  content="Introduction to Unit Testing in Jest, The Fundamentals"
                  status="PASS 90%"
                  cid="Credential ID: STN9HPKSFWVM"
                />
                <TEDUcard
                  title="Bath Spa University"
                  year="SEP 2022 - NOV 2022"
                  content="BSU-IOC Web Development Digital Skills Bootcamp"
                  status="COMPLETED"
                />

                <TEDUcard
                  title="Learning Curve Group"
                  year="JUN 2022 - AUG 2022"
                  content="NCFE Level 3 Certificate in Coding Practices"
                  status="COMPLETED"
                />

                <TEDUcard
                  title="Gateshead College"
                  year="MAY 2022 - JUN 2022"
                  content="Web development level 3"
                  status="DISTINCTION"
                />

                <TEDUcard
                  title="University of Essex (course of study at Colchester Institute)"
                  year="2012 - 2015"
                  content="Bachelor of Science with Honours in computing solutions (networks)"
                  status="HIGH 2:2"
                />

                <TEDUcard
                  title="Colchester Institute"
                  year="2010 - 2012"
                  content="BTEC level 3 in computing"
                  status="MERIT"
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