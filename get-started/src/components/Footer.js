import React from 'react';
import Nav from './Nav';

export default function Footer(){
  return(
    <div>
  <div>
 <Nav/>
<div className="container-fluid">
  <div className="container">
    <div className="row footer_link m-auto text-center">
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="font-weight-bold text-light">About Us</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="font-weight-bold text-light">Resources</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="font-weight-bold text-light">Services</a>
      </div>
    </div>
    <div className="row footer_link m-auto text-center">
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Our Partners</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Blogs</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Advice</a>
      </div>
    </div>
    <div className="row footer_link m-auto text-center">
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Advertise</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Virtual Tour</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Scholarships</a>
      </div>
    </div>
    <div className="row footer_link m-auto text-center">
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Get Involved</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Tutorials</a>
      </div>
      <div className="col-md-4 mt-3 py-auto">
        <a href="#" className="text-light">Tutorials</a>
      </div>
      {/* <div class="">
      <div
        class="bg-light py-2 p-3 d-lg-inline-flex flex-lg-row align-content-lg-end"
      >
        <p>Need Help?</p>
      </div>
    </div> */}
      <div className="container text-secondary p-3 m-3 d-sm-inline-flex">
        <i className="fas fa-copyright fa-lg"> 2021-2025 Youths and Career</i>
        <i className="fa fa-twitter fa-lg p-1" aria-hidden="true" />
        <i className="fa fa-facebook-official fa-lg p-1" aria-hidden="true" />
        <i className="fa fa-linkedin fa-lg p-1" aria-hidden="true" />
      </div>
    </div>
  </div>
</div>



</div>


    </div>
  )
}