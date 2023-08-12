import React, { useState, useEffect } from 'react';
import Nav from 'rsuite/Nav';
import Sidenav from 'rsuite/Sidenav';
import { Common, NavigationBar, SessionStorageKeys } from '../../helper/constants'
import { isEmptyObject } from '../../util/utils';
import * as commonApi from '../../api/commonApi';
import * as _Routes from '../../helper/routes';
import { SessionStorage } from '../../util/SessionStorage';
import { CommonPages } from '../../helper/routes';
import SubNavContainer from './SubNavContainer';

import '../../App.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import DashboardLogo from '../../assets/images/DashboardLogo.svg';
import Resource from '../../assets/images/Resource.svg';
import Admin from '../../assets/images/Admin.svg';
import BigPicture from '../../assets/images/BigPicture.svg';

import MyClasses from '../../assets/images/MyClasses.svg';
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
        setCurrentUrl(window.location.href);
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
                        <Nav.Item eventKey="1" href="/Dashboard" icon={<img src={DashboardLogo} className='nav-link-logo me-2' alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(1) }}>
                            &nbsp;&nbsp;{NavigationBar.Dashboard}
                        </Nav.Item>

                        <Nav.Menu eventKey="3" title="  My Classes" icon={<img src={MyClasses} className='nav-link-logo me-2' alt='Mappix' />} onClick={() => { handleNavSelect(3) }}>
                            &nbsp;&nbsp;<SubNavContainer ClassNames={ClassNames} handleNavSelect={handleNavSelect} />
                        </Nav.Menu>

                        <Nav.Item eventKey="4" icon={<img src={Pupils} className='nav-link-logo me-2' alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(4) }}>
                            &nbsp;&nbsp;{NavigationBar.Pupils}
                        </Nav.Item>
                        <Nav.Item eventKey="5" icon={<img src={BigPicture} className='nav-link-logo me-2' alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(5) }}>
                            &nbsp;&nbsp;{NavigationBar.BigPicture}
                        </Nav.Item>
                        <Nav.Item eventKey="6" icon={<img src={Resource} className='nav-link-logo me-2' alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(6) }}>
                            &nbsp;&nbsp;{NavigationBar.Resouces}
                        </Nav.Item>
                        <Nav.Item eventKey="7" href={_Routes.SchoolAdmin.schoolAdmin} icon={<img src={Admin} className='nav-link-logo me-2' alt='Mappix' />} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} onClick={() => { handleNavSelect(7) }}>
                            &nbsp;&nbsp;{NavigationBar.Admin}
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default NavBar;