import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  Title,
  WelcomeCard,
  Button,
  ChannelList,
  InfoCard,
  Activity,
  Schedule,
  NavBar,
  Menu,
  MobileNavigation,
} from "./components";

import { ReactComponent as DoneMarkLogo } from "../common/resources/logos/donemark-logo.svg";
import { ReactComponent as ThunderIcon } from "../common/resources/icons/thunder.svg";
import { ReactComponent as PlusCircleIcon } from "../common/resources/icons/plus-circle.svg";
import { ReactComponent as BurgerIcon } from "../common/resources/menuIcons/burger.svg";

import MenuTest from "./components/MenuTest";

const Wrapper = styled.section`
  display: flex;
  ${({ isOpen }) => isOpen && "overflow: scroll"};

  .column1 {
  }

  .column2 {
    transition: transform 0.4s ease-out;
    transform: translate(${({ isOpen }) => (isOpen ? "175px" : "0px")}, 0);
    flex: 1;
    z-index: -1;
  }
`;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MenuTest handleClickOpenMenu={() => setIsOpen(true)} />
      <Wrapper isOpen={isOpen}>
        <MobileNavigation
          isOpen={isOpen}
          handleClickClose={() => setIsOpen(false)}
        />
        <section className="column2">
          <Container style={{ marginTop: 50 }}>
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
                    <Row lg="12" style={{ marginTop: 15 }}>
                      <Col lg="6">
                        <Row className="row-eq-height">
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
                      <Col lg="6">
                        <Activity />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col lg="4" style={{ marginTop: 10 }}>
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
                <Schedule />
              </Col>
            </Row>
          </Container>
        </section>
      </Wrapper>
    </div>
  );
};

export default Dashboard;
