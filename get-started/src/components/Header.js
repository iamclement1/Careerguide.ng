//import { FaBars } from "react-icons/fa";
import * as ReactBootStrap from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return ( 
        <div className="container-1">

<nav className="navbar sticky-top navbar-expand-lg bg-light navbar-light ">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://i.ibb.co/bPftGwh/logo-1-removebg.png" alt="youthsandcareers logo" width="50" height="30"></img>
    </a>
      <div className="navbar-brand">
        <p className = "text-primary fs-4 mx-0 my-auto" >YouthsandCareers</p>
      </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll " >
        <li className="nav-item">
          <a className="nav-link  ms-3 text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Universities
          </a>
          <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-dark nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#"></a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#"></a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-3 text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Explore
          </a>
          <ul class="dropdown-menu dropdown-menu-custom ms-3 px-3" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-dark nav-link px-2" href="#">Scholarships</a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#">Mentorships</a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#">Global Events</a></li>
            <li><a className="dropdown-item text-dark nav-link px-2" href="#">Blogs</a></li>
          </ul>
        </li>
      </ul> 
      <a className="btn btn-primary rounded-pill" href="#" role="button">Get Started</a>
    </div>
  </div>
</nav>


<div className="container-3 bg-light">
<div className="home-hero container ">
  <div className="row py-lg-4 px-5 ">

 
  <div className=" col-lg-4 col-md-4 my-md-auto   my-lg-auto py-4">
    <img src="https://i.ibb.co/0GSg5j8/student-PNG62539.png" 
    alt="header image" className = "w-100"></img>
  </div>
  <div className="col-lg-8 col-md-8 py-4 px-5 ">
  <table className = "elementsContainer ">
      <tr>
        <td>
        <input className="form-control  " type="search" placeholder="Find a University, Location or Field of study..." aria-label="Search"></input>
        </td>
        <td>
        <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
        </td>
      </tr>
    </table>

    <div className="container-2  ">
  <div className="container">
    <h1 className="text-start mb-lg-3 py-lg-3 pb-md-2 fs-2 text-primary">We Help You Make Better Informed Academic Decisions</h1>

<p className="text-start text-dark mb-lg-4 mt-3">With our Pool of resources, Experience and Compassion we help students make informed decisions towards studying their dream courses in their most preferred institution</p>
<div className="button-2 text-start">
  <a className="btn btn-primary rounded-pill mt-3 mb-4" href="#" role="button">Get Started</a>
</div>
  </div>

</div> 
</div>
  </div>
</div>


</div>
        </div>
     );
}
 
export default Header;    
 








        
