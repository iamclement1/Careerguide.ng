import YCLogo from "../img/YCLogo.png";
import { FaAngleDown } from "react-icons/fa";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <ul className="WorkWithNav">
      <a>
        <img
          className="WorkWithLogo"
          src={YCLogo}
          alt="YouthsandCareers Logo"
        />
        Youthsandcareers
      </a>
      <a>Home</a>
      <a>
        Universities <FaAngleDown />
      </a>
      <a>
        Explore <FaAngleDown />
      </a>
      <a>
        <SearchBar />
      </a>
    </ul>
  );
};

export default NavBar;
