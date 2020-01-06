import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,
    FormGroup,
    Label,
    Input, Form, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';

export class CustomModalAddPosition extends Component {

    generatePositionList = (type) => {
        let possessedPositions = this.props.possessedPositions
        if (type === 'add') {
            let filtered = this.props.env_positions.filter(e => !possessedPositions.includes(e))
            return filtered.map((e,index) => <option key={index}>{e}</option>);

        } else {
            return this.props.possessedPositions.map((e,index) => <option key={index}>{e}</option>)
        }
    }

    render() {
        const {isOpen, onModalToggle, isAdding} = this.props;

        return (
            <React.Fragment>
                {isAdding ?
                    <Modal isOpen={isOpen}
                           toggle={onModalToggle}
                           className={'modal-lg modal-primary modal-dialog modal-dialog-centered ' + this.props.className}>
                        <ModalHeader toggle={onModalToggle}>Tambah Posisi</ModalHeader>
                        <ModalBody>
                            <div className="ml-3">Jhon Manembo, <strong>Kolom 4</strong></div>
                            <div className=" mt-1">
                                <FormGroup row>
                                    <Col>
                                        <Input type="select" name="select" id="select">
                                            {this.generatePositionList('add')}
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={onModalToggle}>Tambah Posisi</Button>
                            <Button color="secondary" onClick={onModalToggle}>Batal</Button>
                        </ModalFooter>
                    </Modal>
                    :
                    <Modal isOpen={isOpen} toggle={onModalToggle}
                           className={'modal-lg modal-danger modal-dialog modal-dialog-centered ' + this.props.className}>
                        <ModalHeader toggle={onModalToggle}>Hapus Posisi</ModalHeader>
                        <ModalBody>
                            <div className="ml-3">Jhon Manembo, <strong>Kolom 4</strong></div>
                            <div className="mt-1">
                                <FormGroup row>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="select" id="select">
                                            {this.generatePositionList('del')}
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={onModalToggle}>Hapus Posisi</Button>
                            <Button color="secondary" onClick={onModalToggle}>Batal</Button>
                        </ModalFooter>
                    </Modal>}
            </React.Fragment>

        );
    }
}


export class CustomModalMemberData extends Component {

    state = {
        degreeSelectorCount: 0
    }

    onModalAddDegreeClick = () => {
        let count = this.state.degreeSelectorCount + 1
        this.setState({
            degreeSelectorCount: count
        })
    }

    onModalClearDegreeClick = () => {
        this.setState({
            degreeSelectorCount: 0
        })
    }

    createDegreeSelector = (key) => {
        return <div key={key}>
            <FormGroup row>
                <Col>
                    <InputGroup>
                        <Input type="select" name={"selectDegree" + key} id={"selectDegree" + key}>
                            <option value="0">Gelar Akademik 1</option>
                            <option value="1">Gelar Akademik 2</option>
                            <option value="2">Gelar Akademik 3</option>
                            <option value="3">Gelar Akademik 4</option>
                        </Input>
                    </InputGroup>
                </Col>
            </FormGroup>
        </div>
    }

    generateDegreeSelector = () => {
        let res = []
        for (let i = 0; i < this.state.degreeSelectorCount; i++) {
            res.push(this.createDegreeSelector(i))
        }
        return res
    }


    displayModal = () => {
        const {isOpen, onModalToggle, operationType} = this.props

        let title, color
        if (operationType === "add") {
            title = "Tambah Anggota"
            color = "primary"
        } else if (operationType === "edit") {
            title = "Ubah Data Anggota"
            color = "success"
        } else {
            title = "Hapus Data Anggota"
            color = "danger"
            return <Modal isOpen={isOpen}
                          toggle={onModalToggle}
                          className={'modal-lg modal-' + color + ' modal-dialog modal-dialog-centered ' + this.props.className}>
                <ModalHeader toggle={onModalToggle}>{title}</ModalHeader>
                <ModalBody>
                    <div>Drs. Jhon Manjanemba</div>
                    <div><strong>Kolom 13</strong></div>
                    <div>Pria / Kaum Bapa</div>
                    <div>14 November 1988</div>
                </ModalBody>
                <ModalFooter>
                    <Button color={color} onClick={onModalToggle}>Hapus Data Anggota</Button>
                    <Button color="secondary" onClick={onModalToggle}>Batal</Button>
                </ModalFooter>
            </Modal>
        }

        return <Modal isOpen={isOpen}
                      toggle={onModalToggle}
                      className={'modal-lg modal-' + color + ' modal-dialog modal-dialog-centered ' + this.props.className}>
            <ModalHeader toggle={onModalToggle}>{title}</ModalHeader>
            <ModalBody>
                <div>
                    <Form action="">
                        <div className="pb-2">Nama Lengkap</div>
                        <FormGroup>
                            <InputGroup>
                                <Input type="text" id="firstName" name="firstName" placeholder="Nama Depan"
                                       autoComplete="name"/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"/></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <Input type="text" id="middleName" name="middleName" placeholder="Nama Tengah"
                                       autoComplete="name"/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"/></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup>
                                <Input type="text" id="lastName" name="lastName" placeholder="Nama Belakang"
                                       autoComplete="name"/>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText><i className="fa fa-user"/></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                        <hr/>
                        <div className="pb-2">Gelar Akademik {this.state.degreeSelectorCount > 0 ?
                            <Button onClick={this.onModalClearDegreeClick} size="sm"
                                    className="btn btn-ghost-danger text-small"><i className="fa fa-ban pr-1"/>hapus
                                gelar</Button> : null}</div>
                        {this.generateDegreeSelector()}
                        <Button onClick={this.onModalAddDegreeClick} outline={true} color="primary"
                                className="btn-block text-center align-content-center"><i
                            className="fa fa-plus pr-1"/> Tambah Gelar</Button>
                        <hr/>

                        <div className="pb-2">Tanggal Lahir</div>
                        <div>
                            <Form action="" method="post" inline>
                                <span className="text-muted pr-2">Tanggal</span>
                                <Input type="select" name="selectDate" id="selectDate">
                                    <option key="0" value="0">1</option>
                                    <option key="1" value="1">2</option>
                                    <option key="2" value="2">3</option>
                                    <option key="3" value="3">4</option>
                                    <option key="4" value="4">5</option>
                                    <option key="5" value="5">6</option>
                                    <option key="6" value="6">7</option>
                                    <option key="7" value="7">8</option>
                                    <option key="8" value="8">9</option>
                                    <option key="9" value="9">10</option>
                                    <option key="10" value="10">11</option>
                                    <option key="11" value="11">12</option>
                                    <option key="12" value="12">13</option>
                                    <option key="13" value="13">14</option>
                                    <option key="14" value="14">15</option>
                                    <option key="15" value="15">16</option>
                                    <option key="16" value="16">17</option>
                                    <option key="17" value="17">18</option>
                                    <option key="18" value="18">19</option>
                                    <option key="19" value="19">20</option>
                                    <option key="20" value="20">21</option>
                                    <option key="21" value="21">22</option>
                                    <option key="22" value="22">23</option>
                                    <option key="23" value="23">24</option>
                                    <option key="24" value="24">25</option>
                                    <option key="25" value="25">26</option>
                                    <option key="26" value="26">27</option>
                                    <option key="27" value="27">28</option>
                                    <option key="28" value="28">29</option>
                                    <option key="29" value="29">30</option>
                                    <option key="30" value="30">31</option>
                                </Input>
                                <span className="text-muted pr-2 pl-2">Bulan</span>
                                <Input type="select" name="selectMonth"
                                       id="selectMonth">
                                    <option key="0" value="0">1</option>
                                    <option key="1" value="1">2</option>
                                    <option key="2" value="2">3</option>
                                    <option key="3" value="3">4</option>
                                    <option key="4" value="4">5</option>
                                    <option key="5" value="5">6</option>
                                    <option key="6" value="6">7</option>
                                    <option key="7" value="7">8</option>
                                    <option key="8" value="8">9</option>
                                    <option key="9" value="9">10</option>
                                    <option key="10" value="10">11</option>
                                    <option key="11" value="11">12</option>
                                </Input>
                                <span className="text-muted pr-2 pl-2">Tahun</span>
                                <FormGroup>
                                    <Input type="text" id="year" name="year" placeholder="xxxx" maxLength="4"/>
                                </FormGroup>
                            </Form>
                        </div>
                        <hr/>
                        <div className="pb-2">Jenis Kelamin</div>
                        <Input type="select" name="selectSex" id="selectSex">
                            <option value="0">Laki-laki</option>
                            <option value="1">Perempuan</option>
                        </Input>
                    </Form>
                </div>
                <hr/>
                <div className="pb-2">Data Keanggotaan</div>
                <FormGroup>
                    <InputGroup>
                        <Input type="text" id="baptizeLetterEntry" name="baptizeLetterEntry"
                               placeholder="Nomor Surat Baptis"/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-envelope"/></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <Input type="text" id="sidiLetterEntry" name="sidiLetterEntry" placeholder="Nomor Surat Sidi"/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-envelope"/></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <Input type="text" id="marriedLetterEntry" name="marriedLetterEntry"
                               placeholder="Nomor Surat Nikah"/>
                        <InputGroupAddon addonType="append">
                            <InputGroupText><i className="fa fa-envelope"/></InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={onModalToggle}>Ubah Data Anggota</Button>
                <Button color="secondary" onClick={onModalToggle}>Batal</Button>
            </ModalFooter>
        </Modal>
    }


    render() {
        return (
            <React.Fragment>
                {this.displayModal()}
            </React.Fragment>

        );
    }
}

