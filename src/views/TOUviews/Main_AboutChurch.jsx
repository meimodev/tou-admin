import React, { Component } from 'react'

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

export class Main_AboutChurch extends Component {
  render() {
    return (
      <div className="animated fadeIn ">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h4>Tentang Gereja test</h4>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="churchName">Nama Gereja</Label>
                    <Input type="text" name="churchName" id="churchName" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="kabupatenKota">Kabupaten / Kota</Label>
                    <Input type="text" name="kabupatenKota" id="kabupatenKota" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="kecamatan">Kecamatan</Label>
                    <Input type="text" name="kecamatan" id="kecamatan" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="kelurahanDesa">Kelurahan / Desa</Label>
                    <Input type="text" name="kelurahanDesa" id="kelurahanDesa" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="telepon">Telepon</Label>
                    <Input type="text" name="telepon" id="telepon" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Alamat detil</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="nama jalan, no rumah, penunjuk" />
                  </FormGroup>
                </Form>
                <div>
                  <Button color="primary">Simpan</Button>
                </div>
              </CardBody>
            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Main_AboutChurch;
