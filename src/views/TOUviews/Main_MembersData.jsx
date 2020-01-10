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
    Input,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import {CustomMemberDataTableRow} from '../TOUCustomComponent/CustomTableRow'
import RequestHandlerFunctions from "./RequestHandler";
import axios from 'axios';
import CustomPaginationItem from "../TOUCustomComponent/CustomPaginationItem";

export class Main_MembersData extends Component {
    state = {
        church_id: 1,
        rows: [],
        env_currentPage: 1,
        env_perPage: 5,
        env_minimumButtonsCount: 5,

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
        env_isPreviousButtonVisible: false,
        env_isNextButtonVisible: false,
    }

    handleTryAgain = event => {
        event.preventDefault()
        this.state.env_onTryAgain()
    }

    componentDidMount() {
        let url = RequestHandlerFunctions.generateLocalURLFromPath('/panel-member-data/' + this.state.church_id + '?per=' + this.state.env_perPage + '&page=' + this.state.env_currentPage)
        this.fetchMemberDataPage(url)
    }

    fetchMemberDataPage = (url) => {
        console.log(url)
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_onTryAgain: null,
        })
        axios.get(
            url,
            RequestHandlerFunctions.generateDefaultConfig())
            .then(res => {
                let data = res.data
                console.log('OK! fetching whole church members data')
                console.log(data)
                this.setState({
                    env_currentPage: data.data.current_page,
                    env_lastPage: data.data.last_page,
                    env_firstPageUrl: data.data.first_page_url,
                    env_lastPageUrl: data.data.last_page_url,
                    env_nextPageUrl: data.data.next_page_url,
                    env_prevPageUrl: data.data.prev_page_url,
                    env_totalItems: data.data.total,
                    rows: data.data.data,
                    env_isLoading: false,
                    env_isError: false,
                })
                if (!this.state.env_indexJustRendered) {
                    if (this.state.env_lastPage < this.state.env_minimumButtonsCount) {
                        this.setState({
                            env_indexNextCount: this.state.env_lastPage,
                            env_indexJustRendered: this.state.env_lastPage,
                            env_isNextButtonVisible: false,
                        })
                    } else {
                        this.setState({
                            env_indexNextCount: this.state.env_minimumButtonsCount,
                            env_indexJustRendered: this.state.env_minimumButtonsCount,
                            env_isNextButtonVisible: true,
                        })
                    }
                }
            })
            .catch(err => {
                console.error('ERROR! fetching whole church members data')
                console.error(err)
                this.setState({
                    env_isLoading: false,
                    env_isError: true,
                    env_onTryAgain: () => this.fetchMemberDataPage(url)
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

        if (pagesLeftToRender <= this.state.env_minimumButtonsCount) this.setState({
            env_isNextButtonVisible: false
        })

    }

    handleOnClickPrevIndexes = (e) => {
        e.preventDefault()
        if (this.state.env_indexJustRendered - this.state.env_minimumButtonsCount <= 0) {
            this.setState({
                env_isPreviousButtonVisible: false,
            })
        }

        this.setState({
            env_currentLastPage: this.state.env_indexJustRendered - this.state.env_minimumButtonsCount,
            env_indexNextCount: this.state.env_minimumButtonsCount,
            env_isNextButtonVisible: true,
        })
    }

    handleOnIndexClicked = (e, pageNumber) => {
        e.preventDefault()
        let url = RequestHandlerFunctions.generateLocalURLFromPath('/panel-member-data/' + this.state.church_id + '?per=' + this.state.env_perPage + '&page=' + pageNumber)
        this.fetchMemberDataPage(url)
    }

    handlePerPageChange = e => {
        this.setState({
            env_perPage: e.target.value,
            env_currentPage: 1,
            env_indexJustRendered: 0,
        })
        let url = RequestHandlerFunctions.generateLocalURLFromPath('/panel-member-data/' + this.state.church_id + '?per=' + e.target.value + '&page=' + 1)
        this.fetchMemberDataPage(url)
    }

    render() {

        return RequestHandlerFunctions.generateRenderWithLoadingAndErrorHandling(
            this.state.env_isLoading,
            this.state.env_isError,
            this.state.env_error,
            this.handleTryAgain,
            <div className="animated fadeIn">
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h4>Data Anggota</h4>
                                </CardTitle>
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
                                        <th className="text-center">ID</th>
                                        <th>Data Keanggotaan</th>
                                        <th>Data Diri</th>
                                        <th className="text-center"/>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {this.state.rows.map((row, index) =>
                                        <CustomMemberDataTableRow
                                            key={index}
                                            memberId={row.member_id}
                                            fullName={row.full_name}
                                            BIPRA={row.BIPRA}
                                            baptizeLetterEntry={row.baptize_letter}
                                            sidiLetterEntry={row.sidi_letter}
                                            marriedLetterEntry={row.married_letter}
                                            sex={row.sex}
                                            DOB={row.DOB}
                                            age={row.age}
                                            column={row.column}
                                        />)
                                    }

                                    </tbody>
                                </Table>

                                <Row>

                                    <Col sm="12" md="10" lg="10">
                                        <Pagination className="mt-3">

                                            {/*<PaginationItem className="mr-3">*/}
                                            {/*    <PaginationLink>*/}
                                            {/*        <i className="fa fa-angle-double-up"/>*/}
                                            {/*    </PaginationLink>*/}
                                            {/*</PaginationItem>*/}

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


                                            {/*<PaginationItem className="ml-3">*/}
                                            {/*    <PaginationLink*/}
                                            {/*        onClick={() => this.setState({env_currentPage: this.state.env_lastPage})}>*/}
                                            {/*        <i className="fa fa-angle-double-down"/>*/}
                                            {/*    </PaginationLink>*/}
                                            {/*</PaginationItem>*/}


                                        </Pagination>
                                    </Col>
                                    <Col md="2" lg="2">
                                        <div className='my-auto text-primary pt-3 text-center pr-2 border-bottom border-primary'>
                                            <span className='text-muted'>Halaman </span> <strong>{this.state.env_currentPage}</strong>  <span
                                            className="text-muted">dari</span> <strong>{this.state.env_lastPage}</strong>
                                        </div>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main_MembersData;
