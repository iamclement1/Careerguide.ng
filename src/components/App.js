//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from '../components/cards/Card';
import BodyOne from '../components/cards/BodyOne';

import { Container } from "react-bootstrap";
import SignUp from "./signUp";

function App() {
  return (
    <BrowserRouter>
    
    <Switch>
      <Route to="/" exact style={{display:"flex", flexDirection: "column"}}>
        <Card/>
        <BodyOne/>
      </Route>
      <Container
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <Route to="/signin">
      <div className="w-100d-flex align-items-center justify-content-center" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
      </Route>
      </Container>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
