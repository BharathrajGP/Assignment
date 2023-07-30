import React from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from 'rsuite/Nav';

import * as Routes from '../../helper/routes';
import { NavigationBar, SessionStorageKeys } from '../../helper/constants';
import { SessionStorage } from '../../util/SessionStorage';

import OverViewMarking from './OverViewMarking';
import DashboardIcon from '../../assets/images/Icondashboard.png'


const SubNav = (props) => {
    const { className, year, subject, classId, i } = props;
    const navigate = useNavigate();

    const goToClasses = () => {
        navigate(Routes.SchoolPages.classes);
        SessionStorage.setItem(SessionStorageKeys.classId, classId);
    };

    return (
        <Nav.Menu eventKey={`${3 - 1 - i}`} title={className}>
            <Nav.Item eventKey={`${3 - 1 - i - i}`} onClick={() => goToClasses()}>
                <img src={DashboardIcon} className='nav-link-logo' alt='Mappix' />{NavigationBar.ClassHome}
            </Nav.Item>
            <>
                {subject?.map((ele, i) => <OverViewMarking {...ele} classId={classId} className={className} i={i} key={i} />)}
            </>
        </Nav.Menu>
    )
}

export default SubNav