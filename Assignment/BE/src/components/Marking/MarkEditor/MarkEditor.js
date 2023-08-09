import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";

import Header from "../../Shared/Header";
import * as constants from "../../../helper/constants";
import MarkEditorDescriptions from "./MarkEditorDescriptions";
import MarkEditorHeader from "./MarkEditorHeader";
import MarkEditorRow from "./MarkEditorRow";
import { fetchDescription, fetchDescriptionMark } from "../../../api/markingApi";
import { isEmptyArray } from "../../../util/utils";

import SaveIcon from "../../../assets/images/Save.png";
import tickmark from '../../../assets/images/tickCheckbox.png'

const MarkEditor = () => {
  const params = useParams();
  const categoryName = params.categoryName;
  const subjectName = params.subjectName;
  const _subjectClassId = params._subjectClassId;
  const _classId = params._classId;
  const year = params.year;
  const _description = params._description;

  const [editorData, setEditorData] = useState([]);
  const [_markings, setMarkings] = useState([]);

  const updateMarks = (index, i) => {
    const data = [..._markings];
    data[index] = i + 1;
    setMarkings(data)
  }

  const _fetchDescriptionMark = async () => {
    const data = { id: _classId, subject: subjectName, category: categoryName, year: year, description: _description }

    const response = await fetchDescriptionMark(data);
    const result = !isEmptyArray(response.Items) && response.Items;
    const arr = result.map((ele) => {
      return { ...ele, markings: !isEmptyArray(ele.description) && ele.description[0].markings }
    })
    !isEmptyArray(arr) && setEditorData(arr);

    const _arr = arr.map((ele) => ele.markings)
    setMarkings(_arr)
  }

  const _fetchDescription = async () => {
    const data = {
      id: "MATH1",
      description: "Recognising Shapes",
      category: "Geometry"
    }
    const response = await fetchDescription(data);
  }

  useEffect(() => {
    _fetchDescriptionMark();
    _fetchDescription();
  }, [])

  return (
    <div className="Page-layout">
      <div className="Marking-editor-page">
        <Header />
        <div className="marking-editor-page-header">
          <MarkEditorHeader />
        </div>
        <div className="marking-editor-page-content">
          <div className="col-md-9 left-content">
            <div className="marking-sheet">
              {editorData.map((ele, index) => {
                return (
                  <MarkEditorRow {...ele} key={index} index={index} _markings={_markings} CheckBox={constants.marking.CheckBox} updateMarks={updateMarks} />
                );
              })}
            </div>
          </div>
          <div className="col-md-3 right-content">
            <MarkEditorDescriptions />
          </div>
        </div>
        <div className="cancel-save-buttons">
          <button className="cancel-button">{constants.Common.Cancel}</button>
          <button className="save-button">
            <img src={SaveIcon} alt="Save" />
            {constants.Common.Save}
          </button>
        </div>
      </div>
    </div>
  );
}


export default MarkEditor;
