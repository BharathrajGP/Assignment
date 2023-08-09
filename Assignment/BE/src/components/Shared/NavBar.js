import React, { useState, useEffect } from 'react';
import Nav from 'rsuite/Nav';
import Sidenav from 'rsuite/Sidenav';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import '../../App.css'

import SubNavContainer from './SubNavContainer'
import DashboardIcon from '../../assets/images/Icondashboard.png'
import * as navBarIcons from '../../assets/icons/NavBarIcons'

import { NavigationBar, SessionStorageKeys } from '../../helper/constants'
import { isEmptyObject } from '../../util/utils';
import * as commonApi from '../../api/commonApi';
import * as _Routes from '../../helper/routes';
import { SessionStorage } from '../../util/SessionStorage';
import { CommonPages } from '../../helper/routes'


function NavBar() {
    const initialClass = [
        {
            classId: "CLASS1",
            className: "Class-1",
            year: "1",
            subject: [{ id: 'PE1', name: 'Physical Education' }, { id: 'red1', name: 'Reading' }],
        },
        {
            classId: "CLASS2",
            className: "Class-2",
            year: "1",
            subject: [{ id: 'M1', name: 'Maths' }, { id: 'red2', name: 'Reading' }],
        },
        {
            classId: "CLASS3",
            className: "Class-3",
            year: "1",
            subject: [{ id: 'P', name: 'Physics' }, { id: 'red3', name: 'Reading' }],
        },
    ]
    let [ClassNames, setClassNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(window.location.href)
    const getNavData = async () => {
        setCurrentUrl(window.location.href);
        console.log(currentUrl);
        const _navigationbar = await commonApi.getNavBar({});
        console.log({ _navigationbar });
        if (isEmptyObject(_navigationbar)) { setIsLoading(false) }
        else {
            setClassNames(_navigationbar.Items);
            console.log("_navigationbar.Items" ,_navigationbar.Items);
        }
        
    }

    useEffect(() => {
        getNavData()
    }, [])

    return (
        <div className='nav-bar'>
            <Sidenav>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" href="/Dashboard" >
                            <img src={DashboardIcon} className='nav-link-logo' alt='Mappix' />{NavigationBar.Dashboard}
                        </Nav.Item>

                        <Nav.Menu eventKey="3" title="My Classes" >
                            <i className="fa-sharp fa-solid fa-graduation-cap" /><SubNavContainer ClassNames={ClassNames} />
                        </Nav.Menu>

                        <Nav.Item eventKey="4" >
                            {NavigationBar.Pupils}
                        </Nav.Item>
                        <Nav.Item eventKey="5" >
                            {NavigationBar.BigPicture}
                        </Nav.Item>
                        <Nav.Item eventKey="6" >
                            {NavigationBar.Resouces}
                        </Nav.Item>
                        <Nav.Item eventKey="7" href={_Routes.SchoolAdmin.schoolAdmin}>
                            {NavigationBar.Admin}
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default NavBar;