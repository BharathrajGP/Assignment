import '../App.css'
import React from 'react';
// import Nav from 'react-bootstrap/Nav';
import Mappix from '../assets/images/HomePageLogo.png'
import DashboardIcon from '../assets/images/Icondashboard.png'
import classesIcon from '../assets/images/school.png'
import PupilsIcon from '../assets/images/face.png'
import BugPictureIcon from '../assets/images/stacked_line_chart.png'
import ResourcesIcon from '../assets/images/book.png'
import AdminIcon from '../assets/images/admin_panel_settings.png'

import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import 'rsuite/dist/rsuite-no-reset.min.css';
// import DashboardIcon from '@rsuite/icons/legacy/Dashboard';

function NavBar() {
    return (
        <div className='nav-bar'>
            <Sidenav>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" href="/Dashboard" >
                        <img src={DashboardIcon} className='nav-link-logo' alt='Mappix' />Dashboard
                        </Nav.Item>
                        <Nav.Menu eventKey="3" title="My Classes" >
                            <Nav.Menu eventKey="3-1" title="Dogfish">
                                <Nav.Item eventKey="3-1-1" href="/Classes">Class Home</Nav.Item>
                                <Nav.Item eventKey="3-1-1-1">Maths</Nav.Item>
                                <Nav.Item eventKey="3-1-1-2">PE</Nav.Item>
                                <Nav.Item eventKey="3-1-1-3">Reading</Nav.Item>
                                <Nav.Item eventKey="3-1-1-4">Science</Nav.Item>
                                <Nav.Item eventKey="3-1-1-5">Writing</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="4-5" title="Flounders">
                                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu eventKey="4-5" title="Pendragons">
                                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                            </Nav.Menu>

                        </Nav.Menu>
                        <Nav.Item eventKey="2" >
                            Pupils
                        </Nav.Item>
                        <Nav.Item eventKey="2" >
                            Big Picture
                        </Nav.Item>
                        <Nav.Item eventKey="2" >
                            Resouces
                        </Nav.Item>
                        <Nav.Item eventKey="2" >
                            Admin
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>


            {/* <Nav defaultActiveKey="/Home" className="flex-column">
                <img src={Mappix} className='nav-bar-logo' alt='Mappix' />
                <Nav.Link href="/Dashboard" className='nav-menu-links'>
                    <img src={DashboardIcon} className='nav-link-logo' alt='Mappix' /><span className='nav-menu-text'>Dashboard</span>
                </Nav.Link>
                <Nav.Link href="/Classes" className='nav-menu-links'>
                    <img src={classesIcon} className='nav-link-logo' alt='Mappix' />
                    <span className='nav-menu-text'>Classes</span>
                </Nav.Link>

                <Nav.Link href="/Login" className='nav-menu-links'>
                    <img src={PupilsIcon} className='nav-link-logo' alt='Mappix' /><span className='nav-menu-text'>Pupils</span>
                </Nav.Link>
                <Nav.Link href="/Home" className='nav-menu-links'>
                    <img src={BugPictureIcon} className='nav-link-logo' alt='Mappix' /><span className='nav-menu-text'>Big Picture</span>
                </Nav.Link>
                <Nav.Link href="/Home" className='nav-menu-links'>
                    <img src={ResourcesIcon} className='nav-link-logo' alt='Mappix' /><span className='nav-menu-text'>Resources</span>
                </Nav.Link>
                <Nav.Link href="/Home" className='nav-menu-links'>
                    <img src={AdminIcon} className='nav-link-logo' alt='Mappix' /><span className='nav-menu-text'>Admin</span>
                </Nav.Link>
            </Nav> */}
        </div>
    );
}

export default NavBar;