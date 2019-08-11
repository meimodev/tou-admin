import React, { Component } from "react";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";

export class Main_AboutChurch extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1>ABOUT CHURCH Page</h1>
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main_AboutChurch;
