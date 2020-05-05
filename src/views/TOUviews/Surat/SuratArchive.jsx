import React, {Component} from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import axios from "axios";
import RequestHandlerFunctions from "../RequestHandler";

export class SuratArchive extends Component {

    state = {
        data: [],

        env_isLoading: true,
        env_isError: false,
        env_onTryAgain: null,
        env_error: null,
    }

    fetchData = () => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_onTryAgain: null,
            env_error: null,
        })
        axios.get(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-papers-archive/' + sessionStorage.getItem('church_id')),
            RequestHandlerFunctions.generateDefaultConfig())
        .then(res => {
            console.log('OK! server responded')
            console.log(res.data.data)

            this.setState({
                data: res.data.data,
                env_isLoading: false,
                env_isError: false,
                env_onTryAgain: null,
                env_error: null,
            })

        })
        .catch(err => {
            console.log('ERROR! server responded error')
            this.setState({
                env_isLoading: false,
                env_isError: true,
                env_onTryAgain: this.fetchData,
                env_error: err,
            })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleOnClick = (e,link) => {
      e.preventDefault()

      // console.log('LINK = '+link)
      window.open(link,'popUpWindow','height=400,width=600,left=50,top=50,,scrollbars=yes,menubar=no')

    }

    render() {
        return RequestHandlerFunctions.generateRenderWithLoadingAndErrorHandling(
            this.state.env_isLoading,
            this.state.env_isError,
            this.state.env_error,
            this.handleTryAgain,
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Arsip Surat</h4>
                            </CardHeader>
                            <CardBody>
                              {this.state.data.length === 0 ?
                                  <div className="alert alert-info" role="alert">
                                    <i className='fa fa-info-circle pr-2'/> Data tidak ditemukan
                                  </div>
                                  :
                                  <Table responsive bordered hover>
                                    <thead>
                                    <tr>
                                      <th className="text-center text-muted">#</th>
                                      <th className="text-center">Tentang</th>
                                      <th className="text-center">Nomor Surat</th>
                                      <th className="text-center">Tanggal Terbit</th>

                                      <th className="text-center">Operasi</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {this.state.data.map((d, index) => {
                                      return <tr key={index}>
                                        <td className="text-center text-muted">{index + 1}</td>
                                        <td className="text-center">{d.about}</td>
                                        <td className="text-center">{d.entry}</td>
                                        <td className="text-center">{d.publish}</td>

                                        <td className="text-center">
                                          <Button onClick={(e) => this.handleOnClick(e,d.link)} color="primary"><i
                                              className="fa fa-eye mr-1" aria-hidden="true"/>lihat</Button>
                                        </td>
                                      </tr>
                                    })
                                    }


                                    </tbody>
                                  </Table>
                              }

                                {/*<Pagination>*/}
                                {/*    <PaginationItem><PaginationLink previous tag="button"/></PaginationItem>*/}
                                {/*    <PaginationItem active>*/}
                                {/*        <PaginationLink tag="button">1</PaginationLink>*/}
                                {/*    </PaginationItem>*/}
                                {/*    <PaginationItem className="page-item"><PaginationLink*/}
                                {/*        tag="button">2</PaginationLink></PaginationItem>*/}
                                {/*    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>*/}
                                {/*    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>*/}
                                {/*    <PaginationItem><PaginationLink next tag="button"/></PaginationItem>*/}
                                {/*</Pagination>*/}
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default SuratArchive;
