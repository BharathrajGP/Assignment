import React from "react";

import '../../../App.css'
import '../../../assets/stlyes/Dashboard.css'

import HelpIcon from '../../../assets/images/Help.png'
import NotificationBell from '../../../assets/images/Notifications.png'
import GreyAccountIcon from '../../../assets/images/AccountCircle.png'

function Dashboard() {
    
    return (
        
            <div className="dashboard-page">
                <div className='dashboard-header'>
                    <div className="dashboard-title">
                        <span>Dashboard</span>
                    </div>
                    
                    <div className="dashboard-header-buttons">
                        <img src={HelpIcon} className="Help-icon" alt='Help' />
                        <img src={NotificationBell} className="Notification-icon" alt='Notification' />
                        <img src={GreyAccountIcon} className="Account-Icon" alt='Account' />
                    </div>
                </div>
                <div className="dashboard-content">
                    <div>
                        <span className="grey-title">Recent Markings</span>
                    </div>
                    <div className="dashboard-table">
                        
                    </div>
                </div>
            </div>
        
    );
}

export default Dashboard;
