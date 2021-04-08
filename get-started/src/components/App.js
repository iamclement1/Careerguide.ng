//import logo from "./logo.svg";
//import "../App.css";
//import Footer from "./footer";
import { Container } from "react-bootstrap";
//import SignUp from "./signUp";
//import Header from "./Header";
import WorkWithUs from "./WorkWithUs";

function App() {
  return (
    <>
      <WorkWithUs />
    </>

    /*<div className="header-section">
      <Header></Header>
    </div>*/

    /* <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container> 
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{marginBottom: "20px" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>

      </Container>
      <Container
      style={{ marginTop: "70px" }}
      >      <div>
          <Footer />
        </div>

      </Container> 
    </>*/
  );
}

export default App;
