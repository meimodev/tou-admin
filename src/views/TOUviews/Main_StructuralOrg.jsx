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
    Input, Pagination, PaginationItem, PaginationLink
} from "reactstrap";
import CustomPaginationItem from "../TOUCustomComponent/CustomPaginationItem";

// TODO add Filter feature or sorting feature and pagination probably
export class Main_StructuralOrg extends Component {

    state = {
        church_id: 1,
        rows: [],
        env_currentPage: 1,
        env_perPage: 5,
        env_minimumIndexButtonsCount: 5,

        env_isPreviousButtonVisible: false,
        env_isNextButtonVisible: false,
        env_currentLastPage: '',
        env_lastPage: '',
        env_firstPageUrl: '',
        env_lastPageUrl: '',
        env_nextPageUrl: '',
        env_prevPageUrl: '',
        env_totalItems: '',
        env_indexNextCount: '',
        env_indexJustRendered: '',

        env_isLoading: true,
        env_isError: false,
        env_onTryAgain: null,
        env_error: null,

        env_positionList: []
    }

    handleTryAgain = event => {
        event.preventDefault()
        this.state.env_onTryAgain()
    }

    fetchStructureOrganizationData = (url) => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        Axios.get(
            url,
            RequestHandler.generateDefaultConfig())
        .then(res => {
            let data = res.data
            this.setState({
                env_currentPage: data.data.current_page,
                env_lastPage: data.data.last_page,
                env_firstPageUrl: data.data.first_page_url,
                env_lastPageUrl: data.data.last_page_url,
                env_nextPageUrl: data.data.next_page_url,
                env_prevPageUrl: data.data.prev_page_url,
                env_totalItems: data.data.total,

                rows: data.data.data,
                env_positionList: data.data.churchPositionList,
                env_isLoading: false,
                env_isError: false,
                env_error: null,
            })
            if (!this.state.env_indexJustRendered) {
                if (this.state.env_lastPage < this.state.env_minimumIndexButtonsCount) {
                    this.setState({
                        env_indexNextCount: this.state.env_lastPage,
                        env_indexJustRendered: this.state.env_lastPage,
                        env_isNextButtonVisible: false,
                    })
                } else {
                    this.setState({
                        env_indexNextCount: this.state.env_minimumIndexButtonsCount,
                        env_indexJustRendered: this.state.env_minimumIndexButtonsCount,
                        env_isNextButtonVisible: true,
                    })
                }
            }
        })
        .catch(err => {
            this.setState({
                env_isLoading: false,
                env_isError: true,
                env_error: err,
                env_onTryAgain: this.fetchStructureOrganizationData
            })
        })
    }

    componentDidMount() {
        let url = RequestHandler.generateLocalURLFromPath('/panel-structure-organization/' + this.state.church_id + '?per=' + this.state.env_perPage + '&page=' + this.state.env_currentPage)
        this.fetchStructureOrganizationData(url)
    }

    handleOnAlterPosition = (type, index, position, memberId, columnId) => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        // this.setState({env_isError: false, env_isLoading: true})
        Axios.post(RequestHandler.generateLocalURLFromPath('/panel-structure-organization'),
            {type, position, member_id: memberId, column_id: columnId},
            RequestHandler.generateDefaultConfig())
        .then(res => {
            let data = res.data.data

            this.fetchStructureOrganizationData(
                RequestHandler.generateLocalURLFromPath(
                    '/panel-structure-organization/' + this.state.church_id + '?per=' + this.state.env_perPage + '&page=' + this.state.env_currentPage
                )
            )

            this.setState({
                env_isError: false,
                env_isLoading: false,
                env_error: null
            })
        })
        .catch(err => {
            this.setState({
                env_isError: true,
                env_isLoading: false,
                env_error: err,
                env_onTryAgain: () => this.handleOnAlterPosition(type, index, position, memberId, columnId)
            })
        })
    }

    generatePaginationIndexes = (indexStart, count) => {
        let res = []
        for (let i = 0; i < count; i++) {
            if ((indexStart + 1) == this.state.env_currentPage) {
                res.push(
                    <CustomPaginationItem
                        key={i}
                        isActive={true}
                        pageNumber={indexStart + 1}
                        onIndexClicked={this.handleOnIndexClicked}
                    />
                )
            } else {
                res.push(
                    <CustomPaginationItem
                        key={i}
                        isActive={false}
                        pageNumber={indexStart + 1}
                        onIndexClicked={this.handleOnIndexClicked}
                    />
                )
            }
            indexStart++
        }

        return res
    }

    handleOnClickNextIndexes = (e) => {
        e.preventDefault()
        let totalPage = this.state.env_lastPage
        let pagesLeftToRender = totalPage - this.state.env_indexJustRendered

        this.setState({
            env_currentLastPage: this.state.env_indexJustRendered,
            env_indexNextCount: pagesLeftToRender,
            env_isPreviousButtonVisible: true,
        })

        if (pagesLeftToRender <= this.state.env_minimumIndexButtonsCount) this.setState({
            env_isNextButtonVisible: false
        })

    }

    handleOnClickPrevIndexes = (e) => {
        e.preventDefault()
        if (this.state.env_indexJustRendered - this.state.env_minimumIndexButtonsCount <= 0) {
            this.setState({
                env_isPreviousButtonVisible: false,
            })
        }

        this.setState({
            env_currentLastPage: this.state.env_indexJustRendered - this.state.env_minimumIndexButtonsCount,
            env_indexNextCount: this.state.env_minimumIndexButtonsCount,
            env_isNextButtonVisible: true,
        })
    }

    handleOnIndexClicked = (e, pageNumber) => {
        e.preventDefault()
        let url = RequestHandler.generateLocalURLFromPath('/panel-structure-organization/' + this.state.church_id + '?per=' + this.state.env_perPage + '&page=' + pageNumber)
        this.fetchStructureOrganizationData(url)
    }

    handlePerPageChange = e => {
        this.setState({
            env_perPage: e.target.value,
            env_currentPage: 1,
            env_indexJustRendered: 0,
        })
        let url = RequestHandler.generateLocalURLFromPath('/panel-structure-organization/' + this.state.church_id + '?per=' + e.target.value + '&page=' + 1)
        this.fetchStructureOrganizationData(url)
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
                            <Row className="mb-2">

                                <Col sm="4" md="8" lg="8">
                                    {/*<div className="text-center my-auto">*/}
                                    {/*    Jumlah Data Anggota 15*/}
                                    {/*</div>*/}
                                </Col>
                                <Col sm="4" md="4" lg="4">
                                    <span className="small text-muted pr-2">Jumlah Data Yang ditampilkan </span>
                                    <Input className='text-primary' type='select' bsSize="sm" value={this.state.env_perPage}
                                           onChange={this.handlePerPageChange}>
                                        <option className='text-primary' value='1'>1</option>
                                        <option className='text-primary' value='2'>2</option>
                                        <option className='text-primary' value='3'>3</option>
                                        <option className='text-primary' value='5'>5</option>
                                        <option className='text-primary' value='10'>10</option>
                                        <option className='text-primary' value='20'>20</option>
                                        <option className='text-primary' value='50'>50</option>
                                        <option className='text-primary' value='100'>100</option>
                                    </Input>
                                </Col>
                            </Row>
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
                                    this.state.rows.map((e, index) =>
                                        <CustomOrganizationTableRow
                                            key={index}
                                            rowIndex={index}
                                            id={e.member_id}
                                            columnId={e.column_id}
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

                            <Row>
                                <Col sm="12" md="10" lg="10">
                                    <Pagination className="mt-3">
                                        {this.state.env_isPreviousButtonVisible ?
                                            <PaginationItem className="mr-3 animated fadeIn">
                                                <PaginationLink onClick={this.handleOnClickPrevIndexes}>
                                                    <i className="fa fa-angle-double-left"/>
                                                </PaginationLink>
                                            </PaginationItem>
                                            : null
                                        }

                                        {this.generatePaginationIndexes(this.state.env_currentLastPage, this.state.env_indexNextCount)}

                                        {this.state.env_isNextButtonVisible ?
                                            <PaginationItem className="ml-3 animated fadeIn">
                                                <PaginationLink onClick={this.handleOnClickNextIndexes}>
                                                    <i className="fa fa-angle-double-right"/>
                                                </PaginationLink>
                                            </PaginationItem>
                                            : null
                                        }

                                    </Pagination>
                                </Col>
                                <Col md="2" lg="2">
                                    <div className='my-auto text-primary pt-3 text-center pr-2 border-bottom border-primary'>
                                        <span className='text-muted'>Halaman </span> <strong>{this.state.env_currentPage}</strong>
                                        <span
                                            className="text-muted">dari</span> <strong>{this.state.env_lastPage}</strong>
                                    </div>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Main_StructuralOrg;
