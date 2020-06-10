import {
    PaginationItem, PaginationLink
} from "reactstrap"

import React, {Component} from 'react'

class CustomPaginationItem extends Component {


    render() {
        let className = "animated fadeIn"
        let render = this.props.isActive ?
            <PaginationItem key={this.props.pageNumber} active className={className}>
                <PaginationLink onClick={(e) => this.props.onIndexClicked(e, this.props.pageNumber)}>
                    {/*{console.log('pageNumber ' + this.props.pageNumber + ' is active')}*/}
                    {this.props.pageNumber}
                </PaginationLink>
            </PaginationItem>
            :
            <PaginationItem key={this.props.pageNumber} className={className}>
                <PaginationLink onClick={(e) => this.props.onIndexClicked(e, this.props.pageNumber)}>
                    {this.props.pageNumber}
                </PaginationLink>
            </PaginationItem>

        return (
            render
        )
    }
}

export default CustomPaginationItem




