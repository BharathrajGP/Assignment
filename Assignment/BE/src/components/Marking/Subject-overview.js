import React,{ useState } from "react";
import Select from "react-select";
import { PieChart } from "d3-react-pie-chart";

import "../../App.css";
import "../../assets/stlyes/overview.css";

import NavBar from "../Shared/NavBar";
import Header from "../../components/Shared/Header";

import HelpIcon from "../../assets/images/LightIcon.png";
import VolumeGrey from "../../assets/images/VolumeGrey.png";

function Overview() {
  const ObjectivesList = [
    { value: "Overall", label: "Overall" },
    { value: "Year 1 Objectives", label: "Year 1 Objectives" },
    { value: "Year 2 Objectives", label: "Year 2 Objectives" },
    { value: "Year 3 Objectives", label: "Year 3 Objectives" },
    { value: "Year 4 Objectives", label: "Year 4 Objectives" },
    { value: "Year 5 Objectives", label: "Year 5 Objectives" },
  ];
  const pupilsList = [
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
    {
      name: "Leslie Alexander",
      Overall: { Actual: "15%", Predicted: "30%", Trend: "100" },
      KPI: { Actual: "90%", Predicted: "15%" },
      PerformanceProgress: {
        KS1Result: "KS1M",
        PlaceValue: "60%",
        Progress: "^",
      },
    },
  ];
  const [selectedOption, setselectedOption] = useState(null);
  const getSelectedValue = (e) => {
    setselectedOption(e.value);
  };
  const sampleData = [
    { type: "", value: 7 },
    { type: "", value: 4 },
    { type: "", value: 2 },
    { type: "", value: 2 },
  ];
  const dataAccessorField: int = "value"; // field name of the data value
  const dataLabelField: string = ""; // field name of the label value
  const innerRadius: number = 0; 
  const dimensions: { height: number } = { height: 30 };
  return (
    <div className="Page-layout">
      <NavBar />
      <div className="Page-header">
        <Header />
        <div className="overview-page">
          <div className="overview-header">
            <div className="overview-title">
              <span>Flounders - Maths - Overview</span>
            </div>
            <div className="right-column">
              <img src={HelpIcon} alt="Help" />
            </div>
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
              <div className="overview-table-pupils">
                {pupilsList.map((data, i) => {
                  return (
                    <div className="pupil">
                      <span>{data.name}</span>
                      <img src={VolumeGrey} alt="vol" />
                      <span className="S-chip">S</span>
                      <span className="EAL-chip">EAL</span>
                    </div>
                  );
                })}
                <div className="overview-table-pupils-total">
                  <div className="pupil">
                    <span>Class Average</span>
                  </div>
                </div>
              </div>
              <div className="overview-table-overall">
                <div className="overview-table-overall-headers">
                  <div className="main-heading">
                    <span>Overall Maths Score</span>
                  </div>
                  <div className="sub-heading">
                    <div className="sub-heading-column">
                      <span>Actual</span>
                    </div>
                    <div className="sub-heading-column">
                      <span>Predicted</span>
                    </div>
                    <div className="sub-heading-column">
                      <span>Trend</span>
                    </div>
                  </div>
                  <div className="overview-table-overall-data">
                    {pupilsList.map((overalls, i) => {
                      return (
                        <div className="overall-data">
                          <div className="sub-heading-column">
                            <span className="overall-data-actual">
                              {overalls.Overall.Actual}
                            </span>
                          </div>
                          <div className="sub-heading-column">
                            <span className="overall-data-predicted">
                              {overalls.Overall.Predicted}
                            </span>
                          </div>
                          <div className="sub-heading-column">
                            <span className="overall-data-trend">
                              <PieChart
                                data={sampleData}
                                dataAccessorField={dataAccessorField}
                                dataLabelField={dataLabelField}
                                dimensions={dimensions}
                                innerRadius={innerRadius}
                              />
                              ;
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="overall-data-total">
                      <div className="overall-data">
                        <div className="sub-heading-column">
                          <span className="overall-data-actual"></span>
                        </div>
                        <div className="sub-heading-column">
                          <span className="overall-data-predicted"></span>
                        </div>
                        <div className="sub-heading-column">
                          <span className="overall-data-trend"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-table-KPI">
                <div className="overview-table-overall-headers">
                  <div className="main-heading">
                    <span>KPI Maths Score</span>
                  </div>
                  <div className="sub-heading">
                    <div className="sub-heading-column">
                      <span>Actual</span>
                    </div>
                    <div className="sub-heading-column">
                      <span>Predicted</span>
                    </div>
                  </div>
                  <div className="overview-table-overall-data">
                    {pupilsList.map((overalls, i) => {
                      return (
                        <div className="overall-data">
                          <div className="sub-heading-column">
                            <span className="overall-data-actual">
                              {overalls.KPI.Actual}
                            </span>
                          </div>
                          <div className="sub-heading-column">
                            <span className="overall-data-predicted">
                              {overalls.KPI.Predicted}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="overall-KPI-total">
                      <div className="overall-data">
                        <div className="sub-heading-column">
                          <span className="overall-data-actual"></span>
                        </div>
                        <div className="sub-heading-column">
                          <span className="overall-data-predicted"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-table-performance">
                <div className="overview-table-overall-headers">
                  <div className="main-heading">
                    <span>Performance Progress</span>
                  </div>
                  <div className="sub-heading">
                    <div className="sub-heading-column">
                      <span>KS1 Result</span>
                    </div>
                    <div className="sub-heading-column">
                      <span>Progress</span>
                    </div>
                    <div className="sub-heading-column">
                      <span>Place Value</span>
                    </div>
                  </div>
                  <div className="overview-table-overall-data">
                    {pupilsList.map((overalls, i) => {
                      return (
                        <div className="overall-data">
                          <div className="sub-heading-column">
                            <span className="overall-data-actual">
                              {overalls.PerformanceProgress.KS1Result}
                            </span>
                          </div>
                          <div className="sub-heading-column">
                            <span className="overall-data-predicted">
                              {overalls.PerformanceProgress.Progress}
                            </span>
                          </div>
                          <div className="sub-heading-column">
                            <span className="overall-data-trend">
                              {overalls.PerformanceProgress.PlaceValue}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="overall-progress-total">
                      <div className="overall-data">
                        <div className="sub-heading-column">
                          <span className="overall-data-actual"></span>
                        </div>
                        <div className="sub-heading-column">
                          <span className="overall-data-predicted">^</span>
                        </div>
                        <div className="sub-heading-column">
                          <span className="overall-data-trend">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
