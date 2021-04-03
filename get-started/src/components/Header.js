//import { FaBars } from "react-icons/fa";
import * as ReactBootStrap from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return ( 
        <div className="container-1">

<nav className="navbar sticky-top navbar-expand-lg  navbar-light ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://i.ibb.co/bPftGwh/logo-1-removebg.png" alt="youthsandcareers logo" width="50" height="30"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <a className="nav-link  ms-2" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ms-2" href="#">Universities</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ms-2" href="#" >Mentorships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ms-2" href="#" >Global Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ms-2" href="#" >Scholarships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  ms-2" href="#" >Blog</a>
        </li>
      </ul> 
      <a className="btn btn-primary rounded-pill" href="#" role="button">Get Started</a>
    </div>
  </div>
</nav>


<div className="home-hero container">
<table className = "elementsContainer">
      <tr>
        <td>
        <input className="form-control  " type="search" placeholder="Find a University, Location or Field of study..." aria-label="Search"></input>
        </td>
        <td>
        <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
        </td>
      </tr>
    </table>
<div className="container-2 bg-custom">
  <div className="container">
    <h1 className="text-center my-4 py-3 fs-2">We Help You Make Better <br/> Informed Academic Decisions</h1>
<div className="border-top border-primary w-50 mx-auto my-3 "></div>
<p className="text-center text-dark lead my-3">With our Pool of resources, Experience and <br/> Compassion we help students make informed <br/> decisions towards studying their dream courses in <br/> their most preferred institution</p>
<div className="button-2 ">
  <a className="btn btn-primary rounded-pill mt-3 mb-4" href="#" role="button">Get Started</a>
</div>
  </div>

</div> 
</div>
        </div>
     );
}
 
export default Header;    
 








        
