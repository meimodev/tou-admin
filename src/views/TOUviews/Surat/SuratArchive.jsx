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
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

export class SuratArchive extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
               <h4>Arsip Warta Jemaat</h4>
                  </CardHeader>
              <CardBody>
                <Table responsive bordered hover>
                  <thead>
                    <tr>
                      <th className="text-center text-muted">#</th>
                      <th className="text-center">Tanggal</th>
                      <th className="text-center">Bulan</th>
                      <th className="text-center">Tahun</th>
                      <th className="text-center">Operasi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">1</td>
                      <td className="text-center">10</td>
                      <td className="text-center">November</td>
                      <td className="text-center">2010</td>
                      <td className="text-center">
                        <Button color="primary"><i className="fa fa-eye mr-1" ariaHidden="true" />lihat</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">2</td>
                      <td className="text-center">5</td>
                      <td className="text-center">Januari</td>
                      <td className="text-center">2010</td>
                      <td className="text-center">
                        <Button color="primary"><i className="fa fa-eye mr-1" ariaHidden="true" />lihat</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">3</td>
                      <td className="text-center">23</td>
                      <td className="text-center">Desember</td>
                      <td className="text-center">2018</td>
                      <td className="text-center">
                        <Button color="primary"><i className="fa fa-eye mr-1" ariaHidden="true" />lihat</Button>
                      </td>
                    </tr>
                  
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button"></PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button"></PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default SuratArchive;