import React from "react";
import styles from "./style.module.css";
import { Row, Col } from "react-bootstrap";
import Title from "../Title";
import Card from "../Card";

function Mission() {
  return (
    <div id="mission">
      <Card>
        <div className={styles.mission}>
          <div className={styles.content}>
            <Title title="What is our mission" />
            <h2 className={styles.moto}>
              It’s our to ambition harness the power of AI to Help visiualy
              impaired people integrate school better with custom builed
              Hardware and Software that is{" "}
              <span className={styles.dot}>:</span>
            </h2>
          </div>
          <Row className={styles.row}>
            <Col className={styles.col} xs={4}>
              <img
                className={styles.icons}
                src="icons/User.svg"
                alt="user friendly"
              />
            </Col>
            <Col className={styles.col} xs={4}>
              <img
                className={styles.icons}
                src="icons/Engage.svg"
                alt="user friendly"
              />
            </Col>
            <Col className={styles.col} xs={4}>
              <img
                className={styles.icons}
                src="icons/Include.svg"
                alt="user friendly"
              />
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default Mission;
