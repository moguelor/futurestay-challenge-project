import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Title,
  WelcomeCard,
  Button,
  ChannelList,
  InfoCard,
} from "./components";
import { ReactComponent as DoneMarkLogo } from "../common/resources/logos/donemark-logo.svg";
import { ReactComponent as ThunderIcon } from "../common/resources/icons/thunder.svg";
import { ReactComponent as PlusCircleIcon } from "../common/resources/icons/plus-circle.svg";

const Dashboard = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "white" }}>I'm nav</nav>
      <Container>
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <Row lg="12">
                  <Col>
                    <Title label="Smart Connections™" icon={DoneMarkLogo} />
                  </Col>
                </Row>
                <Row lg="12">
                  <Col>
                    <WelcomeCard title={`Welcome back, Susan!`} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="6" lg="6" className="d-block d-sm-none">
                    <Button
                      type="outline"
                      text="Import a property"
                      icon={ThunderIcon}
                    />
                  </Col>
                  <Col xs="6" lg="6" className="d-block d-sm-none">
                    <Button
                      type="outline"
                      text="Add reservation"
                      icon={PlusCircleIcon}
                    />
                  </Col>
                </Row>
                <Row lg="12">
                  <Col>
                    <ChannelList />
                  </Col>
                </Row>
                <Row lg="12" style={{marginTop: 15}}>
                  <Col lg="6">
                    <Row>
                      <Col xs="6" lg="12">
                        <InfoCard
                          text="Bookings"
                          amount="63"
                          bgColor="#C8CBE6"
                          average="15%"
                          textButton="Details"
                        />
                      </Col>
                      <Col>
                        <InfoCard
                          text="Net revenue"
                          amount="$1523"
                          bgColor="#F4EEBF"
                          currency="USD"
                          average="12%"
                          textButton="View report"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="6">Activity</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <Col xs="6" lg="6" className="d-none d-sm-block">
                <Button
                  type="outline"
                  text="Import a property"
                  icon={ThunderIcon}
                  withoutBorder
                />
              </Col>
              <Col xs="6" lg="6" className="d-none d-sm-block">
                <Button
                  type="outline"
                  text="Add reservation"
                  icon={PlusCircleIcon}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>Schedule</Col>
                  <Col>Dropdown</Col>
                </Row>
                <Row>
                  <Col lg="12">Card 1</Col>
                  <Col lg="12">Card 2</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
