import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from "react-tabs";
import { Header } from 'rsuite';
import { SessionStorage } from '../../util/SessionStorage';
import * as constants from '../../helper/constants'
import * as commonApi from '../../api/markingApi';
import { MarkingTable } from './';
import NavBar from '../Shared/NavBar';
import LoadingSpinner from '../Shared/Loader/LoadingSpinner';
import { hasText, isEmptyArray, isEmptyObject, isNullOrEmpty } from '../../util/utils';

import '../../assets/stlyes/marking.css'
import "bootstrap/dist/css/bootstrap.min.css";

import HelpIcon from "../../assets/images/LightIcon.png";

const Marking = () => {
  const [tabsData, setTabsData] = useState([]);
  const [headersData, setHeadersData] = useState([]);
  const [mainHeadersData, setMainHeadersData] = useState([]);
  const [bodyData, setBodyData] = useState([]);
  const [_subjectClassId, setSubjectClassId] = useState('');
  const [_classId, setClassId] = useState('');
  const [className, setClassName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [year, setYear] = useState('');
  const [tableBodyData, setTableBodyData] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getHeadersAndTabs = async (id, cat) => {
    setIsLoading(true);
    const data = { id: id }
    const response = await commonApi.fetchSubject(data);
    const result = response.Items.category;
    !isEmptyArray(result) && setTabsData(result);
    !isEmptyArray(result) && setMainHeadersData(result);
    !isEmptyArray(result) && setHeadersData(result);
    !isEmptyObject(response) && setYear(response.Items.year);

    const _headers = response.Items.category.filter((ele) => ele.name === hasText(cat) ? cat : response.Items.category[0].name && { description: hasText(cat) ? cat : response.Items.category[0].name, isKPI: response.Items.category[0].description[0].name, identifier: response.Items.category[0].description[0].identifier });
    const updatedData = _headers[SessionStorage.getItem(constants.SessionStorageKeys.categoryIndex) ? SessionStorage.getItem(constants.SessionStorageKeys.categoryIndex) : 0].description.map((ele) => { return { description: ele.name, isKPI: ele.isKPI, identifier: ele.identifier } });
    updatedData.push({ description: `${!isNullOrEmpty(SessionStorage.getItem(constants.SessionStorageKeys.categoryName)) ? SessionStorage.getItem(constants.SessionStorageKeys.categoryName) : response.Items.category[0].name} ${constants.marking.Attainment}`, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    updatedData.unshift({ description: 'fullName', isKPI: false, identifier: constants.marking.dd });
    setHeadersData([...updatedData]);

    const subjectClassId = SessionStorage.getItem(constants.marking.subjectClassId);
    const className = SessionStorage.getItem(constants.SessionStorageKeys.className);
    const subjectName = SessionStorage.getItem(constants.SessionStorageKeys.subjectName);
    const classId = SessionStorage.getItem(constants.marking.classId);

    (!isNullOrEmpty(subjectClassId) || !isNullOrEmpty(className) || !isNullOrEmpty(subjectName) || !isNullOrEmpty(classId)) && _fetchCategoryMark(subjectClassId, className, subjectName, classId, hasText(cat) ? cat : response.Items.category[0].name, response.Items.year)
    setIsLoading(false);
  }

  const _fetchCategoryMark = async (subjectClassId, className, subjectName, classId, categoryName, _year) => {
    const _data = { id: classId, subject: subjectName, category: categoryName, year: Number(_year) }
    const response = await commonApi.fetchCategoryMark(_data);

    const result = response.Items;

    !isEmptyArray(result) && setBodyData(result.filter((ele) => !isNullOrEmpty(ele) && ele.category[0]?.name === categoryName && ele));
    !isEmptyArray(result) && setTableBodyData(result.filter((ele) => !isNullOrEmpty(ele) && ele.category[0]?.name === categoryName && ele));
  }

  const handleTabSelect = (category, i) => {
    SessionStorage.setItem(constants.SessionStorageKeys.categoryName, category);
    SessionStorage.setItem(constants.SessionStorageKeys.categoryIndex, i);
    setCategoryName(category);
  };

  useEffect(() => {
    const uniqueHeader = mainHeadersData?.filter((ele) => ele.name === SessionStorage.getItem(constants.SessionStorageKeys.categoryName) && ele.description);
    const headers = uniqueHeader[0]?.description.map((ele) => { return { category: ele.name, description: ele.name, isKPI: ele.isKPI, identifier: ele.identifier } });

    headers?.push({ description: `${SessionStorage.getItem(constants.SessionStorageKeys.categoryName)} ${constants.marking.Attainment}`, actual: constants.marking.Actual, predicted: constants.marking.Predicted, isKPI: false, identifier: constants.marking.ff });
    headers?.unshift({ description: 'fullName', isKPI: false, identifier: constants.marking.dd });
    setHeadersData(headers);

    const filterData = (!isNullOrEmpty(_subjectClassId) || !isNullOrEmpty(className) || !isNullOrEmpty(subjectName) || !isNullOrEmpty(_classId)) && _fetchCategoryMark(_subjectClassId, className, subjectName, _classId, SessionStorage.getItem(constants.SessionStorageKeys.categoryName), year)
    setTableBodyData(filterData);
  }, [SessionStorage.getItem(constants.SessionStorageKeys.categoryName)]);

  useEffect(() => {
    setCategoryName(SessionStorage.getItem(constants.SessionStorageKeys.categoryName));
    const subjectClassId = SessionStorage.getItem(constants.marking.subjectClassId);
    const className = SessionStorage.getItem(constants.SessionStorageKeys.className);
    const subjectName = SessionStorage.getItem(constants.SessionStorageKeys.subjectName);
    const classId = SessionStorage.getItem(constants.marking.classId);
    setClassId(classId);
    setSubjectName(subjectName);
    setSubjectClassId(subjectClassId);
    setClassName(className);
    getHeadersAndTabs(subjectClassId, SessionStorage.getItem(constants.SessionStorageKeys.categoryName));
  }, [])

  useEffect(()=>{
    (isNullOrEmpty(SessionStorage.getItem(constants.SessionStorageKeys.categoryIndex)) && !isEmptyArray(tabsData)) && setCategoryName(tabsData[0]?.name);
  }, [tabsData])

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
              {SessionStorage.getItem(constants.SessionStorageKeys.categoryName) ?
                <Tabs className='marking-tab'>
                <TabList className="marking-tablist">
                  {tabsData.map((ele, i) => {
                    return <Tab
                      className={ele.name === SessionStorage.getItem(constants.SessionStorageKeys.categoryName) ?
                        'react-tabs__tab--selected' :
                        'marking-tabs'} key={i} onClick={() => handleTabSelect(ele.name, i)}
                      style={(ele.name === SessionStorage.getItem(constants.SessionStorageKeys.categoryName) && SessionStorage.getItem(constants.SessionStorageKeys.categoryName)) ? { backgroundColor: '#ffffff', color: '#084059' } : { backgroundColor: '#084059', color: '#ffffff' }}
                    >{ele.name}</Tab>
                  })}
                </TabList>
                {(isEmptyArray(bodyData) && isLoading) ? <LoadingSpinner /> :
                  <MarkingTable tabsData={tabsData} headersData={headersData} tableBodyData={tableBodyData} categoryName={categoryName} _subjectClassId={_subjectClassId} _classId={_classId} subjectName={subjectName} year={year} />
                }
              </Tabs> :
              <Tabs className='marking-tab'>
                <TabList className="marking-tablist">
                  {tabsData.map((ele, i) => {
                    return <Tab
                      className={ele.name === SessionStorage.getItem(constants.SessionStorageKeys.categoryName) ?
                        'react-tabs__tab--selected' :
                        'marking-tabs'} key={i} onClick={() => handleTabSelect(ele.name, i)}
                    >{ele.name}</Tab>
                  })}
                </TabList>
                {(!isEmptyArray(tableBodyData) && isLoading) ? <LoadingSpinner /> :
                  <MarkingTable tabsData={tabsData} headersData={headersData} tableBodyData={tableBodyData} categoryName={categoryName} _subjectClassId={_subjectClassId} _classId={_classId} subjectName={subjectName} year={year} />
                }
              </Tabs>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Marking };
