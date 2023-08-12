import React from 'react'
import Nav from 'rsuite/Nav';
import { useNavigate } from 'react-router';
import { SessionStorage } from '../../util/SessionStorage';
import * as _Routes from '../../helper/routes';
import * as constants from '../../helper/constants';
import { NavigationBar, SessionStorageKeys, marking } from '../../helper/constants';

import Maths from '../../assets/images/Maths.svg';
import PE from '../../assets/images/Physical Education.svg';
import Science from '../../assets/images/Science.svg';
import Writing from '../../assets/images/Writing.svg';
import Reading from '../../assets/images/Reading.svg';

const OverViewMarking = (props) => {
    const { name, id, i, classId, className, handleNavSelect } = props;
    const navigate = useNavigate();

    const handleSubjectClick = (subjectClassId, _name, key) => {
        handleNavSelect(key);
        SessionStorage.setItem(SessionStorageKeys.subjectName, _name);
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
    }

    const handleOverviewClick = (subjectClassId, key) => {
        handleNavSelect(key);
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
        window.location.reload();
    }

    const handleMarkingClick = (subjectClassId, key) => {
        handleNavSelect(key);
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
        SessionStorage.setItem(SessionStorageKeys.className, className);
        SessionStorage.setItem(SessionStorageKeys.categoryName, '');
        SessionStorage.setItem(SessionStorageKeys.categoryIndex, 0);
        navigate(_Routes.SchoolPages.subjectMarking);
        window.location.reload();
    }

    return (
        <Nav.Menu eventKey={`${3 - 2 - 2 - i}`} title={`  ${name}`} icon={<img src={name === 'Maths' ? Maths : name === 'Science' ? Science : name === 'Reading' ? Reading : name === 'Writing' ? Writing : name === 'Physical Education' ? PE : PE} className='nav-link-logo' alt='Mappix' />} onClick={() => handleSubjectClick(id, name, `${3 - 2 - 2 - i}`)}>
            <Nav.Item onClick={() => handleOverviewClick(id, `${3 - 2 - 2 - i}`)}>{NavigationBar.Overview}</Nav.Item>
            <Nav.Item onClick={() => handleMarkingClick(id, `${3 - 2 - 2 - i}`)}>{NavigationBar.Marking}</Nav.Item>
        </Nav.Menu>
    )
}

export default OverViewMarking
