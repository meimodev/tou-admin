import React, {Component, lazy, Suspense} from "react";
import axios from 'axios'
import RequestHandlerFunctions from './RequestHandler'
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
    Input, InputGroupAddon, InputGroupText, InputGroup, CardGroup
} from "reactstrap";
import {CustomModalConfirmation} from "../TOUCustomComponent/CustomModal";


const Widget04 = lazy(() => import("../Widgets/Widget04"));
const Widget03 = lazy(() => import("../Widgets/Widget03"));
const Widget02 = lazy(() => import("../Widgets/Widget02"));
const Widget01 = lazy(() => import("../Widgets/Widget01"));

export class Main_AboutChurch extends Component {

    state = {
        isChurchDataExist: false,
        churchData: {
            id: 0,
            name: '',
            kabupaten: '',
            kecamatan: '',
            kelurahan: '',
            phone: '',
            email: '',
            address: '',
        },
        column_count: '',
        columns: [],
        env_isLoading: true,
        env_isError: false,
        env_error: null,
        env_onTryAgain: null,
        isModalConfirmationSaveDataColumnOpen: false,
        isModalConfirmationAddColumnOpen: false,
        isModalConfirmationDelColumnOpen: false,
    }

    handleTryAgain = event => {
        event.preventDefault()
        this.state.env_onTryAgain()
    }

    fetchAboutChurchData = () => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        axios.get(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-about-church'),
            RequestHandlerFunctions.generateConfigWithParameter({
                'church_id': 1
            }))
            .then(res => {
                let data = res.data.data
                let isDataExist = data.data_exist
                console.log('OK! get church data')
                console.log(data)
                let state = {}
                if (isDataExist)
                    state = {
                        isChurchDataExist: isDataExist,
                        churchData: {
                            id: data.church_id,
                            name: data.name,
                            kabupaten: data.kabupaten,
                            kecamatan: data.kecamatan,
                            kelurahan: data.kelurahan,
                            phone: data.phone,
                            email: data.email,
                            address: data.address,
                        },
                        column_count: data.column_count,
                        columns: data.columns,
                        env_isLoading: false,
                        env_isError: false,
                        env_error: null,
                    }
                else
                    state = {
                        isChurchDataExist: isDataExist,
                        churchData: {
                            id: 0,
                            name: "",
                            kabupaten: "",
                            kecamatan: "",
                            kelurahan: "",
                            phone: "",
                            email: "",
                            address: "",
                        },
                        column_count: data.column_count,
                        columns: data.columns,
                        env_isLoading: false,
                        env_isError: false,
                        env_error: null,
                    }
                this.setState(state)
            })
            .catch(err => {
                console.error('ERROR! get church data')
                console.error(err)
                this.setState({
                    env_isLoading: false,
                    env_isError: true,
                    env_error: err,
                    env_onTryAgain: this.fetchAboutChurchData(),
                })
            })
    }

    componentDidMount() {
        this.fetchAboutChurchData()
    }

    handleOnFormSubmit = e => {
        e.preventDefault()
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        //TODO some basic validation perhaps before submiting to server
        axios.post(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-dashboard'),
            this.state.churchData,
            RequestHandlerFunctions.generateDefaultConfig())
            .then(res => {
                console.log('post church data')
                console.log(res.data)
                this.setState({
                    env_isLoading: false,
                    env_isError: false,
                    env_error: null,
                })
            })
            .catch(err => {
                console.error('ERROR! post church data')
                console.error(err)
                this.setState({
                    env_isLoading: false,
                    env_isError: true,
                    env_error: err,
                    env_onTryAgain: this.handleOnFormSubmit
                })
            })

    }

    handleInputChange = (e, inputName) => {
        let churchData = {...this.state.churchData}
        switch (inputName) {
            default :
                break
            case 'name':
                churchData.name = e.target.value
                break
            case 'kab':
                churchData.kabupaten = e.target.value
                break
            case 'kec':
                churchData.kecamatan = e.target.value
                break
            case 'kel':
                churchData.kelurahan = e.target.value
                break
            case 'phone':
                churchData.phone = e.target.value
                break
            case 'email':
                churchData.email = e.target.value
                break
            case 'address':
                churchData.name = e.target.value
                break
        }
        this.setState({churchData})
    }

    handleOnChangeColumnCount = (type) => {
        this.setState({
            env_isLoading: true,
            env_isError: false,
            env_error: null,
        })
        axios.post(RequestHandlerFunctions.generateLocalURLFromPath('/panel-about-church'),
            {'church_id': this.state.churchData.id, type},
            RequestHandlerFunctions.generateDefaultConfig())
            .then(res => {
                let data = res.data
                console.log('OK! ' + data.message)
                console.log(data.data)
                this.setState({
                    column_count: data.data.column_count,
                    columns: data.data.columns,
                    env_isLoading: false,
                    env_isError: false,
                    env_error: null,
                })
            }).catch(err => {
            console.error('ERROR! while ' + type + 'operation')
            console.error(err)
            this.setState({
                env_isLoading: false,
                env_isError: true,
                env_error: err,
                env_onTryAgain: () => this.handleOnChangeColumnCount(type)
            })
        })
    }

    render() {
        return RequestHandlerFunctions.generateRenderWithLoadingAndErrorHandling(
            this.state.env_isLoading,
            this.state.env_isError,
            this.state.env_error,
            this.handleTryAgain,
            <div className="animated fadeIn ">
                <Row>
                    <Col sm='6'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h4>Tentang Gereja</h4>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="churchName">Nama Gereja</Label>
                                        <InputGroup>
                                            <Input type="text"
                                                   name="churchName"
                                                   id="churchName"
                                                   value={this.state.churchData.name}
                                                   onChange={(e) => this.handleInputChange(e, 'name')}/>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="kabupatenKota">Kabupaten / Kota</Label>
                                        <Input type="text"
                                               name="kabupatenKota"
                                               id="kabupatenKota"
                                               value={this.state.churchData.kabupaten}
                                               onChange={(e) => this.handleInputChange(e, 'kab')}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="kecamatan">Kecamatan</Label>
                                        <Input type="text"
                                               name="kecamatan"
                                               id="kecamatan"
                                               value={this.state.churchData.kecamatan}
                                               onChange={(e) => this.handleInputChange(e, 'kec')}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="kelurahanDesa">Kelurahan / Desa</Label>
                                        <Input type="text"
                                               name="kelurahanDesa"
                                               id="kelurahanDesa"
                                               value={this.state.churchData.kelurahan}
                                               onChange={(e) => this.handleInputChange(e, 'kel')}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="phone">Telepon</Label>
                                        <InputGroup>
                                            <Input type="phone"
                                                   name="phone"
                                                   id="phone"
                                                   value={this.state.churchData.phone}
                                                   onChange={(e) => this.handleInputChange(e, 'phone')}/>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-phone"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <InputGroup>
                                            <Input type="email"
                                                   name="email"
                                                   id="email"
                                                   value={this.state.churchData.email}
                                                   onChange={(e) => this.handleInputChange(e, 'email')}/>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-envelope-o"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Alamat detil</Label>
                                        <InputGroup>
                                            <Input type="textarea"
                                                   name="text"
                                                   id="exampleText"
                                                   value={this.state.churchData.address}
                                                   placeholder="alamat lengkap, contoh: nama jalan, penunjuk sekitar, dll"
                                                   onChange={(e) => this.handleInputChange(e, 'address')}/>

                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-map-o"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                                <div>
                                    <Button color="primary"
                                            onClick={() => this.setState({isModalConfirmationSaveDataColumnOpen: true})}>
                                        <i className="fa fa-save pr-1"/>Simpan Tentang Gereja
                                    </Button>
                                    <CustomModalConfirmation
                                        isOpen={this.state.isModalConfirmationSaveDataColumnOpen}
                                        onModalClose={() => this.setState({isModalConfirmationSaveDataColumnOpen: false})}
                                        message="PASTIKAN DATA SUDAH BENAR! kemudian Tekan Tombol Konfirmasi untuk menyimpan data tentang gereja"
                                        title="Konfirmasi"
                                        onConfirm={(e) => this.handleOnFormSubmit(e)}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='6'>
                        <Card>
                            <CardBody>
                                <Widget04 icon="icon-people"
                                          color="info"
                                          header={this.state.column_count.toString()}
                                          value="100">Jumlah Kolom
                                </Widget04>
                                <div className="text-center">
                                    <Button size='md'
                                            color='primary'
                                            className='mr-2'
                                            onClick={() => this.setState({isModalConfirmationAddColumnOpen: true})}
                                    >
                                        <i className="fa fa-plus pr-1"/>
                                        Tambah Kolom Baru (Kolom {this.state.column_count + 1})
                                    </Button>
                                    <CustomModalConfirmation
                                        isOpen={this.state.isModalConfirmationAddColumnOpen}
                                        onModalClose={() => this.setState({isModalConfirmationAddColumnOpen: false})}
                                        message={"Silahkan tekan tombol Tambah Kolom Baru untuk konfirmasi penambahan kolom baru (Kolom " + (this.state.column_count + 1) + ")"}
                                        title="Tambah Kolom Baru"
                                        onConfirm={() => this.handleOnChangeColumnCount('add')}
                                    />
                                    <Button size='md'
                                            color="danger"
                                            onClick={() => this.setState({isModalConfirmationDelColumnOpen: true})}
                                    >
                                        <i className="fa fa-minus pr-1"/> Hapus Kolom (Kolom {this.state.column_count})
                                    </Button>
                                    <CustomModalConfirmation
                                        isOpen={this.state.isModalConfirmationDelColumnOpen}
                                        onModalClose={() => this.setState({isModalConfirmationDelColumnOpen: false})}
                                        message={"PERINGATAN! menghapus kolom akan menghapus data keanggotaan semua anggota yang terkait pada kolom tersebut (Kolom " + this.state.column_count + "), Silahkan tekan tombol Hapus Kolom untuk konfirmasi operasi hapus kolom (Kolom " + this.state.column_count + ")"}
                                        title="Hapus Kolom"
                                        onConfirm={() => this.handleOnChangeColumnCount('del')}
                                    />
                                </div>
                            </CardBody>
                            <CardFooter>
                                {/*<Widget02 color='info' header='Kolom 1' icon="fa fa-laptop" mainText="pnt sym" vaiant="1" >*/}
                                {/*</Widget02>*/}
                                <div className="alert alert-success" role="alert">
                                    <i className='fa fa-lightbulb-o pr-2'/>Penggantian Penatua / Syamas di halaman
                                    'Struktur Organisasi'
                                </div>

                                {this.state.columns.map((col, index) =>
                                    <React.Fragment key={index}>
                                        <Row>
                                            <Col sm='12'>
                                                <div>
                                                    <strong>{col.name}</strong>
                                                </div>
                                                <div>
                                                    <span
                                                        className="">Pnt. {col.penatua}
                                                        <strong> | </strong>Sym. {col.syamas} </span>
                                                </div>
                                            </Col>
                                        </Row>
                                        <hr className="bg-primary mt-2 mb-2"/>
                                    </React.Fragment>
                                )}

                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main_AboutChurch;
