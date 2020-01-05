import React, {Component} from "react";
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
import {
    CustomMemberDataTableRow
} from '../TOUCustomComponent/CustomTableRow'
import CustomModalMemberData from "../TOUCustomComponent/CustomModalMemberData";

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
                                    {/*<Col className="my-auto">*/}
                                    {/*    <span className="text-muted">Kata kunci pencarian</span>*/}
                                    {/*    <Input*/}
                                    {/*        type="memberName"*/}
                                    {/*        name="memberName"*/}
                                    {/*        id="memberName"*/}
                                    {/*        placeholder="..."/>*/}
                                    {/*</Col>*/}
                                    {/*<Col className="text-right my-auto">*/}
                                    {/*  <Button className="" color="primary" ><i className="fa fa-plus mr-2 " ariaHidden="true" />*/}
                                    {/*    <strong> Tambah Anggota Baru</strong>*/}
                                    {/*  </Button>*/}
                                    {/*</Col>*/}
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
                                        <th className="text-center"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <CustomMemberDataTableRow
                                    />
                                    <CustomMemberDataTableRow
                                    />

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
