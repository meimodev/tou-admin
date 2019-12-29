import React, { Component } from "react";
import {
  CustomOrganizationTableRow
} from '../TOUCustomComponent/CustomTableRow'

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
  Label,
  Input
} from "reactstrap";

export class Main_StructuralOrg extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <Card>
            <CardHeader>
              <h4>Struktur Organisasi Gereja</h4>
            </CardHeader>
            <CardBody>

              <Row xs="2" className="mr-2 ml-1  mb-2">
                <Col className="my-auto">
                  <span className="text-muted">Kata kunci pencarian</span>
                  <Input
                    type="memberName"
                    name="memberName"
                    id="memberName"
                    placeholder="..." />
                </Col>
                <Col className="text-right my-auto">

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
                    <th >Nama</th>
                    <th className="text-center">Posisi</th>
                    <th className="text-center">Operasi</th>
                  </tr>
                </thead>
                <tbody>

                  <CustomOrganizationTableRow
                    memberName="Jhony One"
                    column="Kolom 2"
                    memberBIPRA="Pria / Kaum Bapa"
                    memberAge={44}
                    isBaptize={true}
                    positions={[
                      "Ketua Jemaat", "Pendeta Jemaat", "Anggota Jemaat"
                    ]} />
                  <CustomOrganizationTableRow
                    memberName="Jose condios"
                    column="Kolom 7"
                    memberBIPRA="Pemuda"
                    memberAge={25}
                    isBaptize={true}
                    isSidi={true}
                    positions={[
                      "Sekretaris Jemaat", "Penatua 13", "Anggota Jemaat"
                    ]} />
                  <CustomOrganizationTableRow
                    memberName="Third Brie"
                    column="Kolom 92"
                    memberBIPRA="Wanita / Kaum Ibu"
                    memberAge={55}
                    isBaptize
                    isSidi
                    isNikah
                    positions={[
                      "Bendahara Jemaat", "Penatua 1", "Anggota Jemaat"
                    ]} />

                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default Main_StructuralOrg;
