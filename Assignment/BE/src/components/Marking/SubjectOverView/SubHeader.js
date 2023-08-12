import React from 'react'

import HelpIcon from "../../../assets/images/LightIcon.png";

import { OverViewHeader } from '../../../helper/constants';

function SubHeader({className , subjectName}) {
    return (
        <>
            <div className="overview-title">
                <span>{OverViewHeader(className , subjectName)}</span>
            </div>
            <div className="right-column">
                <img src={HelpIcon} alt="Help" />
            </div>
        </>
    )
}

export { SubHeader }
