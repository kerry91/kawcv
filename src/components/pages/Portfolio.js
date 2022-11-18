import Homebtn from "../navbar/Homebtn";

const Portfolio = () => {
  return (
    <>
      <div className="card">
      <Homebtn />
        <div className="card-content">
        <h6 className="at-bottom">
            <strong>PORTFOLIO</strong>
          </h6>
          <div className="portfolio-outer">
            <div className="portfolio-wrapper">
              <div className="portfolio-link">
                <a
                className="portfolio-link"
                  href="https://kaw-portfolio.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio this way
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
