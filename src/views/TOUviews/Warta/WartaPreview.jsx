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


class WartaPreview extends Component {

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Tinjau Warta Jemaat</h4>
                                <span className="text-muted"> Edisi </span><span>Minggu, 19 November 2010</span>
                            </CardHeader>
                            <CardBody>
                                <div className='alert alert-warning'>
                                    <i className='icon-info pr-1'/> Untuk Diketahui:
                                    <ul>
                                        <li>Warta jemaat di susun dari kumpulan data yang di ambil pada setiap
                                            masing-masing operasi pengajuan yang berhubungan
                                        </li>
                                        <li>Data warta jemaat rampung tepat pukul 11:59 pada hari sabtu sebelum hari
                                            terbit, data yang di dapat setelah itu, dihitung masuk warta terbitan
                                            selanjutnya
                                        </li>
                                    </ul>
                                </div>

                                <CustomPDFviewer fileUrl="http://localhost:3000/assets/pdf/pdf-single.pdf"/>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default WartaPreview;