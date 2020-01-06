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
    Label,
    Input
} from "reactstrap";
import Container from "reactstrap/es/Container";

const protocol = 'http'
const ipAddress = '192.168.1.137'
const port = '8000'
const baseAPIPath = 'api'

const RequestHandlerFunctions = {
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQzOWMyNzRmMWIwOTA1NzQ2Njc5NjU4NDRiMGNjMjFkNzhkZTZmMzc5ODEzZGE2ZTgxZjRkMGVkNDY4MjhiNjAyNTQzYzU2ZTdlZWQyNTZiIn0.eyJhdWQiOiIzIiwianRpIjoiNDM5YzI3NGYxYjA5MDU3NDY2Nzk2NTg0NGIwY2MyMWQ3OGRlNmYzNzk4MTNkYTZlODFmNGQwZWQ0NjgyOGI2MDI1NDNjNTZlN2VlZDI1NmIiLCJpYXQiOjE1Nzc0NTA5OTgsIm5iZiI6MTU3NzQ1MDk5OCwiZXhwIjoxNjA5MDczMzk4LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.NeJ2jtv1Y42fCElzzoN91zJWEj4GQsfIXCyXhj5Ko8a1c3UVpnRYT9kMPKnIy-zRUHEUf9FfzyY-GabSssYMv43mXWqMPS20VTk95CeielqcmGrMZfN-f-2iqMkAXnh_QkXawlIaX9jR6yKAWfgj0yrPA72JRJpV-od3nMlIwnxCQ4HnMKkKB61gB3Zvv9Iuq2deKxusAILA-jNtKLzBcQ9Kj9xYvMDW8zE05NnaJ2S15hA1tN36NODBN8UQWo05xJOOs85kWjwrPCoNvRdU55sMGrzj3dGcprKkOcfbN72xdE-wI_kDrvvPd27I-tkkBagz0BLvkijY76ucklT7tDSAJxm7zMVsVSYHOIMIqeLT20eXRqErvWks-QZ6yaNOpXSz6sZtOiwUtXLdhVbX2b00hWv7lvMFRaiR6d6BzWGGHuOQXsVM2M6GJ5puRc-IxUt6-_hjKg64KPsikPIdf91O9rc9oXMkaDr087EeatbiN-IfW4fomWLYT_AuODiyNSdVYoLn0EVTQa759R6Oefjosb3iR9_JXTRw6anlkN5L_JMYzIWbZHuRUK0_NtfPw07ROk9qHI9U4IOEGtgHvtIcULdwUbeVJLNqmX9JgzJK1MCO_VCg82O550HwYOBWNJxUfurNnlN-3QL3Vwp2L3xqnyNPnvCXw0AU3IMdypk',
    generateLocalURLFromPath: function (path) {
        return protocol + '://' + ipAddress + ':' + port + '/' + baseAPIPath + path
    },
    generateConfigWithParameter: function (parameter) {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            },
            params: parameter

        }
    },

    generateDefaultConfig: function () {
        return {
            headers: {
                'Authorization': 'Bearer ' + this.token
            }
        }
    },
    /**
     * @param {boolean} isLoading .
     * @param {boolean} isError .
     * @param {error} error object from axios.catch.
     * @param {function} onTryAgain onClick function for error Handling(trying same request again).
     * @param {function} onRender main render if loading is done and error is false.
     */
    generateRenderWithLoadingAndErrorHandling: function (isLoading, isError, error, onTryAgain, onRender) {
        if (isLoading) {
            return <Container className="animated fadeIn text-center pt-3">
                <div className="spinner-border text-primary" role="status"/>
            </Container>
        }
        if (isError) {
            if (error) console.error(error)
            return onTryAgain ?
                <div className="animated fadeIn">
                    <Card className="pt-3" style={{background: 'transparent', border: 'transparent'}}>
                        <div className="alert alert-warning text-center" role="alert">
                            <i className="fa fa-warning text-danger pr-1"/> Transfer data bermasalah di karenakan
                            koneksi jaringan yang kurang baik, silahkan dicoba kembali
                        </div>
                        <Button color="primary" onClick={onTryAgain}><i className="fa fa-refresh pr-1"/> Coba
                            lagi</Button>
                    </Card>
                </div>
                :
                <div className="animated fadeIn">
                    <Card className="pt-3" style={{background: 'transparent', border: 'transparent'}}>
                        <div className="alert alert-danger text-center" role="alert">
                            <i className="fa fa-expand text-danger pr-1"/>
                            Koneksi Internet bermasalah ! silahkan coba sesaat lagi
                        </div>
                        <Button size="sm" color="primary" onClick={()=>window.location.reload()}><i
                            className="fa expand pr-1"/> Muat Ulang Halaman</Button>
                    </Card>
                </div>
        }
        return onRender
    }
}


export default RequestHandlerFunctions

