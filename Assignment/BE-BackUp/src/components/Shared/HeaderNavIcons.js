import React from "react";
import Nav from "react-bootstrap/Nav";

import "../../App.css";

import ProfileIcon from "../../assets/images/ProfileIcon.png";
import HelpIcon from "../../assets/images/HelpIcon.png";
import NotificationIcon from "../../assets/images/NotificationIcon.png";

import { CommonPages } from "../../helper/routes";
import Action from "../Profile/Action";

export default function HeaderNavIcons() {
    return (
        <div className="header-nav-icons">
            <Nav defaultActiveKey="/Classes">
                <Nav.Link
                // href="/Classes"
                >
                    <Action style={{ background: "none" }}>
                        <img
                            src={ProfileIcon}
                            alt="Profile"
                            className="header-icons"
                            onClick={() => Profile()}
                        />
                    </Action>
                </Nav.Link>
                <Nav.Link href="/Classes">
                    <img src={HelpIcon} alt="Help" className="header-icons" />
                </Nav.Link>
                <Nav.Link href="/Classes">
                    <img
                        src={NotificationIcon}
                        alt="Notifications"
                        className="header-icons"
                    />
                </Nav.Link>
            </Nav>
        </div>
    );
}

function Profile() {
    window.location = CommonPages.updateProfile;
}
