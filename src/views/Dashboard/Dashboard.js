import React, {Component, lazy, Suspense} from "react";
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
    Table
} from "reactstrap";
import axios from 'axios'
import RequestHandlerFunctions from "../TOUviews/RequestHandler";

const Widget04 = lazy(() => import("../../views/Widgets/Widget04"));
const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));
const Widget02 = lazy(() => import("../../views/Widgets/Widget02"));
const Widget01 = lazy(() => import("../../views/Widgets/Widget01"));


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            church_id: 1,
            church: {
                id: 0,
                name: '',
                kabupaten: '',
                kecamatan: '',
                kelurahan: '',
                phone: '',
                email: '',
                address: '',
                territory: '',
            },
            male: 0,
            female: 0,
            pkb: 0,
            wki: 0,
            youth: 0,
            teen: 0,
            child: 0,
            baptize: 0,
            sidi: 0,
            married: 0,
            total: 0,

            env_isLoading: true,
            env_isError: false,
            env_error: null,
            env_onTryAgain: null,
        };
    }

    fetchDashboardData = () => {
        console.log('fetching data')
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
            env_onTryAgain: null,
        })
        axios.get(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-dashboard/' + this.state.church_id),
            RequestHandlerFunctions.generateDefaultConfig()
        ).then(res => {
            let data = res.data.data
            console.log('OK! fetch Dashboard data')
            console.log(data)

            this.setState({
                church: data.church,
                male: data.male,
                female: data.female,
                pkb: data.pkb,
                wki: data.wki,
                youth: data.youth,
                teen: data.teen,
                child: data.child,
                baptize: data.baptize,
                sidi: data.sidi,
                married: data.married,
                total: data.total,

                env_isLoading: false,
                env_isError: false,
                env_error: null,
            })
        }).catch(err => {
            console.error('ERROR! fetch Dashboard Data')
            this.setState({
                env_isLoading: false,
                env_isError: true,
                env_error: err,
                env_onTryAgain: this.fetchDashboardData,
            })
        })
    }

    loading = () => (
        <div className=" text-center"><h1>This is the inner Loading... will give it a good one later -_-</h1></div>
    );

    componentDidMount() {
        this.fetchDashboardData()
    }

    render() {
        const {name: churchName, kabupaten, kecamatan, kelurahan, phone, email, address, territory} = this.state.church
        const {male, female, pkb, wki, youth, teen, child, baptize, sidi, married, total} = this.state
        const getPercentage = (val) => Math.round((100 * val) / total)

        return (
            RequestHandlerFunctions.generateRenderWithLoadingAndErrorHandling(
                this.state.env_isLoading,
                this.state.env_isError,
                this.state.env_error,
                this.state.env_onTryAgain,
                <div className="animated fadeIn">

                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <Suspense fallback={this.loading()}>*/}
                    {/*            <Card>*/}
                    {/*                <CardHeader>*/}
                    {/*                    <CardTitle className="mb-1"><h4>Kabar Terbaru</h4></CardTitle>*/}
                    {/*                </CardHeader>*/}
                    {/*                <CardBody>*/}
                    {/*                    <Col>*/}
                    {/*                        <span><strong>Hari ini</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>*/}
                    {/*                        <p>*/}
                    {/*                            <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br/>*/}
                    {/*                            <Badge color="success">Peningkatan</Badge> <span>Bug fixed: save button in android app no longer stuck</span><br/>*/}
                    {/*                            <Badge color="danger">Kesalahan</Badge> <span>System telah memblokir akses pengguna dikarenakan telah melewati jatuh tempo pembayaran</span><br/>*/}

                    {/*                        </p>*/}
                    {/*                        <hr/>*/}
                    {/*                        <span><strong>Kemarin</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>*/}
                    {/*                        <p>*/}
                    {/*                            <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br/>*/}
                    {/*                            <Badge color="success">Peningkatan</Badge> <span>Bug fixed: save button in android app no longer stuck</span><br/>*/}
                    {/*                            <Badge color="warning">Peringatan</Badge> <span>Jatuh tempo pembayaran system berakhir HARI INI, segera lakukan pembayaran sebelum pukul 00.00 WITA untuk menghindari pemblokiran sitem </span><br/>*/}

                    {/*                        </p>*/}
                    {/*                        <hr/>*/}
                    {/*                        <span><strong>2 Hari Yang Lalu</strong><span className="text-muted ml-3">Senin, 21 Oktober 2099</span> </span>*/}
                    {/*                        <p>*/}
                    {/*                            <Badge color="primary">Berita</Badge> <span>GEGER! di sebuah kota ada orang GEGER! yang membaca ini</span><br/>*/}
                    {/*                            <Badge color="success">Peningkatan</Badge>*/}
                    {/*                            <span>1 News something</span><br/>*/}
                    {/*                        </p>*/}
                    {/*                        <hr/>*/}

                    {/*                    </Col>*/}
                    {/*                </CardBody>*/}
                    {/*            </Card>*/}
                    {/*        </Suspense>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                    <Row>
                        <Col>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="mb-0"><h4>Tentang Gereja</h4></CardTitle>
                                </CardHeader>

                                <CardBody>
                                    <Row>
                                        <Col sm="6">
                                            <div className="">
                                                <span className="text-muted"> Nama Jemaat </span><br/>
                                                <p className="">{churchName}</p>
                                            </div>

                                            <div>
                                                <span className="text-muted"> Telepon </span><br/>
                                                <p className="mt-0">{phone}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted"> Email </span><br/>
                                                <p className="mt-0">{email}</p>
                                            </div>

                                            <div className="">
                                                <span className="text-muted"> Kabupaten / Kota </span><br/>
                                                <p className="mt-0">{kabupaten}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted"> Kecamatan </span><br/>
                                                <p className="mt-0">{kecamatan}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted"> Kelurahan / Desa </span><br/>
                                                <p className="mt-0">{kelurahan}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted"> Wilayah Pelayanan </span><br/>
                                                <p className="mt-0">{territory}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted"> Alamat </span><br/>
                                                <p className="mt-0">{address}</p>
                                            </div>

                                        </Col>
                                        <Col sm="6">

                                            <ul className="pl-0 ">
                                                <div className="progress-group">
                                                    <div className="progress-group-header">
                                                        <i className="icon-user progress-group-icon"/>
                                                        <span className="title text-muted">Laki-laki</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{male}</span>
                                                        <span
                                                            className="text-muted small">({getPercentage(male)}%)</span>

                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="primary"
                                                            value={getPercentage(male)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group mb-4">
                                                    <div className="progress-group-header">
                                                        <i className="icon-user-female progress-group-icon"/>
                                                        <span className="title text-muted">Perempuan</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{female}</span>
                                                        <span
                                                            className="text-muted small">({getPercentage(female)}%)</span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="primary"
                                                            value={getPercentage(female)}
                                                        />
                                                    </div>
                                                </div>
                                                <hr className="mt-0"/>

                                                <div className="progress-group">
                                                    <div className="progress-group-header">
                                                        <i className="icon-globe progress-group-icon"/>
                                                        <span className="title text-muted">Pria / Kaum Bapa</span>
                                                        <span className="ml-auto font-weight-bold ">{pkb}
                                                            <span
                                                                className="text-muted small ml-1">({getPercentage(pkb)}%)</span>
                                                    </span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="danger"
                                                            value={getPercentage(pkb)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    <div className="progress-group-header">
                                                        <i className="icon-social-facebook progress-group-icon"/>
                                                        <span className="title text-muted">Wanita / Kaum Bapa</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{wki}
                                                            <span
                                                                className="text-muted small ml-1">({getPercentage(wki)} %)</span></span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="danger"
                                                            value={getPercentage(wki)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    <div className="progress-group-header">
                                                        <i className="icon-social-twitter progress-group-icon"/>
                                                        <span className="title text-muted">Pemuda</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{youth}
                                                            <span
                                                                className="text-muted small ml-1">({getPercentage(youth)}%)</span></span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="danger"
                                                            value={getPercentage(youth)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    <div className="progress-group-header">
                                                        <i className="icon-social-linkedin progress-group-icon"/>
                                                        <span className="title text-muted">Remaja</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{teen}
                                                            <span
                                                                className="text-muted small ml-1">({getPercentage(teen)}%)</span></span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="danger"
                                                            value={getPercentage(teen)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group mb-4">
                                                    <div className="progress-group-header">
                                                        <i className="icon-social-linkedin progress-group-icon"/>
                                                        <span className="title text-muted">Anak</span>
                                                        <span className="ml-auto font-weight-bold mr-1">{child}
                                                            <span
                                                                className="text-muted small ml-1">({getPercentage(child)}%)</span></span>
                                                    </div>
                                                    <div className="progress-group-bars">
                                                        <Progress
                                                            className="progress-xs"
                                                            color="danger"
                                                            value={getPercentage(child)}
                                                        />
                                                    </div>
                                                </div>

                                                <hr className="mt-0"/>
                                                <div className="divider text-center">
                                                    <Row>
                                                        <Col sm={12} md className="mb-sm-2 mb-0">
                                                            <div className="text-muted">Baptis</div>
                                                            <strong>{baptize}</strong><span
                                                            className="text-muted pl-1">({getPercentage(baptize)}%)</span>
                                                            <Progress
                                                                className="progress-xs mt-2"
                                                                color="info"
                                                                value={getPercentage(baptize)}
                                                            />
                                                        </Col>
                                                        <Col sm={12} md className="mb-sm-2 mb-0">
                                                            <div className="text-muted">Sidi</div>
                                                            <strong>{sidi}</strong><span
                                                            className="text-muted pl-1">({getPercentage(sidi)}%)</span>
                                                            <Progress
                                                                className="progress-xs mt-2"
                                                                color="info"
                                                                value={getPercentage(sidi)}
                                                            />
                                                        </Col>
                                                        <Col sm={12} md className="mb-sm-2 mb-0">
                                                            <div className="text-muted">Nikah</div>
                                                            <strong>{married}</strong><span
                                                            className="text-muted pl-1">({getPercentage(married)}%)</span>
                                                            <Progress
                                                                className="progress-xs mt-2"
                                                                color="info"
                                                                value={getPercentage(married)}
                                                            />
                                                        </Col>
                                                        <Col sm={12} md className="mb-sm-2 mb-0 my-auto">
                                                            <div
                                                                className="border p-2 rounded-lg color-primary bg-info">
                                                                <div>TOTAL</div>
                                                                <strong>{total}</strong>
                                                            </div>

                                                        </Col>
                                                    </Row>
                                                </div>
                                            </ul>

                                        </Col>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>

                    </Row>

                    <Row>
                        <Col sm="3">
                            <Widget02 header="Custumer Service" mainText="+62 812 9402" icon="icon-phone"
                                      color="secondary"
                                      variant="1"/>
                        </Col>

                        <Col sm="3">
                            <Widget02 header="WhatsApp" mainText="+62 812 9402" icon="fa fa-whatsapp" color="success"
                                      variant="1"/>
                        </Col>

                        <Col sm="3">
                            <Widget02 header="Instagram" mainText="@meimo.dev" icon="fa fa-instagram" color="danger"
                                      variant="1"/>
                        </Col>

                        <Col sm="3">
                            <Widget02 header="Website" mainText="www.meimodev.com" icon="fa fa-globe" color="warning"
                                      variant="1"/>
                        </Col>
                    </Row>

                </div>
            )
        );
    }
}

export default Dashboard;
