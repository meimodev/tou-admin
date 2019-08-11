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
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: "Item name " + id,
      price: 2100 + i
    });
  }
}
addProducts(5);

export class Main_MembersData extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h1>MEMBERS dATA Page</h1>
                </CardTitle>
              </CardHeader>

              <Table
                id="table"
                hover
                responsive
                className="table-outline mb-0 d-none d-sm-table display"
              >
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <i className="icon-people" />
                    </th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/1.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-success" />
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-us h4 mb-0"
                        title="us"
                        id="us"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="50"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-mastercard"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/2.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-br h4 mb-0"
                        title="br"
                        id="br"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="info"
                        value="10"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-visa"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/3.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-warning" />
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-in h4 mb-0"
                        title="in"
                        id="in"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="warning"
                        value="74"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-stripe"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/4.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-secondary" />
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-fr h4 mb-0"
                        title="fr"
                        id="fr"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="danger"
                        value="98"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-paypal"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/5.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-success" />
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-es h4 mb-0"
                        title="es"
                        id="es"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="info"
                        value="22"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-google-wallet"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img
                          src={"assets/img/avatars/6.jpg"}
                          className="img-avatar"
                          alt="admin@bootstrapmaster.com"
                        />
                        <span className="avatar-status badge-danger" />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <i
                        className="flag-icon flag-icon-pl h4 mb-0"
                        title="pl"
                        id="pl"
                      />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">
                            Jun 11, 2015 - Jul 10, 2015
                          </small>
                        </div>
                      </div>
                      <Progress
                        className="progress-xs"
                        color="success"
                        value="43"
                      />
                    </td>
                    <td className="text-center">
                      <i
                        className="fa fa-cc-amex"
                        style={{ fontSize: 24 + "px" }}
                      />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <BootstrapTable data={products}>
          <TableHeaderColumn dataField="id" isKey={true}>
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>

        <button className="btn btn-default" onClick={this.cleanSort}>
          Clean Sort
        </button>
        <BootstrapTable ref="table" data={products}>
          <TableHeaderColumn dataField="id" isKey dataSort>
            Product ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>
            Product Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>

        <div>
          <BootstrapTable data={products} options={this.options}>
            <TableHeaderColumn dataField="id" isKey={true} dataSort={true}>
              Product ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataSort={true}>
              Product Name
            </TableHeaderColumn>
            <TableHeaderColumn dataField="price">
              Product Price
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    );
  }
}

export default Main_MembersData;
