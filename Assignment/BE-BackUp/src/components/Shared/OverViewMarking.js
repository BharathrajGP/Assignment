import React from 'react'
import { useNavigate } from 'react-router';
import * as _Routes from '../../helper/routes';
import Nav from 'rsuite/Nav';
import { NavigationBar, SessionStorageKeys, marking } from '../../helper/constants';
import { SessionStorage } from '../../util/SessionStorage';

const OverViewMarking = (props) => {
    const {name, id, i, classId, className} = props;
    const navigate = useNavigate();

    const handleSubjectClick = (subjectClassId) => {
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
    }

    const handleOverviewClick = (subjectClassId) => {
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
    }

    const handleMarkingClick = (subjectClassId) => {
        SessionStorage.setItem(SessionStorageKeys.subjectClassId, subjectClassId);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
        SessionStorage.setItem(SessionStorageKeys.className, className);
        navigate(_Routes.SchoolPages.subjectMarking);
    }

    return (
        <Nav.Menu eventKey={`${3 - 2 - 2 - i}`} title={name} onClick={() => handleSubjectClick(id)}>
            <Nav.Item onClick = {() => handleOverviewClick(id)}>{NavigationBar.Overview}</Nav.Item>
            <Nav.Item onClick = {() => handleMarkingClick(id)}>{NavigationBar.Marking}</Nav.Item>
        </Nav.Menu>
    )
}

export default OverViewMarking