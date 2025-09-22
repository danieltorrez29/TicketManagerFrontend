import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const TicketView = () => {
  const [validated, setValidated] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [appointments, setAppointments] = useState([]); // Array para almacenar los resultados
  const [success, setSuccess] = useState(false); // Estado para mensaje de éxito

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // Almacenar los valores en el array
      const newAppointment = {
        room: selectedRoom,
        dateTime: dateTime,
      };
      setAppointments([...appointments, newAppointment]);

      // Resetear el formulario y los estados
      setSelectedRoom("");
      setDateTime("");
      setValidated(false);
      setSuccess(true); // Mostrar mensaje de éxito

      console.log("New Appointment:", newAppointment);
      console.log("All Appointments:", appointments);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <div className="center-container">
        <Card
          style={{
            width: "35rem",
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
              View ticket status
            </Card.Title>
            <div style={{ margin: "10px" }}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalAddress"
                >
                  <div>
                    <Form.Label
                      column
                      sm={4}
                      style={{ color: "#23294B", fontWeight: "bold" }}
                    >
                      Room or outbuilding
                    </Form.Label>
                  </div>

                  <Col sm={15}>
                    <Row className="justify-content-center">
                      <Col sm={15}>
                        <div className="input-group">
                          <Form.Control
                            required
                            className="form-control"
                            placeholder="Search..."
                          />
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-search"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                          </span>
                        </div>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Invalid.</Form.Control.Feedback>
                      </Col>
                    </Row>
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
                    Search
                  </Button>
                </div>
                {/*Mensaje */}
                {success && (
                  <div className="text-center mt-3" style={{ backgroundColor: "rgb(236, 226, 177)", padding: "5px", borderRadius: "10px", width: "70%", margin: "auto" }}>
                  <div style={{ color: "black" }}>
                    There is no shift assigned to your name in <br /> the outbuilding entered.
                  </div>
                </div>
                )}
              </Form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TicketView;
