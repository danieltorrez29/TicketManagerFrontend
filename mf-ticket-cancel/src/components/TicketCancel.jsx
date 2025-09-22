import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiTrash } from 'react-icons/bi';
import "../index.css";

const InfoUser = () => {
  const [validated, setValidated] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault(); 

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      const newAppointment = {
        room: selectedRoom,
        dateTime: dateTime,
      };
      setAppointments([...appointments, newAppointment]);

      setSelectedRoom("");
      setDateTime("");
      setValidated(false);
      setSuccess(true);

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
            Appointment cancellation
          </Card.Title>
          <div style={{ margin: "10px" }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                  Date and time *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="form-control"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Invalid Date and time.
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
                  Search
                </Button>
              </div>
              {/*Mensaje */}
              {
                success && (
                  <>
                    <div className="text-center mt-3" style={{ color: "green" }}>
                      A shift has been assigned to your name on the<br/>selected date and time.  With ticket AUU123
                    </div>
                    <div className="text-center mt-3">
                      <Col sm={12} className="d-flex justify-content-center align-items-center">
                        <Form.Control required type="text" placeholder="AUU123         09-05-24        1:30 a.m        Office05" className="input-bloqueado" disabled />
                        <Button variant="link" style={{ marginLeft: '10px' }}>
                          <BiTrash style={{ color: 'red' }} />
                        </Button>
                      </Col>
                    </div>
                  </>
                )
              }
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoUser
