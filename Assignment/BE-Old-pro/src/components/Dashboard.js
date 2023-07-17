import React from "react";
import "../App.css";
import '../assets/stlyes/Dashboard.css';
import HelpIcon from "../assets/images/Help.png";
import NotificationBell from "../assets/images/Notifications.png";
import GreyAccountIcon from "../assets/images/AccountCircle.png";
import Table from "./Table";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <span>Dashboard</span>
        </div>
        <div className="dashboard-searchbar">
          <span>Student Name/Upn</span>
        </div>
        <div className="dashboard-header-buttons">
          <img src={HelpIcon} className="Help-icon" alt="Help" />
          <img
            src={NotificationBell}
            className="Notification-icon"
            alt="Notification"
          />
          <img src={GreyAccountIcon} className="Account-Icon" alt="Account" />
        </div>
      </div>
      <div className="dashboard-content">
        <div style={{ marginTop: "24px" }}>
          <span className="grey-title">Recent Markings</span>
        </div>
        <div className="dashboard-table">
          <Table />
        </div>
        <div className="copyright">
          <p style={{ marginBottom: 0 }}>©2015 - 2022 Topiq Ltd</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
