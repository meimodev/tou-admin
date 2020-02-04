import React, {Component} from 'react';
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
    Pagination,
    PaginationItem,
    PaginationLink,
    Form
} from "reactstrap";
import {CustomPDFviewer} from '../CustomPDFviewer';
import WartaDataHelper from "./WartaDataHelper";


class WartaPreview extends Component {

    state = {
        next_sunday: '',
    }

    handleOnNextSundayDateReceived = (next_sunday) =>{
        this.setState({next_sunday: next_sunday})
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Tinjau Warta Jemaat</h4>
                                <span className="text-muted"> Edisi </span><span className='animated fadeIn'>{this.state.next_sunday}</span>
                            </CardHeader>
                            <CardBody className='animated fadeIn'>
                                <div className='alert alert-warning'>
                                    <i className='icon-info pr-1'/> Untuk Diketahui:
                                    <ul>
                                        <li>Warta jemaat di susun dari kumpulan data yang di ambil pada setiap
                                            masing-masing operasi pengajuan yang berhubungan
                                        </li>
                                        {/*<li>Data warta jemaat rampung tepat pukul 11:59 pada hari sabtu sebelum hari*/}
                                        {/*    terbit, data yang di dapat setelah itu, dihitung masuk warta terbitan*/}
                                        {/*    selanjutnya*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>

                                <div className='alert alert-danger'>
                                    <i className='fa fa-warning text-danger pr-1'/> AKAN SEGERA HADIR! fitur automasi pembuatan
                                    warta jemaat <i className='fa fa-warning text-danger pr-1'/> berikut data yang sekiranya bisa
                                    membantu dalam pembuatan warta jemaat
                                </div>

                                <WartaDataHelper
                                    onNextSundayDateReceived={this.handleOnNextSundayDateReceived}
                                />
                                {/*<CustomPDFviewer fileUrl="http://localhost:3000/assets/pdf/pdf-single.pdf"/>*/}

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default WartaPreview;