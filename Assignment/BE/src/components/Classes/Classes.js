import React, { useEffect, useState } from "react";

import "../../assets/stlyes/Classes.css";

import { ClassPupilBlock } from "./";
import { ClassInfo } from "./";
import Header from "../../components/Shared/Header";
import LoadingSpinner from '../Shared/Loader/Loader';
import { Subject } from "./" ;

import * as commonApi from '../../api/commonApi';
import * as classesApi from '../../api/classesApi';
import { SessionStorageKeys , Subjects } from '../../helper/constants'
import { isEmptyObject } from "../../util/utils";
import { SessionStorage } from "../../util/SessionStorage";
import { useNavigate } from "react-router";

function Classes() {
  const navigate = useNavigate();
  const [classData, setClassData] = useState({});
  const [className, setClassName] = useState("");
  const [classYear, setClassYear] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [pupilCount, setPupilCount] = useState(0)
  const [teacher, setTeacher] = useState({});

  const getClassInfo = async () => {
    setIsLoading(true);
    console.log(SessionStorage.getItem(SessionStorageKeys.classId));
    setClassName(SessionStorage.getItem(SessionStorageKeys.className))
    setClassYear(SessionStorage.getItem(SessionStorageKeys.year))
    getPupilsInClass();
    getTeachersInClass();
    // setIsLoading(false);
  }
  const getTeachersInClass = async () => {
    var req = { id: SessionStorage.getItem(SessionStorageKeys.classId) }
    const _getTeachersInClass = await classesApi.getTeachersInClass(req);
    if (isEmptyObject(_getTeachersInClass)) {
      navigate(0);
    } else {
      setTeacher(_getTeachersInClass);
      setIsLoading(false);
    }
  };
  const getPupilsInClass = async () => {
    const pupilsInClassReq = { id: SessionStorage.getItem(SessionStorageKeys.classId) };
    const pupilsInClass = await commonApi.getPupilsInClass(pupilsInClassReq);
    console.log("pupilsInClass", pupilsInClass.Items);
    if (isEmptyObject(pupilsInClass)) {
      setPupilCount(0);
    } else {
      setClassData(pupilsInClass);
    }

  };


  useEffect(() => { getClassInfo(); }, [])

  return (
    <div className="Page-layout">
      {isLoading && <LoadingSpinner />}
      <div className="Page-header">
        <Header />
        <div className="page-body">
          {!isEmptyObject(pupilCount) && <ClassInfo className={className} classYear={classYear} classteacher={teacher} />}
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

export { Classes };