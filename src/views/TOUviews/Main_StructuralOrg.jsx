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
        env_onTryAgain: null,
        env_positionList: []
    }

    handleTryAgain = event => {
        event.preventDefault()


        this.state.env_onTryAgain()

    }

    fetchStructureOrganizationData = () => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        Axios.get(RequestHandler.generateLocalURLFromPath('/panel-structure-organization'), RequestHandler.generateConfigWithParameter({'church_id': 1}))
            .then(res => {
                let data = res.data.data
                console.log('get structure organization data')
                console.log(data)
                this.setState({data, env_isLoading: false, env_isError: false, env_error: null})
            })
            .catch(err => {
                console.error('error get structure organization data')
                console.error(err)
                this.setState({
                    env_isLoading: false,
                    env_isError: true,
                    env_error: err,
                    env_onTryAgain: this.fetchStructureOrganizationData
                })
            })
    }

    fetchPositionList = () => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
        })
        Axios.get(RequestHandler.generateLocalURLFromPath('/position-list'))
            .then(res => {
                let data = res.data.data
                console.log('get env position list data')
                console.log(data)
                this.setState({env_positionList: data}/*, env_isLoading: false, env_isError: false, env_error: null}*/)
            })
            .catch(err => {
                console.error('error get env position list data')
                console.error(err)
                this.setState({
                    env_isLoading: false,
                    env_isError: true,
                    env_error: err,
                    env_onTryAgain: this.fetchPositionList
                })
            })
    }

    componentDidMount() {
        this.fetchStructureOrganizationData()
        this.fetchPositionList()
    }

    handleOnAlterPosition = (type, index, position, memberId) => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        this.setState({env_isError: false, env_isLoading: true})
            Axios.post(RequestHandler.generateLocalURLFromPath('/panel-structure-organization'),
                {type, position, member_id: memberId},
                RequestHandler.generateDefaultConfig())
                .then(res => {
                    let data = res.data.data
                    console.log('OK! altered position of member with ID = ' + memberId)
                    console.log(data)
                    let d = this.state.data[index].positions
                    let stateData = [...this.state.data]
                    stateData[index].positions = data.positions
                    console.log(stateData)
                    this.setState({
                        env_isError: false,
                        env_isLoading: false,
                        env_error:null
                    })
                })
                .catch(err => {
                    console.error('ERROR! while altering position ')
                    console.error(err)
                    this.setState({
                        env_isError: true,
                        env_isLoading: false,
                        env_error:err,
                        env_onTryAgain: () => this.handleOnAlterPosition(type, index, position, memberId)
                    })
                })
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
                                    this.state.data.map((e, index) =>
                                        <CustomOrganizationTableRow
                                            key={index}
                                            rowIndex={index}
                                            id={e.member_id}
                                            memberName={e.full_name}
                                            column={"Kolom " + e.column}
                                            memberBIPRA={e.BIPRA}
                                            memberAge={e.age}
                                            isBaptize={e.is_baptize}
                                            isSidi={e.is_sidi}
                                            isMarried={e.is_married}
                                            positions={e.positions}
                                            env_positions={this.state.env_positionList}
                                            onAlterPosition={this.handleOnAlterPosition}
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
