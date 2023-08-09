import React, { useState } from "react";

import "../../assets/stlyes/Classes.css";

import UploadIcon from "../../assets/images/upload.png";
import LightIcon from "../../assets/images/LightIcon.png";

import { Common } from '../../helper/constants'

export function ClassInfo({ className, classYear }) {
  return (
    <div className="info-column">
      <div className="info-left-column col-xs-12 col-sm-6 col-md-8">
        <p className="current-page-text">
          My Classes / {className} /
          <span className="current-page"> Overview</span>
        </p>
        <div>
          <span className="page-heading">{className}</span>
        </div>
        <div>
          <span className="page-sub-heading">
            {Common.Summaryinfo}
          </span>
        </div>
        <div className="row-flex">
          <div className="year-bits">{Common.Year} {classYear} </div>
          <span className="page-info">
            {Common.Staffwithmarkingpermissions} Charity Wilson, Frazer Fox,
            Dean Tomlin
          </span>
        </div>
      </div>
      <div className="info-right-column col-xs-12 col-sm-6 col-md-4">
        <div className="buttons-cloumn">
          <button className="upload-evidenece-btn">
            <span>{Common.UploadEvidenceforClass}</span>
            <img src={UploadIcon} alt="" />
          </button>
          <button className="light-icon">
            <img src={LightIcon} alt="Info" />
          </button>
        </div>
      </div>
    </div>
  )
}
