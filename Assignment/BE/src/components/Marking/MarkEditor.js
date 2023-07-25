import React from "react";
import Select from "react-select";
import { useState } from "react";

import "../../App.css";
import "../../assets/stlyes/MarkEditor.css";

import NavBar from "../Shared/NavBar";
import Header from "../Shared/Header";
import CustomRadio from "../Shared/CustomRadio";

import HelpIcon from "../../assets/images/LightIcon.png";
import SaveIcon from "../../assets/images/Save.png";
import CommentIcon from "../../assets/images/Comments.png";

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
      <NavBar />
      <div className="Marking-editor-page">
        <Header />
        <div className="marking-editor-page-header">
          <span className="marking-editor-page-title">
            Class A2 - Maths - Marking - Place Value
          </span>
          <div className="right-column">
            <img src={HelpIcon} alt="Help" />
          </div>
        </div>
        <div className="marking-editor-page-content">
          <div className="left-content">
            <div className="marking-sheet">
              {pupilsList.map((pupils, i) => {
                return (
                  <div className="marking-row">
                    <div className="pupil">
                      <span className="pupil-text">{pupils}</span>
                      <div className="comment-box">
                        <img src={CommentIcon} alt="Comments" />
                      </div>
                    </div>
                    <CustomRadio i={i}/>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-content">
            <div className="year-dropdown-div">
              <Select
                className="select-obj-dropdown"
                options={ObjectivesList}
                onChange={(e) => {
                  getSelectedValue(e);
                }}
              />
            </div>
            <div className="explanation-cards">
              <div className="greater-card">
                <div className="title">
                  <span>GREATER DEPTH</span>
                </div>
                <div className="description">
                  <p>
                    Solve 'true or false problems, e.g. 'If you add 8 to a
                    number ending in 9, you will always get a number ending in
                    7'.
                  </p>
                </div>
              </div>
              <div className="expected-card">
                <div className="title">
                  <span>EXPECTED</span>
                </div>
                <div className="description">
                  <p>
                    Count in steps of 4, 8, 50, 100; Find 10 more or less; Find
                    100 more or less.
                  </p>
                </div>
              </div>
              <div className="emerging-card">
                <div className="title">
                  <span>EMERGING</span>
                </div>
                <div className="description">
                  <p>
                    Count in steps of 10, 50, 100 from 0; use resources to help
                    with multiples of 4 and 8, and different starting points.
                  </p>
                </div>
              </div>
              <div className="below-card">
                <div className="title">
                  <span>BELOW</span>
                </div>
              </div>
              <div className="absent-card">
                <div className="title">
                  <span>ABSENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cancel-save-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">
            <img src={SaveIcon} alt="Save" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarkEditor;
