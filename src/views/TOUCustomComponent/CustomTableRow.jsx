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
} from "reactstrap"

import React, {Component} from 'react'
import {CustomModalAddPosition} from "./CustomModal";

export class CustomOrganizationTableRow extends Component {

    state = {
        isModalAddOpen: false,
        isModalDelOpen: false
    }

    render() {
        const {
            id,
            columnId,
            rowIndex,
            memberName,
            column,
            memberBIPRA,
            memberAge,
            isBaptize,
            isSidi,
            isMarried,
            positions,
            env_positions,
        } = this.props
        /**
         * @param {string} stats accept from Enums::BIPRA.
         * @param {boolean} bool stats condition.
         */
        let createLetterStatuses = (stats, bool) => {
            let badge = bool ?
                <span className="badge badge-success ml-1 mr-1">&#10003;</span>
                : <span className="badge badge-danger ml-1 mr-1">&#10005;</span>

            return (
                <React.Fragment>
                    <span>{stats}</span>{badge}
                </React.Fragment>
            )
        }

        let openModal = (e, isAdd) => {
            e.preventDefault()
            let modal
            isAdd ?
                modal = {isModalAddOpen: true, isModalDelOpen: false}
                :
                modal = {isModalAddOpen: false, isModalDelOpen: true}
            this.setState(modal)
        }

        let onModalToggle = () => {
            this.setState({isModalAddOpen: false, isModalDelOpen: false})
        }

        return (
            <tr>
                <td className="text-center">
                    <div className="small text-muted">{id}</div>
                </td>
                <td>
                    <div>{memberName}</div>

                    <div className="small text-muted">
                        <strong>{column}</strong> | {memberBIPRA} | {memberAge} Tahun
                    </div>
                    <div className="small text-muted">
                        {createLetterStatuses("Baptis", isBaptize)}
                        {createLetterStatuses("Sidi", isSidi)}
                        {createLetterStatuses("Nikah", isMarried)}
                    </div>
                </td>
                <td className="text-center">
                    {positions.map((e, index) => <div key={index}><span className="badge badge-success">{e}</span>
                    </div>)}
                </td>
                <td className="text-center">
                    <div className="mb-2">
                        <Button onClick={(e) => openModal(e, true)} color="primary">Tambah Posisi</Button>
                        <CustomModalAddPosition isOpen={this.state.isModalAddOpen}
                                                isAdding={true}
                                                memberId={id}
                                                column={column}
                                                memberName={memberName}
                                                columnId={columnId}
                                                env_positions={env_positions}
                                                possessedPositions={positions}
                                                rowIndex={rowIndex}
                                                onAlterPosition={this.props.onAlterPosition}
                                                onModalToggle={onModalToggle}/>
                    </div>
                    <div className="mt-2">
                        <Button onClick={(e) => openModal(e, false)} color="secondary" size="sm">Hapus Posisi</Button>
                        <CustomModalAddPosition isOpen={this.state.isModalDelOpen}
                                                isAdding={false}
                                                memberId={id}
                                                column={column}
                                                memberName={memberName}
                                                columnId={columnId}
                                                env_positions={env_positions}
                                                possessedPositions={positions}
                                                rowIndex={rowIndex}
                                                onAlterPosition={this.props.onAlterPosition}
                                                onModalToggle={onModalToggle}/>
                    </div>
                </td>
            </tr>
        )
    }
}

export class CustomMemberDataTableRow extends Component {

    state = {
        isModalAddOpen: false,
        isModalEditOpen: false,
        isModalDelOpen: false,
    }

    render() {

        const {
            memberId,
            fullName,
            BIPRA,
            baptizeLetterEntry,
            sidiLetterEntry,
            marriedLetterEntry,
            sex,
            DOB,
            age,
            column,
        } = this.props

        let openModal = (type) => {
            let modal;
            if (type === "add") {
                modal = {
                    isModalAddOpen: true,
                    isModalEditOpen: false,
                    isModalDelOpen: false,
                }
            } else if (type === "edit") {
                modal = {
                    isModalAddOpen: false,
                    isModalEditOpen: true,
                    isModalDelOpen: false,
                }
            } else {
                modal = {
                    isModalAddOpen: false,
                    isModalEditOpen: false,
                    isModalDelOpen: true,
                }
            }
            this.setState(modal)
        }

        let closeModal = () => {
            this.setState({
                isModalAddOpen: false,
                isModalEditOpen: false,
                isModalDelOpen: false,
            })
        }

        return (
            <tr>
                <td className="text-center">{memberId}</td>

                <td>
                    <div>{fullName}</div>
                    <div className="small "><strong>{BIPRA}</strong></div>
                    {baptizeLetterEntry ?
                        <div className="small text-muted">
                            <span>Baptis</span>
                            <span className="badge badge-success ml-1 mr-1">&#10003;</span> {baptizeLetterEntry}
                        </div>
                        :
                        <div className="small text-muted">
                            <span>Baptis</span>
                            <span className="badge badge-danger ml-1 mr-1">&#10005;</span> -
                        </div>
                    }

                    {sidiLetterEntry ?
                        <div className="small text-muted">
                            <span>Sidi</span>
                            <span className="badge badge-success ml-1 mr-1">&#10003;</span> {sidiLetterEntry}
                        </div>
                        :
                        <div className="small text-muted">
                            <span>Sidi</span>
                            <span className="badge badge-danger ml-1 mr-1">&#10005;</span> -
                        </div>
                    }

                    {marriedLetterEntry ?
                        <div className="small text-muted">
                            <span>Nikah</span>
                            <span className="badge badge-success ml-1 mr-1">&#10003;</span> {marriedLetterEntry}
                        </div>
                        :
                        <div className="small text-muted">
                            <span>Nikah</span>
                            <span className="badge badge-danger ml-1 mr-1">&#10005;</span> -
                        </div>
                    }

                </td>

                <td>
                    <div>{sex}</div>
                    <div>
                        <span className="small text-muted pr-1"> <strong>{column}</strong> </span>|
                        <span className="small text-muted pl-1 pr-1">{DOB}</span>|
                        <span className="small text-muted pl-1">{age} Tahun</span>
                    </div>
                </td>

                <td>
                    {/*<div className="text-center">*/}
                    {/*    <Button onClick={()=>openModal("delete")} color="danger" className="ml-1 mr-1" size="sm">*/}
                    {/*        <i className="fa fa-ban" ariaHidden="true"/> hapus*/}
                    {/*    </Button>*/}
                    {/*    <CustomModalMemberData*/}
                    {/*        isOpen={this.state.isModalDelOpen}*/}
                    {/*        operationType={"delete"}*/}
                    {/*        onModalToggle={closeModal}/>*/}

                    {/*    <Button onClick={()=>openModal("edit")} color="success" className="ml-1 mr-1" size="sm">*/}
                    {/*        <i className="fa fa-pencil" ariaHidden="true"/> ubah*/}
                    {/*    </Button>*/}
                    {/*    <CustomModalMemberData*/}
                    {/*        isOpen={this.state.isModalEditOpen}*/}
                    {/*        operationType={"edit"}*/}
                    {/*        onModalToggle={closeModal}/>*/}
                    {/*</div>*/}
                </td>
            </tr>
        )
    }
}






