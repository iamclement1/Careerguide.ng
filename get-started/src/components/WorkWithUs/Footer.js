import {
  FaRegCopyright,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <span>
        <FaRegCopyright /> 2021-2025 Youths and Career
      </span>
      <ul className="Socials">
        <li>
          <a href="">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Terms of Use</a>
        </li>
        <li>
          <a>Terms of Service</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
