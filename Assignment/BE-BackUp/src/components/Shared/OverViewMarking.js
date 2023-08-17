import React from 'react'
import Nav from 'rsuite/Nav';
import { useNavigate } from 'react-router';

import { SessionStorage } from '../../util/SessionStorage';
import { NavigationBar, SchoolPages, SessionStorageKeys } from '../../helper';

import Maths from '../../assets/images/Maths.svg';
import PE from '../../assets/images/PE.svg';
import PE_Selected from '../../assets/images/PE_Selected.svg';
import ScienceUnselected from '../../assets/images/ScienceUnselected.svg';
import ScienceSelected from '../../assets/images/ScienceSelected.svg';
import Writing from '../../assets/images/Writing.svg';
import Reading from '../../assets/images/Reading.svg';
import Marking from '../../assets/images/Marking.svg';
import Overview from '../../assets/images/Overview.svg';

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
        navigate(SchoolPages.subjectMarkings);
        window.location.reload();
    }

    return (
        <Nav.Menu className="custom-nav" eventKey={`${3 - 2 - 2 - i}`} title={`  ${name}`} icon={<img src={name === 'Maths' ? Maths : name === 'Science' ? ScienceUnselected : name === 'Reading' ? Reading : name === 'Writing' ? Writing : name === 'Physical Education' ? PE : PE} className='nav-link-logo' alt='Mappix' />} onClick={() => handleSubjectClick(id, name, `${3 - 2 - 2 - i}`)}>
            <Nav.Item icon={<img src={Overview} className='custom-nav nav-link-logo me-1' alt='Mappix' />} onClick={() => handleOverviewClick(id, `${3 - 2 - 2 - i}`)} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><p>&nbsp;{NavigationBar.Overview}</p></Nav.Item>
            <Nav.Item icon={<img src={Marking} className='custom-nav nav-link-logo me-1' alt='Mappix' />} onClick={() => handleMarkingClick(id, `${3 - 2 - 2 - i}`)} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><p>&nbsp;{NavigationBar.Marking}</p></Nav.Item>
        </Nav.Menu>
    )
}

export { OverViewMarking }
