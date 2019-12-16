import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Page404 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{}} >
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Ups, Salah Jalan</h4>
                <p className="text-muted float-left">Halaman yang anda maksud mungkin berada diantara bintang-bintang</p>
                <div className="float-left">
                  <i className="spinner-border text-primary" />
                  <span className="text-muted align-items-enter m-2">  Memanggil NASA  <i className="fa fa-rocket"></i> </span>
                </div>
              </div>
              {/* <InputGroup className="input-prepend">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input size="16" type="text" placeholder="What are you looking for?" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Search</Button>
                </InputGroupAddon>
              </InputGroup> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;
