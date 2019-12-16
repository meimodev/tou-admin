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


class WartaPreview extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h4>Tinjau Warta Jemaat</h4>
                <span className="text-muted"> Edisi </span><span>Minggu, 19 November 2010</span>
              </CardHeader>
              <CardBody>

                <CustomPDFviewer
                  fileUrl="http://localhost:3000/assets/pdf/pdf-single.pdf"
                />

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default WartaPreview;