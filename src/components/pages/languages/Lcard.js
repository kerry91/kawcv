const Skills = (props) => {
    return (
      <>
        <div class="row">
          <div class="col">
            <div class="card-panel">
              <div class="card-image">
                <img src={props.image} alt={props.desc}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
export default Skills  