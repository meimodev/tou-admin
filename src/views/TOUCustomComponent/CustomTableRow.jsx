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
import CustomModalAddPosition from "./CustomModalAddPosition";

export class CustomOrganizationTableRow extends Component {

    state = {
        isModalAddOpen: false,
        isModalDelOpen: false
    }

    render() {
        const {
            memberName,
            column,
            memberBIPRA,
            memberAge,
            isBaptize,
            isSidi,
            isNikah,
            positions
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

        /**
         * @param {string} pos position from Enums::CHURCH_POSITION.
         */
        let createPosition = (pos) => {
            return (
                <div><span className="badge badge-success">{pos}</span></div>
            )
        }

        let createPositions = () => {
            let res = []
            for (let i = 0; i < positions.length; i++) {
                res.push(createPosition(positions[i]))
            }
            return res
        }

        let openModal = (isAdd) => {
            let modal;
            isAdd ?
                modal = {isModalAddOpen: true, isModalDelOpen: false}
                :
                modal = {isModalAddOpen: false, isModalDelOpen: true}
            this.setState(modal)
        }

        let onModalToggle = () => {
            this.setState({isModalAddOpen:false, isModalDelOpen:false})
        }

        return (
            <tr>
                <td className="text-center">
                    <div className="small text-muted">1</div>
                </td>
                <td>
                    <div>{memberName}</div>

                    <div className="small text-muted">
                        <strong>{column}</strong> | {memberBIPRA} | {memberAge} Tahun
                    </div>
                    <div className="small text-muted">
                        {createLetterStatuses("Baptis", isBaptize)}
                        {createLetterStatuses("Sidi", isSidi)}
                        {createLetterStatuses("Nikah", isNikah)}
                    </div>
                </td>
                <td className="text-center">
                    {createPositions()}
                </td>
                <td className="text-center">
                    <div className="mb-2">
                        <Button onClick={()=>openModal(true)} color="primary">Tambah Posisi</Button>
                        <CustomModalAddPosition isOpen={this.state.isModalAddOpen} isAdding={true}
                                                onModalToggle={onModalToggle}/>
                    </div>
                    <div className="mt-2">
                        <Button onClick={()=>openModal(false)} color="secondary" size="sm">Hapus Posisi</Button>
                        <CustomModalAddPosition isOpen={this.state.isModalDelOpen} isAdding={false}
                                                onModalToggle={onModalToggle}/>
                    </div>
                </td>
            </tr>
        )
    }
}


export class CustomMemberDataTableRow extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}






