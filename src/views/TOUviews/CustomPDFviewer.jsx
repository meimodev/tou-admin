import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
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
import ReactToPrint from 'react-to-print'
import { Document, Page, pdfjs } from 'react-pdf';
import {Alert} from "bootstrap/js/src";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class CustomPDFviewer extends Component {

    state = {
        loadSuccess: false,
        numPages: 0,
        pageNumber: 1
    };

    onDocumentLoadSuccess = ({ numPages }) => {

        this.setState({ numPages, pageNumber: 1, loadSuccess: true });
    };
    onRenderError = () => {
        return (
            <div className="animated fadeIn p-4 text-center my-auto">
                <span className="my-auto"><i className="cui-ban text-danger pr-2"/> Terjadi kesalahan silahkan muat ulang halaman</span>

                <div className="alert alert-warning mt-2" role="alert">
                    <i className="cui-lightbulb"/> jika anda menggunakan integrasi IDM (Internet download manager) file akan otomatis terdownload! <br/>
                    jika anda ingin menggunakan fitur bawaan system, silahkan blokir download otomatis di IDM untuk website ini
                </div>


            </div>
        )
    };
    onLoadingDocument = () => {
        return (
            <div className="animated fadeIn p-4 text-center my-auto">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Sedang Memuat ...</span>
                </div>
            </div>
        )
    };
    onLoadingPage = () => {
        return (
            <div className="animated fadeIn p-4 text-center my-auto">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Sedang Memuat ...</span>

                </div>
            </div>        )
    };


    nextPage = () => {

        const currentPageNumber = this.state.pageNumber;
        let nextPageNumber;

        if (currentPageNumber + 1 > this.state.numPages) {
            nextPageNumber = currentPageNumber;
        } else {
            nextPageNumber = currentPageNumber + 1;
        }

        this.setState({
            pageNumber: nextPageNumber
        });
    };

    prevPage = () => {
        const currentPageNumber = this.state.pageNumber;
        let prevPageNumber;

        if (currentPageNumber - 1 === 0) {
            prevPageNumber = 1;
        } else {
            prevPageNumber = currentPageNumber - 1;
        }

        this.setState({
            pageNumber: prevPageNumber
        });
    };

    render() {
        const { pageNumber, numPages } = this.state;
        const { fileUrl, powerPointUrl } = this.props;
        return (
            <div className="">
                {this.state.loadSuccess ?
                    <Row className="d-flex justify-content-center mt-1 mb-3 ">
                        <Button outline color="primary" className="ml-2 mr-2" onClick={this.prevPage}>
                            <i className="cui-arrow-left" />
                        </Button>
                        <p className="my-auto">Halaman <strong>{pageNumber}</strong> dari <strong>{numPages}</strong></p>
                        <Button outline color="primary" className="ml-2 mr-4" onClick={this.nextPage}>
                            <i className="cui-arrow-right" />
                        </Button>
                        <a className="btn btn-success" href={fileUrl} target="_blank" download="something.pdf">
                            <i className="cui-cloud-download" /> unduh
                            </a>

                        <ReactToPrint
                            trigger={() => <Button color="primary" className="ml-2" > <i className="cui-print" /> cetak</Button>}
                            content={() => this.componentRef}
                        />

                        {powerPointUrl ? <a className="btn btn-danger ml-3" href={powerPointUrl} target="_blank" download>
                            <i className="cui-cloud-download" /> unduh power point
                            </a> : null}
                    </Row>
                    : null}

                <PdfHolder className="border border-primary rounded-lg"
                    ref={el => (this.componentRef = el)}
                    pageNumber={pageNumber}
                    numPages={numPages}
                    onDocumentLoadSuccess={this.onDocumentLoadSuccess}
                    onRenderError={this.onRenderError}
                    onLoadingDocument={this.onLoadingDocument}
                    onLoadingPage={this.onLoadingPage}
                    file={fileUrl}
                />
            </div>
        )
    }
}


class PdfHolder extends Component {
    render() {
        const { pageNumber, numPages, onDocumentLoadSuccess, onRenderError, onLoadingDocument, onLoadingPage, file } = this.props;

        return (
            <React.Fragment>
                <div className="d-flex justify-content-center mt-4 border ">
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        error={onRenderError}
                        loading={onLoadingDocument}
                    >
                        <Page
                            pageNumber={pageNumber}
                            loading={onLoadingPage}
                        />
                    </Document>
                </div>
            </React.Fragment>
        )
    }
}

export default CustomPDFviewer
