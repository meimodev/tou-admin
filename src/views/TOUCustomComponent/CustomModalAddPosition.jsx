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
    Input, Form
} from 'reactstrap';

class CustomModalAddPosition extends Component {

    createPosition = (value,position) => {
        return(
            <option value={value}>{position}</option>
        )
    }

    createPositions = (positions) => {
        let res = []
        for (let i = 0; i < positions.length; i++) {
            let index = i + 1;
            res.push(this.createPosition(index.toString(), positions[i]))
        }
        return res
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
                                    <Col >
                                        <Input type="select" name="select" id="select">
                                            <option value="1">Pilih Posisi</option>
                                            <option value="2">Ketua Jemaat</option>
                                            <option value="3">Sekertaris Jemaat</option>
                                            <option value="4">Penatua Kolom</option>
                                            <option value="5">Syamas Kolom</option>
                                            <option value="6">Sekertaris Jemaat</option>
                                            <option value="7">Penatua Kolom</option>
                                            <option value="8">Syamas Kolom</option>
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
                            <div className=" mt-1">
                                <FormGroup row>
                                    <Col xs="12" md="9">
                                        <Input type="select" name="select" id="select">
                                            <option value="1">Sekertaris Jemaat</option>
                                            <option value="2">Ketua Jemaat</option>
                                            <option value="3">Penatua Kolom</option>
                                            <option value="4">Syamas Kolom</option>
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

export default CustomModalAddPosition;