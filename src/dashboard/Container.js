import React, { useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "@components";
import { ReactComponent as DoneMarkLogo } from "@assets/logos/donemark-logo.svg";
import {
  WelcomeCard,
  Button,
  InfoCard,
  ChannelList,
  Activity,
  Schedule,
} from "./components";
import { ReactComponent as ThunderIcon } from "@assets/icons/thunder.svg";
import { ReactComponent as PlusCircleIcon } from "@assets/icons/plus-circle.svg";
import {
  TitlePlaceholder,
  ContainerPlaceholder,
} from "./components/placeholders";

const Dashboard = () => {
  /** Dummy lag to show the placeholders */
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ReactPlaceholder
      ready={!isLoading}
      showLoadingAnimation={true}
      customPlaceholder={ContainerPlaceholder}
    >
      <Container>
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <Row lg="12" style={{ marginBottom: 15 }}>
                  <Col>
                    <Title text="Smart Connections™" icon={DoneMarkLogo} />
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
                <Row lg="12">
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
          <Col lg="4">
            <Row style={{ marginTop: 15 }}>
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
    </ReactPlaceholder>
  );
};

export default Dashboard;
