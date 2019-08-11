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

export class WartaPreview extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>Warta Preview Page</CardTitle>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WartaPreview;
