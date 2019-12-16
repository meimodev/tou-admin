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
  Form,
  FormGroup,
  Input
} from "reactstrap";

export class Main_MembersData extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4>Data Anggota</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Row xs="2" className="mr-2 ml-1 mt-2 mb-2">
                <Col className="my-auto">
               <span className="text-muted">Kata kunci pencarian</span> 
                  <Input
                    type="memberName"
                    name="memberName"
                    id="memberName"
                    placeholder="..." />
                </Col>
                <Col className="text-right my-auto">
                  <Button className="" color="primary" ><i className="fa fa-plus mr-2 " ariaHidden="true" />
                    <strong> Tambah Anggota Baru</strong>
                  </Button>
                </Col>
              </Row>

              <Table
                id="table"
                hover
                responsive
                className="table-outline mb-0 d-none d-sm-table display">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">ID</th>
                    <th>Data Keanggotaan</th>
                    <th>Data Diri</th>
                    <th className="text-center">Operasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center text-muted">1</td>

                    <td>
                      <div>Drs. Full Fcking Name, S.Pd, M.Pd</div>
                      <div className="small "><strong>Pria / Kaum Bapa</strong> </div>
                      <div className="small text-muted">
                        <span>Baptis</span> <span className="badge badge-success ml-1 mr-1">&#10003;</span> 2018/1/AOR.TON/SB/331
                      </div>
                      <div className="small text-muted">
                        <span>Sidi</span> <span className="badge badge-success ml-1 mr-1">&#10003;</span> 2018/1/AOR.TON/SB/331
                      </div>
                      <div className="small text-muted">
                        <span>Nikah</span> <span className="badge badge-danger ml-1 mr-1">&#10005;</span> -
                      </div>
                    </td>

                    <td>
                      <div>Laki - Laki</div>
                      <div>
                        <span className="small text-muted"> 14 November 1988</span> |
                        <span className="small text-muted"> 24 Tahun</span>
                      </div>
                    </td>

                    <td>
                      <div className="text-center">
                        <Button color="danger" className="ml-1 mr-1" size="sm"><i className="fa fa-minus" ariaHidden="true" /> hapus</Button>
                        <Button color="success" className="ml-1 mr-1" size="sm"><i className="fa fa-pencil" ariaHidden="true" /> ubah</Button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main_MembersData;
