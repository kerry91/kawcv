import '../../timeline/Timeline.css'

const TEXPcard = (texp) => {
    return (
      <>
        <div class="t-card">
          <div class="info">
            <p class="title">{texp.title}</p>
            <p class="year">{texp.year}</p>
            <br/>
            <p class="position">{texp.position}</p>
          </div>
        </div>
      </>
    );
  };
  export default TEXPcard;
  