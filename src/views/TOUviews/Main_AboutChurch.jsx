import React, {Component} from 'react'
import Axios from 'axios'
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
    Input, InputGroupAddon, InputGroupText, InputGroup
} from "reactstrap";

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
        }
    }

    componentDidMount() {
        Axios.get(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-about-church'),
            RequestHandlerFunctions.generateConfigWithParameter({
                'church_id': 1
            }))
            .then(res => {
                let data = res.data.data
                let isDataExist = data.data_exist
                console.log('get church data')
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
                        }
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
                        }
                    }
                this.setState(state)
            })
            .catch(res => {
                console.log('get church data' + res)
            })
    }

    handleSubmit = e => {
        e.preventDefault()

        //TODO some basic validation perhaps before submiting to server
        Axios.post(
            RequestHandlerFunctions.generateLocalURLFromPath('/panel-dashboard'),
            this.state.churchData,
            RequestHandlerFunctions.generateDefaultConfig())
            .then(res => {

                console.log('post church data' + res.data)

            })
            .catch(res => {
                console.log('post church data' + res)
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

    render() {
        return (
            <div className="animated fadeIn ">
                <Row>
                    <Col>
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
                                    <Button color="primary" onClick={this.handleSubmit}>Simpan</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main_AboutChurch;
