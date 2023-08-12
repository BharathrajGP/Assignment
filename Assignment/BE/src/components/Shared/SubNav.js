import React, { useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Nav from 'rsuite/Nav';

import { SchoolPages } from '../../helper/routes';
import { NavigationBar, SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from '../../util/SessionStorage';
import { UserContext } from '../../context';

import OverViewMarking from './OverViewMarking';

import Class from '../../assets/images/Class.svg';
import ClassHomeIcon from '../../assets/images/ClassHomeIcon.svg';

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
        <Nav.Menu eventKey={`${3 - 1 - i}`} title={`  ${className}`} icon={<img src={Class} className='nav-link-logo' alt='Mappix' />} >
            <Nav.Item eventKey={`${3 - 1 - i - i}`} icon={<img src={ClassHomeIcon} className='nav-link-logo' alt='Mappix' />} onClick={() => goToClasses(`${3 - 1 - i - i}`)}>
                &nbsp;&nbsp;{NavigationBar.ClassHome}
            </Nav.Item>
            <>
                {subject?.map((ele, i) => <OverViewMarking {...ele} subject={subject} classId={classId} className={className} i={i} key={i} handleNavSelect={handleNavSelect}/>)}
            </>
        </Nav.Menu>
    )
}

export default SubNav