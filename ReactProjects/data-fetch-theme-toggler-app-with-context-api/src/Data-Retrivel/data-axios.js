import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";

function DataAxios() {
    const [details ,setDatails] = useState([])

    const fetchDetails = () =>{

    }
  return (
    <Container fluid className="p-4 bg-primary app">
      <Row>
        <Col md={4} className="offset-ms-4 mt-4">
          <Card>
            <CardBody className="text-center">
              <img
                height="150"
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src=""
              />
              <CardTitle className="text-primary">
                <h1>
                  <span className="pr-2">title</span>
                  <span>First Name</span>
                  <span>Last Name</span>
                </h1>
              </CardTitle>
              <CardText>


              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DataAxios;
