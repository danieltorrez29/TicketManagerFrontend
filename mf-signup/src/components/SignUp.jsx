import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    // localStorage.setItem("user-info", JSON.stringify(result))
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const user_id =
        event.target.elements.formHorizontalIdentificationNumber.value;
      const user_first_name = event.target.elements.formHorizontalName.value;
      const user_last_name = event.target.elements.formHorizontalLastName.value;
      const user_address = event.target.elements.formHorizontalAddress.value;
      const user_email = event.target.elements.formHorizontalEmail.value;
      const user_organization =
        event.target.elements.formHorizontalGridOrganization.value;
      const credential_password =
        event.target.elements.formHorizontalPassword.value;
      try {
        const bearer_token = await fetch(
          "http://localhost:9090/realms/TurnsManagementApp/protocol/openid-connect/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: "spring-client-api-rest",
              grant_type: "password",
              username: "juan.cepeda06@uptc.edu.co",
              password: "1234",
              client_secret: "sPXUY3dDrMi8NpSlTSXxe7lbXbGzCjEe",
            }),
          }
        );
        const bearer_token_data = await bearer_token.json();
        const access_token = bearer_token_data.access_token;

        const response = await fetch(
          "http://localhost:9091/keycloak/user/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify({
              user_id,
              user_first_name,
              user_last_name,
              user_address,
              user_email,
              user_organization,
              credential_password,
            }),
          }
        );
        if (!response.ok) {
          setError("User could not be created");
          setTimeout(() => setError(""), 3000);
          return;
        }
      } catch (error) {
        setError("User could not be created");
        setTimeout(() => setError(""), 3000);
      }
    }
    setValidated(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        style={{
          width: "40rem",
          backgroundColor: "#ECEBF4",
          borderRadius: "20px",
        }}
      >
        <Card.Body>
          <Card.Title
            className="text-center"
            style={{
              color: "#23294B",
              fontSize: "35px",
              fontWeight: "800",
              marginTop: "30px",
            }}
          >
            Sign up
          </Card.Title>
          <Card.Subtitle className="text-muted text-center">
            Please complete your information
          </Card.Subtitle>
          <div style={{ margin: "55px" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalIdentificationNumber"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  ID *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter identification number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid identification number.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Name *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control required type="text" placeholder="Enter name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalLastName"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Last Name *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter last name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid last name.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalAddress"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Address *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter an address"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid address.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Email *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter an email"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid email.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalGridOrganization"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Organization *
                </Form.Label>
                <Col sm={8}>
                  <Form.Select required>
                    <option value="">Select an organization</option>
                    <option value="UPTC">UPTC</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please select an organization.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Password *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter a password"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid password.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalRepeatPassword"
              >
                <Form.Label
                  column
                  sm={4}
                  style={{ color: "#23294B", fontWeight: "bold" }}
                >
                  Repeat Password *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Repeat password"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid password.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#23294B",
                    fontWeight: "bold",
                    width: "200px",
                    marginTop: "10px",
                  }}
                >
                  Sign up
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <span style={{ color: "#23294B" }}>
                  Already have an account?&nbsp;
                </span>
                <Link to={"/"} style={{ color: "#23294B", fontWeight: "bold" }}>
                  Log in
                </Link>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
