import YCLogo from "../img/YCLogo.png";
import { FaAngleDown } from "react-icons/fa";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="WorkWithNav">
      <a className="YC">
        <img
          className="WorkWithLogo"
          src={YCLogo}
          alt="YouthsandCareers Logo"
        />
        YouthsandCareers
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
    </div>
  );
};

export default NavBar;
