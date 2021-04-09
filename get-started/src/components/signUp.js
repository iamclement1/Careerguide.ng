import React, { useState } from "react";
import loginImg from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

export default function SignUp() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const payload = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    passwordConfirm: user.passwordConfirm,
  };
  const sendPost = () => {
    axios
      .post("https://sh6-userdb.herokuapp.com/readuser.php", payload)
      .then(console.log(Response));
  };

  return (
    <>
      <Card style={{ overflow: "hidden" }}>
        <div className="text-center mb-4">
          <img
            src={loginImg}
            alt="logo"
            style={{ backgroundColor: "#0A1650" }}
          />
        </div>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={sendPost}>
            <Form.Group id="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="firstname"
                name="firstname"
                onChange={handleChange}
                required
                user={user}
              />
            </Form.Group>
            <Form.Group id="firstName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="lastname"
                name="lastname"
                onChange={handleChange}
                required
                user={user}
              />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                required
                user={user}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                required
                user={user}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                required
                user={user}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#0A1650" }}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Already have an account? Log in
        </div>
      </Card>
    </>
  );
}
