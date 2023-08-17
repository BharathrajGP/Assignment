import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Common, marking,VALIDATION } from "../../../helper";
import { MarkEditorDescriptions, MarkEditorHeader, MarkEditorRow } from "./";
import { LoadingSpinner, Header, success } from "../../Shared";
import { isEmptyArray, isEmptyObject } from "../../../util/utils";
import { fetchDescription, fetchDescriptionMark, pupilCategoryAttainment, pupilCategoryUpdate } from "../../../api/markingApi";

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";

import SaveIcon from "../../../assets/images/Save.png";

const MarkEditor = () => {
  const params = useParams();
  const categoryName = params.categoryName;
  const subjectName = params.subjectName;
  const _subjectClassId = params._subjectClassId;
  const _classId = params._classId;
  const year = params.year;
  const _description = params._description;
  const identifier = params.identifier;

  const [editorData, setEditorData] = useState([]);
  const [_markings, setMarkings] = useState([]);
  const [cards, setCards] = useState([]);
  const [pupilUpn, setPupilUpn] = useState([]);
  const [PupilUpn, set_PupilUpn] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateMarks = (index, i, firstName, lastName, upn) => {
    const data = [..._markings];
    data[index].markings = i + 1;
    setMarkings(data);
    setPupilUpn(data.map((ele) => ele.upn));
    set_PupilUpn(data.map((ele) => { return { upn: ele.upn, marks: ele.markings } }));
  }

  const _fetchDescriptionMark = async () => {
    setIsLoading(true);
    const data = { id: _classId, subject: subjectName, category: categoryName, year: Number(year), description: _description }

    const response = await fetchDescriptionMark(data);
    const result = !isEmptyObject(response) && response.Items;

    const arr = result.map((ele) => { return { ...ele, markings: !isEmptyArray(ele.description) && ele.description[0].markings } });
    !isEmptyArray(arr) && setEditorData(arr);

    const _arr = arr.map((ele) => { return { markings: ele.markings, firstName: ele.firstName, lastName: ele.lastName, upn: ele.upn } });
    !isEmptyArray(_arr) && setMarkings(_arr);
    setIsLoading(false);
  }

  const _fetchDescription = async () => {
    setIsLoading(true);
    const data = { id: _subjectClassId, description: _description, category: categoryName }
    const response = await fetchDescription(data);
    !isEmptyObject(response) && setCards(response.Items);
    setIsLoading(false);
  }

  const _pupilCategoryAttainment = async () => {
    setIsLoading(true);
    const pupilCategoryAttainmentData = { pupil_upn: pupilUpn, subject: subjectName, category: categoryName }
    const pupilCategoryUpdateData = { pupil_upn: PupilUpn, subject: subjectName, category: categoryName, generalIdentifier: identifier }
    await pupilCategoryAttainment(pupilCategoryAttainmentData);
    await pupilCategoryUpdate(pupilCategoryUpdateData);
    success(VALIDATION.MarksUpdated);
    setIsLoading(false);
  }

  useEffect(() => {
    _fetchDescriptionMark();
    _fetchDescription();
  }, [])

  return (
    <div className="Page-layout">
      {isLoading ? <LoadingSpinner /> :
        <div className="Marking-editor-page">
          <Header />
          <div className="marking-editor-page-header">
            <MarkEditorHeader />
          </div>
          <div className="marking-editor-page-content">
            <div className="left-content">
              <div className="marking-sheet">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {editorData.map((ele, index) =>
                      <MarkEditorRow {...ele} key={index} index={index} _markings={_markings} CheckBox={marking.CheckBox} updateMarks={updateMarks} />
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cancel-save-buttons">
                <div>
                  <button className="cancel-button">
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
                      {Common.Cancel}
                    </p>
                  </button>
                </div>
                <div>
                  <button className="save-button" onClick={() => _pupilCategoryAttainment()}>
                    <img src={SaveIcon} alt="Save" />
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5px' }}>
                      {Common.Save}
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <MarkEditorDescriptions cards={cards} />
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export { MarkEditor }