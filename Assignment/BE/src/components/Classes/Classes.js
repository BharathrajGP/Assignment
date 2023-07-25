import React, { useState } from "react";
import Axios from "axios";

import "../../assets/stlyes/Classes.css";

import Header from "../../components/Shared/Header";
import Subject from "./classSubjectBlock";
import { ClassPupilBlock } from "./ClassPupilBlock";
import { ClassInfo } from "./ClassInfo";
import Loader from '../Shared/Loader/Loader'

import UploadIcon from "../../assets/images/upload.png";
import LightIcon from "../../assets/images/LightIcon.png";

import { Common, Subjects } from '../../helper/constants'

function Classes() {

  let [classData, setClassData] = useState();
  return (
    <div className="Page-layout">
      <div className="Page-header">
        <Header />
        <div className="page-body">
          <ClassInfo/>
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