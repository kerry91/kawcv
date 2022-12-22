import '../../timeline/Timeline.css'

const TEDUcard = (tedu) => {
    return (
      <>
        <div class="t-card">
          <div class="info">
          <p class="title">{tedu.title}</p>
            <p class="year">{tedu.year}</p>
            <br/>
            <p>{tedu.content}</p>
            <p>{tedu.status}</p>
            <p>
              {tedu.cid}
            </p>
          </div>
        </div>
      </>
    );
  };
  export default TEDUcard;
  