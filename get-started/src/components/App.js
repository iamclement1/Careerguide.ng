//import logo from "./logo.svg";
import "../App.css";
/*import { Container } from "react-bootstrap"; */
// import SignUp from "./signUp";
// import Header from "./Header";
import NavBar from "./NavBar";
// import MainSection1 from "./MainSection1";
// import MainSection2 from "./MainSection2";
// import Universities from "./Universities";

import Services from "./services/Services"
import Header2 from "./services/Header2.js"
function App() {
  return (
    <div className="header-section">
      {/* <NavBar></NavBar>
      <Header></Header>
      <MainSection1></MainSection1>
      <MainSection2></MainSection2>
      <Universities></Universities> */}
      <NavBar/>
      <Header2/>
      <Services/>
    </div>






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
