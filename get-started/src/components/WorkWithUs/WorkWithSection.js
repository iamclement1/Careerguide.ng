import Button from "./Button";
import AppStore from "../img/AppStore.png";
import PlayStore from "../img/PlayStore.png";
const WorkWithSection = () => {
  return (
    <div className="WorkWithSection">
      <div id="section">
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Partners</a>
          </li>
          <li>
            <a>Advertise</a>
          </li>
          <li>
            <a>Get Involved</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Virtual Tour</a>
          </li>
          <li>
            <a>Tutorials</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Advice</a>
          </li>
          <li>
            <a>Scholarships</a>
          </li>
          <li>
            <a>Tutorials</a>
          </li>
        </ul>
      </div>
      <div className="Extras">
        <img src={AppStore} alt="Download on App Store" />
        <img src={PlayStore} alt="Download on Play Store" />
        <Button />
      </div>
    </div>
  );
};

export default WorkWithSection;
