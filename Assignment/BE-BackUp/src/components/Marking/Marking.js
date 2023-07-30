import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from "react-tabs";
import Select from "react-select";
import { Header } from 'rsuite';
import { SessionStorage } from '../../util/SessionStorage';
import * as constants from '../../helper/constants'
import * as commonApi from '../../api/markingApi';
import MarkingTable from './MarkingTable';
import NavBar from '../Shared/NavBar';

import '../../assets/stlyes/marking.css'
import "bootstrap/dist/css/bootstrap.min.css";

import HelpIcon from "../../assets/images/LightIcon.png";

const Marking = () => {
  const [selectedOption, setselectedOption] = useState(null);
  const [tabsData, setTabsData] = useState([]);
  const [headersData, setHeadersData] = useState([]);
  const [mainHeadersData, setMainHeadersData] = useState([]);
  const [_subjectClassId, setSubjectClassId] = useState('');
  const [_classId, setClassId] = useState('');
  const [className, setClassName] = useState('');
  const [subjectName, setSubjectName] = useState('');

  const getSelectedValue = (e) => setselectedOption(e.value);

  const getHeadersAndTabs = async (id) => {
    const data = { id: id }
    const response = await commonApi.fetchSubject(data);
    const result = response.Items.yearData;

    const tabs = result.map((ele) => {
      const _result = { category: ele.category, identifier: ele.identifier, isKPI: ele.isKPI }
      return _result;
    });

    setSubjectName(response.Items.subjectName)
    
    const uniqueTabs = tabs.filter((obj, index) => {
      return index === tabs.findIndex(ele => obj.category === ele.category);
    });

    const headers = result.map((ele) => {
      const _result = { category: ele.category, description: ele.description, identifier: ele.identifier, isKPI: ele.isKPI }
      return _result;
    });
    setMainHeadersData(headers);

    const _headers = headers.filter((ele) => ele.category === headers[0].category && { category: headers[0].category, description: headers[0].description, isKPI: headers[0].isKPI, identifier: headers[0].identifier });
    _headers.push({ category: headers[0].category, description: constants.marking.PlaceValueAttainment, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    _headers.unshift({ category: headers[0].category, description: ' ', isKPI: false, identifier: constants.marking.dd });
    setTabsData([...uniqueTabs]);
    setHeadersData([..._headers]);
  }

  const handleTabSelect = (category) => {
    const uniqueHeader = mainHeadersData.filter((ele) => ele.category === category && { category: headersData[0].category, description: ele.description, isKPI: ele.isKPI, identifier: headersData[0].identifier });
    uniqueHeader.push({ category: uniqueHeader[0].category, description: constants.marking.PlaceValueAttainment, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    uniqueHeader.unshift({ category: uniqueHeader[0].category, description: ' ', isKPI: false, identifier: constants.marking.dd });
    setHeadersData(uniqueHeader);
  }

  useEffect(() => {
    const subjectClassId = SessionStorage.getItem(constants.marking.subjectClassId);
    const className = SessionStorage.getItem(constants.SessionStorageKeys.className);
    const classId = SessionStorage.getItem(constants.marking.classId);
    setClassId(classId);
    setSubjectClassId(subjectClassId);
    getHeadersAndTabs(subjectClassId);
    setClassName(className);
  }, [])

  return (
    <div className="Page-layout">
      <NavBar />
      <div className="Page-header">
        <Header />
        <div className="marking-page">
          <div className="marking-header">
            <div className="marking-title">
              <span>{className} - {subjectName} - {constants.marking.Marking}</span>
            </div>
            <div className="right-column">
              <img src={HelpIcon} alt="Help" />
            </div>
          </div>
          <div className="marking-content">
            <div className="year-dropdown-div">
              <Select
                className="select-obj-dropdown"
                options={constants.marking.ObjectivesList}
                onChange={(e) => {
                  getSelectedValue(e);
                }}
              />

              <Tabs className='marking-tab'>
                <TabList className="marking-tablist">
                  {tabsData.map((ele, i) => {
                    return <Tab className="marking-tabs" key={i} onClick={() => handleTabSelect(ele.category)}>{ele.category}</Tab>
                  })}
                </TabList>
                <MarkingTable tabsData={tabsData} headersData={headersData} _subjectClassId={_subjectClassId} _classId={_classId} />
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marking;
