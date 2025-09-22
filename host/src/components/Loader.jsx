import React from "react";

import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        height: "100vh",
        background: "linear-gradient(to left, #ffffff 50%, #23294b 50%)",
        padding: 0,
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
