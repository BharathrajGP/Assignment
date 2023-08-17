import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from 'rsuite/Nav';

import { NavigationBar, SchoolPages, SessionStorageKeys } from '../../helper';
import { SessionStorage } from '../../util/SessionStorage';
import { UserContext } from '../../context';

import { OverViewMarking } from './';

import Class from '../../assets/images/Class.svg';
import ClassHome from '../../assets/images/ClassHome.svg';

const SubNav = (props) => {
    const { className, year, subject, classId, i, handleNavSelect } = props;
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const goToClasses = (key) => {
        handleNavSelect(key);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
        SessionStorage.setItem(SessionStorageKeys.className, className);
        SessionStorage.setItem(SessionStorageKeys.year, year);
        if (location.pathname === SchoolPages.classes) {
            navigate(0)
        }
        navigate(SchoolPages.classes);
    };

    return (
        <Nav.Menu className="custom-nav" eventKey={`${3 - 1 - i}`} title={`  ${className}`} icon={<img src={Class} className='nav-link-logo' alt='Mappix' />} >
            <Nav.Item className="custom-nav" eventKey={`${3 - 1 - i - i}`} icon={<img src={ClassHome} className='nav-link-logo' alt='Mappix' style={{ marginBottom: '2px' }} />} onClick={() => goToClasses(`${3 - 1 - i - i}`)} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                &nbsp;&nbsp;{NavigationBar.ClassHome}
            </Nav.Item>
            <div>
                {subject?.map((ele, i) => <OverViewMarking {...ele} subject={subject} classId={classId} className={className} i={i} key={i} handleNavSelect={handleNavSelect} />)}
            </div>
        </Nav.Menu>
    )
}

export { SubNav };