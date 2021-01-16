import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  CardPlaceholder,
  TextBlockPlaceholder,
} from "@components/placeholders";
import WelcomeCardPlaceholder from "./WelcomeCardPlaceholder";
import ChannelListPlaceholder from "./ChannelListPlaceholder";

const ContainerPlaceholder = (
  <Container>
    <Row>
      <Col lg="8">
        <Row>
          <Col>
            <Row lg="12" style={{ marginBottom: 15 }}>
              <Col sm={6}>
                <TextBlockPlaceholder />
              </Col>
            </Row>
            <Row lg="12">
              <Col>
                <WelcomeCardPlaceholder />
              </Col>
            </Row>
            <Row>
              <Col xs="6" lg="6" className="d-block d-sm-none">
                <TextBlockPlaceholder />
              </Col>
              <Col xs="6" lg="6" className="d-block d-sm-none">
                <TextBlockPlaceholder />
              </Col>
            </Row>
            <Row lg="12">
              <Col>
                <ChannelListPlaceholder />
              </Col>
            </Row>
            <Row lg="12">
              <Col lg="6">
                <Row>
                  <Col xs="6" lg="12">
                    <CardPlaceholder />
                  </Col>
                  <Col>
                    <CardPlaceholder />
                  </Col>
                </Row>
              </Col>
              <Col lg="6">
                <CardPlaceholder rows={8} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col style={{ marginTop: 30 }} lg="4">
        <TextBlockPlaceholder rows={1} />
        <CardPlaceholder rows={17} />
      </Col>
    </Row>
  </Container>
);

export default ContainerPlaceholder;
