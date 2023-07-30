import React from "react";
import { useState } from "react";

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";

import Header from "../../Shared/Header";
import CustomRadio from "../../Shared/CustomRadio";

import HelpIcon from "../../../assets/images/LightIcon.png";
import SaveIcon from "../../../assets/images/Save.png";
import CommentIcon from "../../../assets/images/Comments.png";

import { Common } from "../../../helper/constants";
import MarkEditorDescriptions from "./MarkEditorDescriptions";
import MarkEditorHeader from "./MarkEditorHeader";

function MarkEditor() {
  const ObjectivesList = [
    { value: "Overall", label: "Overall" },
    { value: "Year 1 Objectives", label: "Year 1 Objectives" },
    { value: "Year 2 Objectives", label: "Year 2 Objectives" },
    { value: "Year 3 Objectives", label: "Year 3 Objectives" },
    { value: "Year 4 Objectives", label: "Year 4 Objectives" },
    { value: "Year 5 Objectives", label: "Year 5 Objectives" },
  ];
  const [selectedOption, setselectedOption] = useState(null);
  const getSelectedValue = (e) => {
    setselectedOption(e.value);
  };
  const pupilsList = [
    "Leslie Alexander",
    "Jane Cooper",
    "Ralph Edwards",
    "Devon Lane",
    "Arlene McCoy",
    "Marvin McKinney",
    "Darlene Robertson",
    "Theresa Webb",
    "Theresa Webb",
    "Theresa Webb",
    "Theresa Webb",
  ];
  return (
    <div className="Page-layout">
      <div className="Marking-editor-page">
        <Header />
        <div className="marking-editor-page-header">
          <MarkEditorHeader/>
        </div>
        <div className="marking-editor-page-content">
          <div className="col-md-9 left-content">
            <div className="marking-sheet">
              {pupilsList.map((pupils, i) => {
                return (
                  <div className="marking-row">
                    <div className="pupil">
                      <span className="pupil-text">{pupils}</span>
                      <img src={CommentIcon} alt="Comments" />
                    </div>
                    <CustomRadio i={i} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3 right-content">
            <MarkEditorDescriptions />
          </div>
        </div>
        <div className="cancel-save-buttons">
          <button className="cancel-button">{Common.Cancel}</button>
          <button className="save-button">
            <img src={SaveIcon} alt="Save" />
            {Common.Save}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarkEditor;
