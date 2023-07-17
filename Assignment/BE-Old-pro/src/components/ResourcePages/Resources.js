import React from "react";
import "../../App.css";
import HelpIcon from "../../assets/images/Help.png";
import NotificationBell from "../../assets/images/Notifications.png";
import GreyAccountIcon from "../../assets/images/AccountCircle.png";
import "../../assets/stlyes/Resources.css";
import PupilProgress from "./PupilProgress";
import SpellingScheme from "./SpellingScheme";
import KeyPerformance from "./KeyPerformance";
import Documents from "./Documents";

function Resources() {
  return (
    <div className="resources-page">
      <div className="resources-header">
        <div className="resources-title">
          <span>Resources</span>
        </div>
        <div className="resources-searchbar">
          <span>Student Name/Upn</span>
        </div>
        <div className="resources-header-buttons">
          <img src={HelpIcon} className="Help-icon" alt="Help" />
          <img
            src={NotificationBell}
            className="Notification-icon"
            alt="Notification"
          />
          <img src={GreyAccountIcon} className="Account-Icon" alt="Account" />
        </div>
      </div>
      <div className="resources-content">
        <div className="top">
          <PupilProgress />
          <SpellingScheme />
          <KeyPerformance />
        </div>
        <div className="bottom">
          <Documents />
        </div>
        <div className="resources-copyright">
          <p style={{ marginBottom: 0 }}>©2015 - 2022 Topiq Ltd</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;
