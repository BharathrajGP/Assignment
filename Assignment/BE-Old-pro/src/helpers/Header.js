import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import ProfileIcon from '../assets/images/ProfileIcon.png';
import HelpIcon from '../assets/images/HelpIcon.png';
import NotificationIcon from '../assets/images/NotificationIcon.png';
import Grid from '@material-ui/core/Grid';
import MappixLogo from '../assets/images/HomePageLogo.png';

function Header() {
    return (
        <div className='header-bar'>
            <Grid container>
                <Grid item xs={6} md={10}>
                    <img src={MappixLogo} alt='Mappix' className='app-bar-logo'/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Nav defaultActiveKey="/Classes">
                        <Nav.Link href="/Classes">
                            <img src={ProfileIcon} alt='Profile' className='header-icons' />
                        </Nav.Link>
                        <Nav.Link href="/Classes">
                            <img src={HelpIcon} alt='Help' className='header-icons' />
                        </Nav.Link>
                        <Nav.Link href="/Classes">
                            <img src={NotificationIcon} alt='Notifications' className='header-icons' />
                        </Nav.Link>
                    </Nav>
                </Grid>
            </Grid>

        </div>
    );
}

export default Header;