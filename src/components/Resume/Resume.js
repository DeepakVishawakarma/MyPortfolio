import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Deepak_Resume.pdf";
import Pic from "../../Assets/Deepak.png";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container
        style={{
          justifyContent: "Right",
          alignItems: "Right",
          minHeight: "78vh",
        }}
      >
        <Row
          className="resume"
          style={{ justifyContent: "center", position: "relative" }}
        >
          <img src={Pic} alt="about" className="img-fluid" />
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
