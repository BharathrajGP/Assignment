import React, { useEffect, useState } from "react";

import "../../assets/stlyes/Classes.css";

import Header from "../../components/Shared/Header";
import Subject from "./classSubjectBlock";
import { ClassPupilBlock } from "./ClassPupilBlock";
import { ClassInfo } from "./ClassInfo";
import LoadingSpinner from '../Shared/Loader/Loader';
import { Common, SessionStorageKeys, Subjects } from '../../helper/constants'
import * as commonApi from '../../api/commonApi'
import { SessionStorage } from "../../util/SessionStorage";
import { isEmptyObject } from "../../util/utils";

function Classes() {
  const [isLoading, setIsLoading] = useState(false)
  const [pupilCount, setPupilCount] = useState(0)
  const [classData, setClassData] = useState({});
  const [className, setClassName] = useState("")
  const [classYear, setClassYear] = useState()

  const getClassInfo = async () => {
    setIsLoading(true);
    console.log(SessionStorage.getItem(SessionStorageKeys.classId));
    setClassName(SessionStorage.getItem(SessionStorageKeys.className))
    setClassYear(SessionStorage.getItem(SessionStorageKeys.year))
    const pupilsInClassReq = { id: SessionStorage.getItem(SessionStorageKeys.classId) };
    console.log({ pupilsInClassReq });
    const pupilsInClass = await commonApi.getPupilsInClass(pupilsInClassReq);
    console.log("pupilsInClass", pupilsInClass.Items);
    if (isEmptyObject(pupilsInClass)) {
      console.log("No Pupils to Show");
      setPupilCount(0);
    }
    else {
      setClassData(pupilsInClass);
      setIsLoading(false);
    }
  }
  useEffect(() => { getClassInfo(); }, [])

  return (
    <div className="Page-layout">
      {isLoading && <LoadingSpinner />}
      <div className="Page-header">
        <Header />
        <div className="page-body">
          <ClassInfo className={className} classYear={classYear} />
          {/* <Loader/> */}
          <div className="data-column">

            <div className="col-sm-3">
              <ClassPupilBlock />
            </div>
            <div className="col-sm-9">
              <Subject heading={Subjects.Writing} classData={classData} />
              <Subject heading={Subjects.Reading} classData={classData} />
              <Subject heading={Subjects.Maths} classData={classData} />
              <Subject heading={Subjects.Science} classData={classData} />
              <Subject heading={Subjects.PE} classData={classData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;