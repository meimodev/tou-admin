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

import React, { Component } from 'react'

export class CustomOrganizationTableRow extends Component {
    render() {
        const {
            memberName,
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
                    <div> <span className="badge badge-success">{pos}</span></div>
            )
        }

        let createpositions = () =>{
            let res = []
            for (let i = 0; i < positions.length; i++)  {
                res.push (createPosition(positions[i]))      
            }
          return res
        }

        return (
            <tr>
                <td className="text-center">
                    <div className="small text-muted">1</div>
                </td>
                <td>
                    <div>{memberName}</div>
                    <div className="small text-muted">
                        {memberBIPRA} | {memberAge} Tahun
                    </div>
                    <div className="small text-muted">
                        {createLetterStatuses("Baptis", isBaptize)}
                        {createLetterStatuses("Sidi", isSidi)}
                        {createLetterStatuses("Nikah", isNikah)}
                    </div>
                </td>
                <td className="text-center">
                    {createpositions()}
                </td>
                <td className="text-center">
                    <div className="mb-2">
                        <Button color="primary">Tambah Posisi</Button>
                    </div>
                    <div className="mt-2">
                        <Button color="secondary" size="sm" >Hapus Posisi</Button>
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






