import React, { useState, useEffect } from 'react';
import Nav from 'rsuite/Nav';
import Sidenav from 'rsuite/Sidenav';


import { Common, CommonPages, NavigationBar, SchoolAdmin, SessionStorageKeys } from '../../helper'
import { isEmptyObject } from '../../util/utils';
import * as commonApi from '../../api/commonApi';
import { SessionStorage } from '../../util/SessionStorage';
import { SubNavContainer } from './';

import '../../App.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import DashboardLogo from '../../assets/images/DashboardLogo.svg';
import DashboardLogoSelected from '../../assets/images/DashboardLogoSelected.svg';
import Resource from '../../assets/images/Resource.svg';
import Admin from '../../assets/images/Admin.svg';
import AdminSelected from '../../assets/images/AdminSelected.svg';
import AccountSettings from '../../assets/images/AccountSettings.svg';
import AccountSettingsSelected from '../../assets/images/AccountSettingsSelected.svg';
import BigPicture from '../../assets/images/BigPicture.svg';
import BigPictureSelected from '../../assets/images/BigPictureSelected.svg';

import MyClasses from '../../assets/images/MyClasses.svg';
import MyClassesSelected from '../../assets/images/MyClassesSelected.svg';
import Pupils from '../../assets/images/Pupils.svg';
import MappixLogo from '../../assets/images/MappixLogo.svg';

import * as navBarIcons from '../../assets/icons/NavBarIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    let [ClassNames, setClassNames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
    const [eKey, setEKey] = useState(null);

    const getNavData = async () => {
        // setCurrentUrl(window.location.href);
        const _navigationbar = await commonApi.getNavBar({});
        if (isEmptyObject(_navigationbar)) { setIsLoading(false) }
        else {
            setClassNames(_navigationbar.Items);
        }
    }

    const handleNavSelect = (key) => {
        SessionStorage.setItem(Common.eKey, key)
        setEKey(key)
    };

    useEffect(() => {
        getNavData();
    }, [])

    return (
        <div className='nav-bar'>
            <div className='nav-logo-style'>
                <img src={MappixLogo} className='nav-logo' alt='Mappix' />
            </div>
            <Sidenav>
                <Sidenav.Body>
                    <Nav className='navBar-items' activeKey={SessionStorage.getItem(Common.eKey)}>
                        <Nav.Item eventKey="1" href="/Dashboard" icon={<img src={SessionStorage.getItem(Common.eKey) == 1 ? DashboardLogoSelected : DashboardLogo} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(1) }}>
                            &nbsp;&nbsp;{NavigationBar.Dashboard}
                        </Nav.Item>

                        <Nav.Menu className="custom-nav" eventKey="3" title="  My Classes" icon={<img src={SessionStorage.getItem(Common.eKey) == 3 ? MyClassesSelected : MyClasses} alt='Mappix' />} onClick={() => { handleNavSelect(3) }}>
                            &nbsp;&nbsp;<SubNavContainer ClassNames={ClassNames} handleNavSelect={handleNavSelect} />
                        </Nav.Menu>

                        {/* <Nav.Item eventKey="4" icon={<img src={Pupils} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(4) }}>
                            &nbsp;&nbsp;{NavigationBar.Pupils}
                        </Nav.Item> */}

                        <Nav.Item eventKey="5" icon={<img src={SessionStorage.getItem(Common.eKey) == 5 ? BigPictureSelected : BigPicture} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(5) }}>
                            &nbsp;&nbsp;{NavigationBar.BigPicture}
                        </Nav.Item>

                        {/* <Nav.Item eventKey="6" icon={<img src={Resource} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(6) }}>
                            &nbsp;&nbsp;{NavigationBar.Resouces}
                        </Nav.Item> */}

                        <Nav.Item className="custom-nav" eventKey="7" href={SchoolAdmin.schoolAdmin} icon={<img src={SessionStorage.getItem(Common.eKey) == 7 ? AdminSelected : Admin} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(7) }}>
                            &nbsp;&nbsp;{NavigationBar.Admin}
                        </Nav.Item>

                        <Nav.Item className="custom-nav" eventKey="8" href={SchoolAdmin.schoolAdmin} icon={<img src={SessionStorage.getItem(Common.eKey) == 8 ? AccountSettingsSelected : AccountSettings} alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(8) }}>
                            &nbsp;&nbsp;{NavigationBar.AccountSettings}
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export { NavBar };