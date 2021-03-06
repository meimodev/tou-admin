import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logoMin from "../../assets/img/brand/logo_min.svg";
import logoFull from "../../assets/img/brand/logo_full.png";
import avatar from "../../assets/img/avatar.png";

import { Redirect } from "react-router-dom";
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import RequestHandlerFunctions from "../../views/TOUviews/RequestHandler";
import Icon from "@mdi/react";
import {mdiChurch, mdiCog} from "@mdi/js";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logoFull, width: 90, height: 90, alt: "TOU Logo Full" }}
          minimized={{ src: logoMin, width: 30, height: 30, alt: "TOU Logo Min" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none animated fadeIn" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link">
              <h4>TOU-System Panel</h4>
            </NavLink>
          </NavItem>
          {/* <NavItem className="px-3">
            <Link to="/users" className="nav-link">
              Users
            </Link>
          </NavItem> */}
          {/* <NavItem className="px-3">
            <NavLink to="#" className="nav-link">
              Settings this this
            </NavLink>
          </NavItem> */}
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <span>Jemaat: </span>
            </NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-list" />
            </NavLink>
          </NavItem> */}
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link">
              <i className="icon-location-pin" />
            </NavLink>
          </NavItem> */}
          <UncontrolledDropdown className="mr-5" nav direction="down">
            <DropdownToggle nav>
              {/* <img
                src={logo}
                className="img-avatar"
                alt="Alfa Omega Rinegetan"
              /> */}
              <div>
              <Icon path={mdiChurch} size={1} />
              <span className="ml-2 mr-2">Jemaat {RequestHandlerFunctions.getSignInData().church_name +', '+RequestHandlerFunctions.getSignInData().church_kelurahan}</span>
                <Icon path={mdiCog} size={1} />

              </div>
            </DropdownToggle>
            <DropdownMenu
              right
              style={{ right: "auto", marginTop: "0.5rem" }}
              className="animated fadeInBig"
            >
              {/* <DropdownItem header tag="div" className="text-center">
                <strong>Operasi</strong>
              </DropdownItem> */}
              {/*<DropdownItem*/}
              {/*  onClick={e => this.props.onRedirectTo(e, "/billing")}*/}
              {/*>*/}
              {/*  <i className="fa fa-bell-o" /> Pembayaran*/}
              {/*  <Badge color="danger">42</Badge>*/}
              {/*</DropdownItem>*/}
              {/* <DropdownItem>
                <i className="fa fa-envelope-o" /> Messages
                <Badge color="success">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks" /> Tasks
                <Badge color="danger">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments" /> Comments
                <Badge color="warning">42</Badge>
              </DropdownItem> */}
              {/* <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-usd" /> Payments
                <Badge color="secondary">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file" /> Projects
                <Badge color="primary">42</Badge>
              </DropdownItem> */}
              {/* <DropdownItem divider /> */}
              <DropdownItem onClick={e => this.props.onLogout(e)}>
                <i className="text-primary cui-account-logout" /> Keluar
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
