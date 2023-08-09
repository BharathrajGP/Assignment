import React from 'react'

import { Common } from "../../../helper/constants"
import "../../../assets/stlyes/MarkEditor.css";

import HelpIcon from "../../../assets/images/LightIcon.png";


export default function MarkEditorHeader() {
    return (
        <div>
            <span className="marking-editor-page-title">
                {Common.Class} {"ClassName"} - {"Subject"} - {Common.Marking} - {"Category"}
            </span>
            <div className="right-header-column">
                <img src={HelpIcon} alt={Common.HelpIcon} />
            </div>
        </div>
    )
}
