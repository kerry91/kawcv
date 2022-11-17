const Tcard = (props) => {
    return (
      <>
        <div class="t-card">
          <div class="info">
            <h3 class="title">{props.TcardTitle}</h3>
            <p>
              {props.TcardContent}
            </p>
          </div>
        </div>
      </>
    );
  };
  export default Tcard;
  