import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Universities() {
  return (
    <div className="container-fluid">
      <div className="university-nav">
        <img src="logo.svg" alt="youthsandcareers logo" width="50" height="30" className="logo"></img>
        <div>
          <h1 className="text-primary universities">Universities</h1>
        </div>
        <div className="text-primary arrow">
          <div className="row">
            <div className="col-6">
              <IoIosArrowBack />
            </div>
            <div className="col-6" >
              <img src="womanimage2.jpg" className="woman-image"></img>
            </div>
          </div>
        </div>
        <div className="welcome">
          <h2>Welcome!</h2>
          <p>Aisha Amina</p>
        </div>
        <table className="elementsContainer">
          <tr>
            <td>
              <input className="form-control  " type="search" placeholder="Search University by Name or State" aria-label="Search"></input>
            </td>
            <td>
              <a className="btn btn-primary py-2 mx-0 ps-2" href="#" role="button"><FaSearch></FaSearch></a>
            </td>
          </tr>
        </table>
        <div className="nigeria-universities">
          <h2 className="text-primary">Universities in Nigeria</h2>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Abia State</option>
            <option value="1">Abia University</option>
            <option value="2">Abia University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Adamawa State</option>
            <option value="1">Adamawa University</option>
            <option value="2">Adamawa University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>  Akwa-ibom State</option>
            <option value="1">Akwa-ibom University</option>
            <option value="2">Akwa-ibom State University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Anambra State</option>
            <option value="1">Anambra University</option>
            <option value="2">Anambra University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Bauchi State</option>
            <option value="1">Bauchi University</option>
            <option value="2">Bauchi University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected> Benue State</option>
            <option value="1"> Benue University</option>
            <option value="2"> Benue State University</option>
          </select>

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>Borno State</option>
            <option value="1">Borno  University</option>
            <option value="2">Borno  University</option>
          </select>

          <a href="#">More States....</a>
        </div>

        <div>
          <ul className="footer-links">
            <li><a href="#">Academic Posts</a></li>
            <li><a href="#">Scholarship Opportunites</a></li>
            <li><a href="#" className="hyperlink">Hyperlinks</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

