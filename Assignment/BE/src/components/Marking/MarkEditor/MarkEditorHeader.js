import React from 'react'

import { Common } from "../../../helper/constants"
import "../../../assets/stlyes/MarkEditor.css";

import HelpIcon from "../../../assets/images/LightIcon.png";
import { SessionStorage } from '../../../util/SessionStorage';


const MarkEditorHeader = () => {
    return (
        <div className='row header-container'>
            <div className='col-md-6'>
                <p className=" marking-editor-page-title"> {Common.Class} {SessionStorage.getItem(Common.className)} - {SessionStorage.getItem(Common.subjectName)} - {Common.Marking} - {SessionStorage.getItem(Common.categoryName)} </p>
            </div>
            <div className="col-md-6 header-container-right">
                <img src={HelpIcon} alt={Common.HelpIcon} />
            </div>
        </div>
    )
}

export { MarkEditorHeader }