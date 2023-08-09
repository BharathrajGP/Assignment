import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from "react-tabs";
import Select from "react-select";
import { Header } from 'rsuite';
import { SessionStorage } from '../../util/SessionStorage';
import * as constants from '../../helper/constants'
import * as commonApi from '../../api/markingApi';
import MarkingTable from './MarkingTable';
import NavBar from '../Shared/NavBar';
import { isEmptyArray, isEmptyObject, isNullOrEmpty } from '../../util/utils';

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
  const [year, setYear] = useState('');
  const [bodyData, setBodyData] = useState([]);
  const [tableBodyData, setTableBodyData] = useState([]);
  const [categoryName, setCategoryName] = useState(tabsData[0]?.name);

  console.log({ headersData });
  const getSelectedValue = (e) => setselectedOption(e.value);

  const getHeadersAndTabs = async (id) => {
    const data = { id: id }
    const response = await commonApi.fetchSubject(data);
    const result = response.Items.category;
    !isEmptyArray(result) && setCategoryName(result[0]?.name);
    !isEmptyArray(result) && setTabsData(result);
    !isEmptyArray(result) && setMainHeadersData(result);
    !isEmptyArray(result) && setHeadersData(result);
    !isEmptyObject(response) && setYear(response.Items.year);
    const _headers = response.Items.category.filter((ele) => ele.name === response.Items.category[0].name && { description: response.Items.category[0].name, isKPI: response.Items.category[0].description[0].name, identifier: response.Items.category[0].description[0].identifier });
    const updatedData = _headers[0].description.map((ele) => { return { description: ele.name, isKPI: ele.isKPI, identifier: ele.identifier } });
    updatedData.push({ description: constants.marking.PlaceValueAttainment, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    updatedData.unshift({ description: 'fullName', isKPI: false, identifier: constants.marking.dd });
    setHeadersData([...updatedData]);

    const subjectClassId = SessionStorage.getItem(constants.marking.subjectClassId);
    const className = SessionStorage.getItem(constants.SessionStorageKeys.className);
    const subjectName = SessionStorage.getItem(constants.SessionStorageKeys.subjectName);
    const classId = SessionStorage.getItem(constants.marking.classId);

    (!isNullOrEmpty(subjectClassId) || !isNullOrEmpty(className) || !isNullOrEmpty(subjectName) || !isNullOrEmpty(classId)) && _fetchCategoryMark(subjectClassId, className, subjectName, classId, result[0]?.name, response.Items.year)
  }

  const _fetchCategoryMark = async (subjectClassId, className, subjectName, classId, categoryName, _year) => {
    const _data = { id: classId, subject: subjectName, category: categoryName, year: _year }
    const response = await commonApi.fetchCategoryMark(_data);
    const Items = [
      {
        category: [
          {
            name: "Reading for Pleasure",
            actual: 76,
            predicted: 96,
            description: [
              {
                name: "Listening",
                generalIdentifier: "RP1",
                comment: "",
                markings: 4
              },
              {
                name: "Comparing",
                generalIdentifier: "RP2",
                comment: "",
                markings: 3
              },
              {
                name: "Joining In",
                generalIdentifier: "RP3",
                comment: "",
                markings: 4
              }
            ],
          }
        ],
        upn: "TESTUX11111118",
        firstName: "Maiden",
        lastName: "Mark",
        senStatus: "EHCP",
        otherNeeds: {
          freeSchoolMealsE6: true,
          eal: false,
          serviceChild: false,
          childLookedAfter: true,
          freeSchoolMeals: false
        }
      }
    ]

    const _tableBodyData = Items.map((ele) => {
      const firstObj = { fullName: `${ele.firstName} ${ele.lastName}`, eal: ele.otherNeeds.eal, serviceChild: ele.otherNeeds.serviceChild }
      const firstLoop = ele.category.map((ele) => {
        const firstLoopObj = { ...firstObj, tabName: ele.name, actual: ele.actual, predicted: ele.predicted }
        const descriptionLoop = ele.description.map((ele) => {
          return { ...firstLoopObj, headerName: ele.name, generalIdentifier: ele.generalIdentifier, markings: ele.markings }
        })
        return descriptionLoop;
      })
      return firstLoop;
    })
    const data = _tableBodyData[0][0];
    setBodyData(data);
  }

  const handleTabSelect = (category) => {
    setCategoryName(category);
    const uniqueHeader = mainHeadersData.filter((ele) => ele.name === category && ele.description);
    const headers = uniqueHeader[0].description.map((ele) => { return { category: ele.name, description: ele.name, isKPI: ele.isKPI, identifier: ele.identifier } });

    headers.push({ description: constants.marking.PlaceValueAttainment, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    headers.unshift({ description: 'fullName', isKPI: false, identifier: constants.marking.dd });
    setHeadersData(headers);
  }

  useEffect(() => {
    const data = headersData.map((ele) => {
      const _data = bodyData.filter((_ele) => {
        return _ele.headerName === ele.description && ele
      })
      const upDateData = _data.map((ele) => ele);
      return upDateData[0]
    })
    const actualData = data.filter((ele) => {
      return !isEmptyObject(ele) && ele
    });
    console.log({actualData});
    setTableBodyData(actualData)
  }, [bodyData])

  useEffect(() => {
    const subjectClassId = SessionStorage.getItem(constants.marking.subjectClassId);
    const className = SessionStorage.getItem(constants.SessionStorageKeys.className);
    const subjectName = SessionStorage.getItem(constants.SessionStorageKeys.subjectName);
    const classId = SessionStorage.getItem(constants.marking.classId);
    setClassId(classId);
    setSubjectName(subjectName);
    setSubjectClassId(subjectClassId);
    setClassName(className);
    getHeadersAndTabs(subjectClassId);
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
                    return <Tab className="marking-tabs" key={i} onClick={() => handleTabSelect(ele.name)}>{ele.name}</Tab>
                  })}
                </TabList>
                <MarkingTable tabsData={tabsData} headersData={headersData} tableBodyData={tableBodyData} categoryName={categoryName} _subjectClassId={_subjectClassId} _classId={_classId} subjectName={subjectName} year={year} />
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marking;
