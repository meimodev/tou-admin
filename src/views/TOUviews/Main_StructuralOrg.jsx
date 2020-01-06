import React, {Component} from "react";
import {
    CustomOrganizationTableRow
} from '../TOUCustomComponent/CustomTableRow'
import Axios from 'axios';
import RequestHandler from './RequestHandler'
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

// TODO add Filter feature or sorting feature and pagination probably
export class Main_StructuralOrg extends Component {

    state = {
        data: [],
        env_isLoading: true,
        env_isError: false,
        env_error: null,
        env_positionList: []
    }

    handleTryAgain = event => {
        event.preventDefault()
        this.setState({
            env_isLoading: true,
            env_isError: false,
        })
        this.fetchStructureOrganizationData()
        this.fetchPositionList()
    }

    fetchStructureOrganizationData = () => {
        Axios.get(RequestHandler.generateLocalURLFromPath('/panel-structure-organization'), RequestHandler.generateConfigWithParameter({'church_id': 1}))
            .then(res => {
                let data = res.data.data
                console.log('get structure organization data')
                console.log(data)
                this.setState({data})
                this.setState({env_isLoading: false, env_isError: false, env_error: null})
            })
            .catch(err => {
                console.log('error get structure organization data')
                console.log(err)
                this.setState({env_isLoading: false, env_isError: true, env_error: err})
            })
    }

    fetchPositionList = () => {
        Axios.get(RequestHandler.generateLocalURLFromPath('/position-list'))
            .then(res => {
                let data = res.data.data
                console.log('get env position list data')
                console.log(data)
                this.setState({env_positionList: data})
            })
            .catch(err => {
                console.log('error get env position list data')
                console.log(err)
                this.setState({env_isLoading: false, env_isError: true, env_error: null})
            })
    }

    componentDidMount() {
        this.fetchStructureOrganizationData()
        this.fetchPositionList()
    }

    render() {
        return RequestHandler.generateRenderWithLoadingAndErrorHandling(
            this.state.env_isLoading,
            this.state.env_isError,
            this.state.env_error,
            this.handleTryAgain,
            <div className="animated fadeIn">
                <div>
                    <Card>
                        <CardHeader>
                            <h4>Struktur Organisasi Gereja</h4>
                        </CardHeader>
                        <CardBody>

                            {/*<Row xs="2" className="mr-2 ml-1  mb-2">*/}
                            {/*  <Col className="my-auto">*/}
                            {/*    <span className="text-muted">Kata kunci pencarian</span>*/}
                            {/*    <Input*/}
                            {/*      type="memberName"*/}
                            {/*      name="memberName"*/}
                            {/*      id="memberName"*/}
                            {/*      placeholder="..." />*/}
                            {/*  </Col>*/}
                            {/*  <Col className="text-right my-auto"/>*/}
                            {/*</Row>*/}

                            <Table
                                id="table"
                                hover
                                responsive
                                className="table-outline mb-0 d-none d-sm-table display">
                                <thead className="thead-light">
                                <tr>
                                    <th className="text-center">Member ID</th>
                                    <th>Data Anggota</th>
                                    <th className="text-center">Posisi</th>
                                    <th className="text-center">Operasi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.map(d =>
                                        <CustomOrganizationTableRow
                                            key={d.user_id}
                                            id={d.member_id}
                                            memberName={d.full_name}
                                            column={"Kolom " + d.column}
                                            memberBIPRA={d.BIPRA}
                                            memberAge={d.age}
                                            isBaptize={d.is_baptize}
                                            isSidi={d.is_sidi}
                                            isMarried={d.is_married}
                                            positions={d.positions}
                                            env_positions={this.state.env_positionList}
                                        />)
                                }
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Main_StructuralOrg;
