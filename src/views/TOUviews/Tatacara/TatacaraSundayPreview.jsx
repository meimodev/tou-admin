import React, { Component } from 'react';
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
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form
} from "reactstrap";
import { CustomPDFviewer } from '../CustomPDFviewer';


class TatacaraSundayPreview extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h4>Tatacara Ibadah Minggu</h4>
                <span className="text-muted"> Edisi </span><span>Minggu, 19 November 2010</span>
              </CardHeader>
              <CardBody>
                <CustomPDFviewer
                  fileUrl="http://startupwoman.org/files/pdf-sample(1).pdf"
                  powerPointUrl="http://localhost:3000/assets/pdf/ppt-test.ppt"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default TatacaraSundayPreview;