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


class TatacaraSundayPreview extends Component {

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <h4>Tatacara Ibadah Minggu</h4>
                                <span className="text-muted"> Edisi </span><span></span>
                            </CardHeader>
                            <CardBody>
                                <div className='alert alert-warning'>
                                    <i className='icon-info pr-1'/> Untuk Diketahui:
                                    <ul>
                                        <li>Tatacara sesuai usulan MTPJ yang bersangkutan
                                        </li>
                                        <li>Power point berdasarkan Tatacara yang ditampilkan
                                        </li>
                                    </ul>
                                </div>
                                <div className='alert alert-danger'>
                                    <i className='fa fa-warning pr-1'/> Fitur ini sedang dalam perbaikan

                                </div>
                                {/*<CustomPDFviewer*/}
                                {/*    fileUrl="http://startupwoman.org/files/pdf-sample(1).pdf"*/}
                                {/*    powerPointUrl="http://localhost:3000/assets/pdf/ppt-test.ppt"*/}
                                {/*/>*/}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TatacaraSundayPreview;