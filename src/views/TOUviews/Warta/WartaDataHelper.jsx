import React, {Component} from 'react';
import {Badge, Card, CardBody, CardHeader, CardTitle, Col, Row, Table} from "reactstrap";
import axios from 'axios';
import RequestHandlerFunctions from "../RequestHandler";

class WartaDataHelper extends Component {

    state = {
        data: {
            next_week: {
                start: '',
                end: '',
                next_sunday: '',
            },
            this_week: {
                week_sunday: '',
                start: '',
                end: '',
                pkb: '',
                koord_pkb: '',
                wki: '',
                koord_wki: '',
                pemuda: '',
                koord_pemuda: '',
                remaja: '',
                koord_remaja: '',
                anak: '',
                koord_anak: '',
                received: [],
                kolom: [],
            },
            last_sunday: {
                start: '',
                end: '',
                date: '',
                on_church: [],

                pelayanan: {
                    dawn: '',
                    morning: '',
                    evening: '',
                },
                diakonia: {
                    dawn: '',
                    morning: '',
                    evening: '',
                },
                pembangunan: {
                    dawn: '',
                    morning: '',
                    evening: '',
                },
                extra: {
                    dawn: '',
                    morning: '',
                    evening: '',
                },
            },
            birthdays: {
                start: '',
                end: '',
                members: [],
            },
            service_areas: [],
        },

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
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-warta-helper/' + sessionStorage.getItem('church_id')),
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

            this.props.onNextSundayDateReceived(this.state.data.this_week.this_sunday)
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

    handleTryAgain = event => {
        event.preventDefault()
        this.state.env_onTryAgain()
    }


    render() {
        return RequestHandlerFunctions.generateRenderWithLoadingAndErrorHandling(
            this.state.env_isLoading,
            this.state.env_isError,
            this.state.env_error,
            this.handleTryAgain,
            <div className='animated fadeIn'>
                {/*Last Sunday Service Income*/}
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <h5 className='mb-0'>Pesembahan Ibadah Minggu </h5>
                                <span className='text-primary'>{this.state.data.last_sunday.date}</span>
                                <Table className='pt-3 mt-3' size='sm'>
                                    <thead>
                                    <tr>
                                        <th>Jenis Persembahan</th>
                                        <th>Ibadah Subuh</th>
                                        <th>Ibadah Pagi</th>
                                        <th>Ibadah Malam</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Pembangunan</td>
                                        <td>{this.state.data.last_sunday.pembangunan.dawn}</td>
                                        <td>{this.state.data.last_sunday.pembangunan.morning}</td>
                                        <td>{this.state.data.last_sunday.pembangunan.evening}</td>
                                    </tr>
                                    <tr>
                                        <td>Pelayanan</td>
                                        <td>{this.state.data.last_sunday.pelayanan.dawn}</td>
                                        <td>{this.state.data.last_sunday.pelayanan.morning}</td>
                                        <td>{this.state.data.last_sunday.pelayanan.evening}</td>
                                    </tr>
                                    <tr>
                                        <td>Diakonia</td>
                                        <td>{this.state.data.last_sunday.diakonia.dawn}</td>
                                        <td>{this.state.data.last_sunday.diakonia.morning}</td>
                                        <td>{this.state.data.last_sunday.diakonia.evening}</td>
                                    </tr>
                                    <tr>
                                        <td>Extra</td>
                                        <td>{this.state.data.last_sunday.extra.dawn}</td>
                                        <td>{this.state.data.last_sunday.extra.morning}</td>
                                        <td>{this.state.data.last_sunday.extra.evening}</td>
                                    </tr>

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/*BIPRA & Column Income*/}
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <h5 className='mb-0'>Persembahan BIPRA & Kolom</h5>
                                <span
                                    className='text-primary '>{this.state.data.this_week.start + ' - ' + this.state.data.this_week.end}</span>
                                <Table className='pt-3 mt-3' size='sm'>
                                    <thead>
                                    <tr className='text-center'>
                                        <th>Nama</th>
                                        <th>Ibadah Kolom</th>
                                        <th>PKB</th>
                                        <th>WKI</th>
                                        <th>Pemuda</th>
                                        <th>Remaja</th>
                                        <th>Anak</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {/*PKB*/}
                                    <tr>
                                        <td className='text-center'><strong>PKB</strong></td>
                                        <td>-</td>
                                        <td>{this.state.data.this_week.pkb}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    {/*WKI*/}
                                    <tr>
                                        <td className='text-center'><strong>WKI</strong></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.state.data.this_week.wki}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    {/*PEMUDA*/}
                                    <tr>
                                        <td className='text-center'><strong>Pemuda</strong></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.state.data.this_week.pemuda}</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    {/*REMAJA*/}
                                    <tr>
                                        <td className='text-center'><strong>Remaja</strong></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.state.data.this_week.remaja}</td>
                                        <td>-</td>
                                    </tr>
                                    {/*ANAK*/}
                                    <tr>
                                        <td className='text-center'><strong>Anak</strong></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{this.state.data.this_week.anak}</td>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                        <td/>
                                    </tr>

                                    {this.state.data.this_week.kolom.map((e, index) => {
                                        return <tr key={index}>
                                            <td className='text-center'><strong>Kolom {e.column_index}</strong></td>
                                            <td>{e.kolom}</td>
                                            <td>{e.pkb}</td>
                                            <td>{e.wki}</td>
                                            <td>{e.pemuda}</td>
                                            <td>{e.remaja}</td>
                                            <td>{e.anak}</td>
                                        </tr>
                                    })}

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/*Last Sunday Received & Last Week Received */}
                <Row>
                    <Col>
                        <Card>
                            <CardBody>

                                <div>
                                    <h5 className='mb-0'>Penerimaan Hari Minggu yang lalu </h5>
                                    <span
                                        className='text-primary '>{this.state.data.last_sunday.date}</span>

                                    <Table className='pt-3 mt-3' size='sm'>
                                        <tbody>
                                        {
                                            this.state.data.last_sunday.on_church.length > 0
                                                ?
                                                this.state.data.last_sunday.on_church.map((e, index) =>
                                                    <tr key={index}>
                                                        <td>
                                                            {e.description}
                                                        </td>
                                                        <td>
                                                            {e.amount}
                                                        </td>
                                                    </tr>
                                                )
                                                :
                                                <tr style={{width: '100%'}}>
                                                    <td className='text-center' style={{border: 0}}>
                                                        <div className='alert alert-info'>
                                                            Tidak Ada Data -_-
                                                        </div>
                                                    </td>
                                                </tr>
                                        }
                                        </tbody>
                                    </Table>

                                </div>

                                <div>

                                    <h5 className='mb-0'>Penerimaan Minggu Ini </h5>
                                    <span
                                        className='text-primary '>{this.state.data.this_week.start + ' - ' + this.state.data.this_week.end}</span>

                                    <Table className='pt-3 mt-3' size='sm'>
                                        <tbody>
                                        {
                                            this.state.data.this_week.received.length > 0
                                                ?
                                                this.state.data.this_week.received.map((e, index) =>
                                                    <tr key={index}>
                                                        <td>
                                                            {e.description}
                                                        </td>
                                                        <td>
                                                            {e.amount}
                                                        </td>
                                                    </tr>
                                                )
                                                :
                                                <tr style={{width: '100%'}}>
                                                    <td className='text-center' style={{border: 0}}>
                                                        <div className='alert alert-info'>
                                                            Tidak Ada Data -_-
                                                        </div>
                                                    </td>
                                                </tr>
                                        }
                                        </tbody>
                                    </Table>

                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/*Birthdays*/}
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <h5 className='mb-0'>Hari Ulang Tahun Anggota Jemaat di Minggu depan</h5>
                                <span
                                    className='text-primary'>Tanggal {this.state.data.birthdays.start + ' - ' + this.state.data.birthdays.end}</span>

                                {
                                    this.state.data.birthdays.members.length > 0 ?
                                        <Table className='pt-3 mt-3' size='sm'>
                                            <thead>
                                            <tr>
                                                <th>Tanggal</th>
                                                <th>Nama</th>
                                                <th>Kolom</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.data.birthdays.members.map((e, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{e.date}</td>
                                                            <td>{e.full_name}</td>
                                                            <td>{e.column}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                            </tbody>
                                        </Table>
                                        :
                                        <div className='pt-3 mt-3'>
                                            <div className='alert alert-info text-center'>
                                                Tidak ada Data -_-
                                            </div>
                                        </div>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/*Priest service Area & MTPJ info*/}
                {/*<Row>*/}
                {/*    /!*<Col>*!/*/}
                {/*    /!*    <Card>*!/*/}
                {/*    /!*        <CardBody>*!/*/}
                {/*    /!*            <div className='text-right small text-muted'>Sumber: MTPJ 19-25 Januari 2020</div>*!/*/}
                {/*    /!*            <div className='text-muted'>Tema Bulanan</div>*!/*/}
                {/*    /!*            <div className='pl-2 pb-1'>Pengharapan Mesianis</div>*!/*/}
                {/*    /!*            <div className='text-muted'>Tema Mingguan</div>*!/*/}
                {/*    /!*            <div className='pl-2 pb-1'>Berjuanglah dalam Keselamatan</div>*!/*/}
                {/*    /!*            <div className='text-muted'>Nas Pembimbing</div>*!/*/}
                {/*    /!*            <div className='pl-2 pb-1'>Matius 7: 13-14</div>*!/*/}
                {/*    /!*            <div className='text-muted'>Pembacaan Alkitab</div>*!/*/}
                {/*    /!*            <div className='pl-2 pb-1'>Lukas 13 : 22-30</div>*!/*/}
                {/*    /!*        </CardBody>*!/*/}
                {/*    /!*    </Card>*!/*/}
                {/*    /!*</Col>*!/*/}
                {/*    <Col>*/}
                {/*        <Card>*/}
                {/*            <CardBody>*/}
                {/*                <h5>Wilayah Pelayanan Pendeta </h5>*/}
                {/*                {*/}
                {/*                    this.state.data.service_areas.length > 0 ?*/}
                {/*                        <Table>*/}
                {/*                            <thead>*/}
                {/*                            <tr>*/}
                {/*                                <th>Nama</th>*/}
                {/*                                <th>Wilayah</th>*/}
                {/*                            </tr>*/}
                {/*                            </thead>*/}
                {/*                            <tbody>*/}
                {/*                            {*/}
                {/*                                this.state.data.service_areas.map((e, index) => {*/}
                {/*                                    return (*/}
                {/*                                        <tr key={index}>*/}
                {/*                                            <td>{e.full_name}</td>*/}
                {/*                                            <td>{e.service_area}</td>*/}
                {/*                                        </tr>*/}
                {/*                                    )*/}
                {/*                                })*/}
                {/*                            }*/}

                {/*                            </tbody>*/}
                {/*                        </Table>*/}
                {/*                        :*/}
                {/*                        <div className='mt-3'>*/}
                {/*                            <div className="alert alert-info">*/}
                {/*                                Tidak ada Data -_-*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                }*/}
                {/*            </CardBody>*/}
                {/*        </Card>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </div>
        );
    }
}

export default WartaDataHelper;