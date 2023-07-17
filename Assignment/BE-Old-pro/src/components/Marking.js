import React from "react";
import { useState } from "react";
import "../App.css";
import NavBar from "../helpers/NavBar";
import Header from "../helpers/Header";
import "../assets/stlyes/marking.css";
import HelpIcon from "../assets/images/LightIcon.png";
import VolumeGrey from "../assets/images/VolumeGrey.png";
import Select from "react-select";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MarkButton from "../assets/images/MarkButton.png";

function Marking() {
  const ObjectivesList = [
    { value: "Overall", label: "Overall" },
    { value: "Year 1 Objectives", label: "Year 1 Objectives" },
    { value: "Year 2 Objectives", label: "Year 2 Objectives" },
    { value: "Year 3 Objectives", label: "Year 3 Objectives" },
    { value: "Year 4 Objectives", label: "Year 4 Objectives" },
    { value: "Year 5 Objectives", label: "Year 5 Objectives" },
  ];
  const SubjectTopics = [
    { subject: "Digital Values" },
    { subject: "Powers of 10" },
    { subject: "Negative Numbers" },
    { subject: "Rounding Numbers" },
    { subject: "Solving Problems" },
    { subject: "Roman Numerals" },
  ];
  const pupilsList = [
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
    {
      name: "Leslie Alexander",
      emptyValue: "",
      Actual: "30%",
      Predicted: "60%",
    },
  ];
  const [selectedOption, setselectedOption] = useState(null);
  const getSelectedValue = (e) => {
    setselectedOption(e.value);
  };
  const chipbgColor = ["#F34970", "#F4C900","#AABB5D", "#26C8B9", "#E0E0E0","#26C8B9"];
  return (
    <div className="Page-layout">
      <NavBar />
      <div className="Page-header">
        <Header />
        <div className="marking-page">
          <div className="marking-header">
            <div className="marking-title">
              <span>Flounders - Maths - Marking</span>
            </div>
            <div className="right-column">
              <img src={HelpIcon} alt="Help" />
            </div>
          </div>
          <div className="marking-content">
            <div className="year-dropdown-div">
              <Select
                className="select-obj-dropdown"
                options={ObjectivesList}
                onChange={(e) => {
                  getSelectedValue(e);
                }}
              />
              <div className="subject-tab-content">
                <Tabs>
                  <TabList className="marking-tablist">
                    <Tab className="marking-tabs">Place Value</Tab>
                    <Tab className="marking-tabs">
                      Addition, subtraction, multiplication & division
                    </Tab>
                    <Tab className="marking-tabs">Fractions</Tab>
                    <Tab className="marking-tabs">Measures</Tab>
                    <Tab className="marking-tabs">Geometry</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="marking-table">
                      <div className="marking-table-pupils">
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
                        <div className="marking-table-pupils-total">
                          <div className="pupil">
                            <span>Class Average</span>
                          </div>
                        </div>
                      </div>
                      <div className="marking-table-topics">
                        {SubjectTopics.map((subjects, ind) => {
                          return (
                            <div className="topics-row">
                              <div className="topics-title">
                                <span>{subjects.subject}</span>
                              </div>
                              <div className="topics-mark-button">
                                <img src={MarkButton} alt="Mark" />
                              </div>
                              <div className="topics-marking">
                                {pupilsList.map((pupils) => {
                                  return (
                                    <div className="marking-chips">
                                      <span className="chips" style={{backgroundColor : `${chipbgColor[ind]}`}} >
                                        {pupils.emptyValue}
                                      </span>
                                    </div>
                                  );
                                })}
                                <div className="marking-chips">
                                  <span className="chips" style={{backgroundColor : `${chipbgColor[ind]}`}}></span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="marking-topic-total">
                        <div className="topic-total-title">
                          <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                          <div className="topic-actual-average">
                            <div className="topic-actual-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-actual-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Actual}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                          <div className="topic-predicted-average">
                            <div className="topic-predicted-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-predicted-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Predicted}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="marking-table">
                      <div className="marking-table-pupils">
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
                        <div className="marking-table-pupils-total">
                          <div className="pupil">
                            <span>Class Average</span>
                          </div>
                        </div>
                      </div>
                      <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                          return (
                            <div className="topics-row">
                              <div className="topics-title">
                                <span>{subjects.subject}</span>
                              </div>
                              <div className="topics-mark-button">
                                <img src={MarkButton} alt="Mark" />
                              </div>
                              <div className="topics-marking">
                                {pupilsList.map((pupils) => {
                                  return (
                                    <div className="marking-chips">
                                      <span className="chips">
                                        {pupils.emptyValue}
                                      </span>
                                    </div>
                                  );
                                })}
                                <div className="marking-chips">
                                  <span className="chips"></span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="marking-topic-total">
                        <div className="topic-total-title">
                          <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                          <div className="topic-actual-average">
                            <div className="topic-actual-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-actual-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Actual}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                          <div className="topic-predicted-average">
                            <div className="topic-predicted-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-predicted-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Predicted}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="marking-table">
                      <div className="marking-table-pupils">
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
                        <div className="marking-table-pupils-total">
                          <div className="pupil">
                            <span>Class Average</span>
                          </div>
                        </div>
                      </div>
                      <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                          return (
                            <div className="topics-row">
                              <div className="topics-title">
                                <span>{subjects.subject}</span>
                              </div>
                              <div className="topics-mark-button">
                                <img src={MarkButton} alt="Mark" />
                              </div>
                              <div className="topics-marking">
                                {pupilsList.map((pupils) => {
                                  return (
                                    <div className="marking-chips">
                                      <span className="chips">
                                        {pupils.emptyValue}
                                      </span>
                                    </div>
                                  );
                                })}
                                <div className="marking-chips">
                                  <span className="chips"></span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="marking-topic-total">
                        <div className="topic-total-title">
                          <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                          <div className="topic-actual-average">
                            <div className="topic-actual-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-actual-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Actual}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                          <div className="topic-predicted-average">
                            <div className="topic-predicted-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-predicted-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Predicted}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="marking-table">
                      <div className="marking-table-pupils">
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
                        <div className="marking-table-pupils-total">
                          <div className="pupil">
                            <span>Class Average</span>
                          </div>
                        </div>
                      </div>
                      <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                          return (
                            <div className="topics-row">
                              <div className="topics-title">
                                <span>{subjects.subject}</span>
                              </div>
                              <div className="topics-mark-button">
                                <img src={MarkButton} alt="Mark" />
                              </div>
                              <div className="topics-marking">
                                {pupilsList.map((pupils) => {
                                  return (
                                    <div className="marking-chips">
                                      <span className="chips">
                                        {pupils.emptyValue}
                                      </span>
                                    </div>
                                  );
                                })}
                                <div className="marking-chips">
                                  <span className="chips"></span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="marking-topic-total">
                        <div className="topic-total-title">
                          <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                          <div className="topic-actual-average">
                            <div className="topic-actual-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-actual-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Actual}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                          <div className="topic-predicted-average">
                            <div className="topic-predicted-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-predicted-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Predicted}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="marking-table">
                      <div className="marking-table-pupils">
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
                        <div className="marking-table-pupils-total">
                          <div className="pupil">
                            <span>Class Average</span>
                          </div>
                        </div>
                      </div>
                      <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                          return (
                            <div className="topics-row">
                              <div className="topics-title">
                                <span>{subjects.subject}</span>
                              </div>
                              <div className="topics-mark-button">
                                <img src={MarkButton} alt="Mark" />
                              </div>
                              <div className="topics-marking">
                                {pupilsList.map((pupils) => {
                                  return (
                                    <div className="marking-chips">
                                      <span className="chips">
                                        {pupils.emptyValue}
                                      </span>
                                    </div>
                                  );
                                })}
                                <div className="marking-chips">
                                  <span className="chips"></span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="marking-topic-total">
                        <div className="topic-total-title">
                          <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                          <div className="topic-actual-average">
                            <div className="topic-actual-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-actual-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Actual}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                          <div className="topic-predicted-average">
                            <div className="topic-predicted-average-title">
                              <span>Actual</span>
                            </div>
                            <div className="topic-predicted-average-marking">
                              {pupilsList.map((pupil) => {
                                return (
                                  <div className="marking-chips">
                                    <span className="chip">{pupil.Predicted}</span>
                                  </div>
                                );
                              })}
                              <div className="marking-chips">
                                <span className="chip">30%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marking;
