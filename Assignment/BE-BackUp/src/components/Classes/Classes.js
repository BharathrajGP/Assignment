import React, { useState } from "react";

import "../../assets/stlyes/Classes.css";

import Header from "../../components/Shared/Header";
import Subject from "./classSubjectBlock";
import { ClassPupilBlock } from "./ClassPupilBlock";
import { ClassInfo } from "./ClassInfo";
import LoadingSpinner from '../Shared/Loader/Loader';

import { Common, SessionStorageKeys, Subjects } from '../../helper/constants'
import { SessionStorage } from "../../util/SessionStorage";

function Classes() {
  const [isLoading, setIsLoading] = useState(false)
  const [classId, setClassId] = useState()
  const [classData, setClassData] = useState();
  const getClassInfo = async () => {
    setIsLoading(true);
    setClassId(SessionStorage.getItem(SessionStorageKeys.classId));
    
    setIsLoading(false);
  }

  return (
    <div className="Page-layout">
      {isLoading && <LoadingSpinner />}
      <div className="Page-header">
        <Header />
        <div className="page-body">
          <ClassInfo />
          {/* <Loader/> */}
          <div className="data-column">
            <div className="col-sm-3">
              <ClassPupilBlock />
            </div>
            <div className="col-sm-9">
              <Subject heading={Subjects.Maths} />
              <Subject heading={Subjects.Science} />
              <Subject heading={Subjects.Reading} />
              <Subject heading={Subjects.PE} />
              <Subject heading={Subjects.Writing} />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;