import React from 'react';
 

export default function Landing(){
  return(
    <div>
     <div>
  <div className="fixed-top">
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <a href="#" className="navbar-brand">
        <img className="brand-logo" src="./img/logo.svg" alt="logo" />
        YouthandCareer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a href="#" className="nav-link"> Home </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Universities </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Mentorships </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Global Events </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Scholarships</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link"> Blog</a>
          </li>
        </ul>
        <div className="btn btn-primary">Get Started</div>
      </div>
    </nav>
  </div>
  {/* <nav class="navbar navbar-expand-md navbar-dark bg-dark"></nav> */}
  {/*========== Our service ========*/}
  <section className="bg">
    <div id="overlay">
      <div className="container-fluid m-auto red">
        <div className="container">
          <div className="row">
            <div className="col-md-3 sm-4">
              <img className="student-img" src="./img/student_PNG62539.png" alt="student image" />
            </div>
            <div className="col-md-8 sm-4 header-text">
              <div className="form-group">
                <input className="form-input" type="text" placeholder="Search for a University, Course or Field of Study" />
                <h3>
                  We Help you make better informed academic decisions
                </h3>
                <p>With our Pool of  resources, Experience and Compassion we help students make informed decisions towards studying their dream courses in their most preffered institution.</p>
                <div className="btn btn-primary btn-lg">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pt-5">
    <div className="container-fluid pt-5" style={{background: '#f0ecec'}}>
      <h3 className="text-center">WHAT WE DO</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-3 lg-3 sm-3 card shadow p-3 bg-white rounded">
            <div className="class-img-top">
              <i className="fas fa-university fa-5x pt-3" />
            </div>
            <div className="card-body">
              <p>
                Select a university of your choice and we would provide you
                with all necessary information
              </p>
            </div>
            <div className="card-color" />
          </div>
          <div className="col-sm-3 card shadow p-3 bg-white rounded">
            <div className="class-img-top">
              <i className="fas fa-laptop-code fa-5x pt-3" />
            </div>
            <div className="card-body">
              <p>
                Get access to every resources and information you need to know
                about your course of choice
              </p>
            </div>
            <div className="card-color" />
          </div>
          <div className="col-sm-3 card shadow p-3 bg-white rounded">
            <div className="class-img-top">
              <i className="fas fa-laptop-code fa-5x pt-3" />
            </div>
            <div className="card-body">
              <p>
                We provide methorship to secondary school students on how to
                go about seleting their choice course
              </p>
            </div>
            <div className="card-color" />
          </div>
          <div className="col-sm-3 card shadow p-3 bg-white rounded">
            <div className="class-img-top">
              <i className="fas fa-laptop-code fa-5x pt-3" />
            </div>
            <div className="card-body">
              <p>
                Find all Global and local Educational Events you can attend.
                Getting more exposure and insights into your Career is never
                out of our trend
              </p>
            </div>
            <div className="card-color" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid bg-primary text-light pt-3">
      <h3>LATEST NEWS</h3>
      <div className="row">
        <div className="col-md-4 text-dark m-3">
          <div className="card" style={{width: '36rem'}}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>March 30,2021</h5>
                <span>Unilag releases their cut off mark for 2021/2022 Academic
                  session</span>
              </li>
              <li className="list-group-item">
                <h5>MARCH 25, 2021</h5>
                <span>Lagos State University releases its supplementary admission
                  list for 2018/2019 Academic session</span>
              </li>
              <li className="list-group-item">
                <h5>MARCH 10, 2021</h5>
                <span>Obafemi awolowo university commences admission process for
                  the 2019/2020 session</span>
              </li>
              <li className="list-group-item">
                <h5>FEBRUARY 25, 2021</h5>
                <span>Lagos State Scholarship has released new beneficiaries for
                  the 2019/2020 session.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 sm-3 m-5 pt-5">
          <p style={{fontSize: '1.5em'}}>
            Do you want to be the first to recieve information about offers,
            services, scholarships, educational materials and general updates?
            then sign up for our Monthly news letter
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid bg-light text-dark text-center pt-5">
      <h5>VITRUAL TOUR</h5>
      <div className="container">
        <p style={{fontSize: 24}}>
          Do you want to know what it feels like to study in your most
          preffered university? or you simply dont know how to navigate your
          preffered institution? worry no more as we’ve got you covered
          through the process. choose a university and start your virtual
          tour.
        </p>
      </div>
      {/* ========slider========= */}
      <div className="c-wrapper">
        <div id="carouselExampleIndicators" className="carousel slide m-auto" data-ride="carousel">
          <ol className="carousel-indicators m-auto">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-30 m-auto" src="./img/14255046894431.jpg" alt="First slide" />
              <p>GRADUANDS FROM THE UNIVERSITY OF LAGOS</p>
            </div>
            <div className="carousel-item">
              <img className="d-block w-30 m-auto" src="./img/book.jpg" alt="Second slide" />
              <p>EDUCATION IS THE BEST LEGACY</p>
            </div>
            <div className="carousel-item">
              <img className="d-block w-30 m-auto" src="./img/Olabisi-Onabanjo-University-Gate.jpg" alt="Third slide" />
              <p>OLABISI ONABANJO UNIVERSITY</p>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid text-center pt-5">
      <h5>REVIEWS FROM OUR PAST USERS</h5>
      <div className="c-wrapper">
        <div id="carouselExampleIndicators" className="carousel slide m-auto" data-ride="carousel">
          <ol className="carousel-indicators m-auto">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="col-md-4 m-auto">
                <div className="card card-body">
                  <img className="img-fluid w-10 rounded" src="./img/man.jpg" alt />
                  <h3 className="text-center">Emmanuel</h3>
                  <span>Mass Communication</span>
                  <div className="card-body">
                    <p>
                      Expertise and professionalism at its peak. Youths and
                      Careers was responsible for making my search for a
                      perfect university and course seamless. They possess.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4 m-auto">
                <div className="card card-body">
                  <img className="img-fluid w-20" src="./img/woman.jpg" alt />
                  <h3 className="text-center">Emmanuel</h3>
                  <span>Computer Science</span>
                  <div className="card-body">
                    <p>
                      Expertise and professionalism at its peak. Youths and
                      Careers was responsible for making my search for a
                      perfect university and course seamless. They possess.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-4 m-auto">
                <div className="card card-body">
                  <img className="img-fluid w-20" src="./img/student.jpg" alt />
                  <h3 className="text-center">Emmanuel</h3>
                  <span>Mass Communication</span>
                  <div className="card-body">
                    <p>
                      Expertise and professionalism at its peak. Youths and
                      Careers was responsible for making my search for a
                      perfect university and course seamless. They possess.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="card" style={{width: '24rem'}}>
            <div className="card-body">
              <h5 className="card-title">YOUR FIRST POINT OF CONTACT</h5>
              {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Detailed Information about brochures and forms can be mail to
                you upon request
              </p>
              <p className="card-text">
                Request to have a one on one chat with an undergraduate in you
                field ?
              </p>
              <a href="#" className="card-link"><div className="btn btn-primary">Request</div></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="card" style={{width: '24rem'}}>
            <div className="card-body">
              <h5 className="card-title">UPCOMING GLOBAL EVENT</h5>
              {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <p className="card-text">
                Detailed Information about brochures and forms can be mail to
                you upon request
              </p>
              <p className="card-text">
                Request to have a one on one chat with an undergraduate in you
                field ?
              </p>
              <a href="#" className="card-link"><div className="btn btn-primary">Request</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid links">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-3 sm-3">
            <ul className="nav-link">
              <li><a href="#" className="nav-item active">About Us</a></li>
              <li><a href="#" className="nav-item">Our Partner</a></li>
              <li><a href="#" className="nav-item">Advertise</a></li>
              <li><a href="#" className="nav-item">Get Involved</a></li>
            </ul>
          </div>
          <div className="col-md-3 sm-3">
            <ul className="nav-link">
              <li><a href="#" className="nav-item active">Resources</a></li>
              <li><a href="#" className="nav-item">Blog</a></li>
              <li><a href="#" className="nav-item">Vitrual Tour</a></li>
              <li><a href="#" className="nav-item">Tutorial</a></li>
              <li><a href="#" className="nav-item">Accomodation</a></li>
            </ul>
          </div>
          <div className="col-md-3 sm-3">
            <ul className="nav-link">
              <li><a href="#" className="nav-item active">Connect</a></li>
              <li><a href="#" className="nav-item">Facebook</a></li>
              <li><a href="#" className="nav-item">Instagram</a></li>
              <li><a href="#" className="nav-item">Whatsapp</a></li>
              <li><a href="#" className="nav-item">Linkedin</a></li>
            </ul>
          </div>
          <div className="col-md-3 sm-3">
            <ul className="nav-link">
              <li><a href="#" className="nav-item active">Services</a></li>
              <li><a href="#" className="nav-item">Advice</a></li>
              <li><a href="#" className="nav-item">Scholarship</a></li>
              <li><a href="#" className="nav-item">Virtual Tour</a></li>
              <li><a href="#" className="nav-item">Global event</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p>Terms and Condition</p>
    </div>
  </section>
  <footer>
    <div className="container-fluid center">
      <div className="container">
        <div className="row">
          <p>
            <i className="fa fa-copyright" aria-hidden="true" /> 2021-2025
            Youths and Career
          </p>
          <div className="container">
            <div className="row p-3 ">
              <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
              <i className="fa fa-instagram fa-2x" aria-hidden="true" />
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  )
}