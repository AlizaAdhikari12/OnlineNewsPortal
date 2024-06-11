import './../../../css/Heading.css'
import Homepage from './../Homepage';
const Heading = () => {
  return (
    <>
      <div className="trending-news">
        <div className="trending-section">
          <p className="trending-title">Trending News :</p>
          <div className="trending-option">
            <a href="#">
              <p>Sandeep Lammichanne</p>
            </a>
            <a href="#">
              <p>Book Talk</p>
            </a>
            <a href="#">
              <p>Capital</p>
            </a>
            <a href="#">
              <p>Revenue</p>
            </a>
            <a href="#">
              <p>Kantipur Half Marathon</p>
            </a>
            <a href="#">
              <p>Pollution</p>
            </a>
          </div>
        </div>
      </div>
      <div className="Container"></div>
    </>
  );
};

export default Heading;
