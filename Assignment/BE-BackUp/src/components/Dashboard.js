import React from "react";

import '../App.css'
import '../assets/stlyes/Dashboard.css'

import HelpIcon from '../assets/images/Help.png'
import NotificationBell from '../assets/images/Notifications.png'
import GreyAccountIcon from '../assets/images/AccountCircle.png';
import * as commonApi from '../api/commonApi';
// const Urls = require('../api/DybamicUrls');
import {CommonPages} from '../helper/apiRoutes'

async function  sessionValidate() {
    console.log('Naanu');
    var a= sessionStorage.getItem('sessionToken');
    console.log(a);
    if(a===null){
        // window.location = Urls.pageEndpoint.login;
        window.location=CommonPages.login;
    }
    else{
        const tokenValidation = await commonApi.TokenValidation({
            a
          })
          console.log({tokenValidation});
    }
  }
function Dashboard() {
    
    return (
        
            <div className="dashboard-page" onLoad={()=>sessionValidate()}>
                <div className='dashboard-header'>
                    <div className="dashboard-title">
                        <span>Dashboard</span>
                    </div>
                    <div className="dashboard-searchbar">
                        <span>Student Name/Upn</span>
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