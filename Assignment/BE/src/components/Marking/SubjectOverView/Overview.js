import React, { useState, useEffect } from "react";
import Select from "react-select";

import "../../../App.css";
import "../../../assets/stlyes/overview.css";

import NavBar from "../../Shared/NavBar";
import Header from "../../Shared/Header";
import LoadingSpinner from "../../Shared/Loader/LoadingSpinner"
import { SubHeader } from "./";
import { TableHeader } from "./";
import { TableRow } from "./";


import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys, markingColors } from "../../../helper/constants";

function Overview() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setselectedOption] = useState(null);
  const [classId, setClassId] = useState();
  const [className, setClassName] = useState();
  const [subject, setSubject] = useState("Maths");
  const [subjectId, setSubjectId] = useState();
  setClassName();
  setSubject();

  const getSelectedValue = (e) => {
    setselectedOption(e.value);
    console.log(selectedOption);
  };
  //TODO - Not sure how to resolve this
  const Trend: DataItem[] = [
    {
      color: `${markingColors.greaterDepth}`,
      id: '001',
      order: 1,
      value: 10,
    },
    {
      color: `${markingColors.expected}`,
      id: '002',
      order: 2,
      value: 40,
    },
    {
      color: `${markingColors.emerging}`,
      id: '003',
      order: 3,
      value: 30,
    },
    {
      color: `${markingColors.below}`,
      id: '004',
      order: 4,
      value: 20,
    },

  ];
  const getSubjectOverview = async () => {
    setIsLoading(true);
    setClassId(SessionStorage.getItem(SessionStorageKeys.classId));
    setSubjectId(SessionStorage.getItem(SessionStorageKeys.subjectClassId));
    Trend[0].value = 5;
    setIsLoading(false);
  };


  const ObjectivesList = [
    { value: "Overall", label: "Overall" },
    { value: "Year 1 Objectives", label: "Year 1 Objectives" },
    { value: "Year 2 Objectives", label: "Year 2 Objectives" },
    { value: "Year 3 Objectives", label: "Year 3 Objectives" },
    { value: "Year 4 Objectives", label: "Year 4 Objectives" },
    { value: "Year 5 Objectives", label: "Year 5 Objectives" },
  ];


  //TODO - Not sure how to resolve this 
  useEffect(() => { getSubjectOverview() }, [classId, className, subject, subjectId]);

  return (
    <div className="Page-layout">
      <NavBar />
      <div className="Page-header">
        <Header />
        <div className="overview-page">
          {isLoading && <LoadingSpinner />}
          <div className="overview-header">
            <SubHeader className={className} subjectName={subject} />
          </div>
          <div className="overview-content">
            <div className="year-dropdown-div">
              <Select
                className="select-obj-dropdown"
                options={ObjectivesList}
                onChange={(e) => {
                  getSelectedValue(e);
                }}
              />
            </div>
            <div className="overview-table">
              <div className="overview-table-headers">
                <TableHeader subjectName={subject} />
              </div>
              <div className="overview-table-content">
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
                <TableRow Trend={Trend} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Overview };
