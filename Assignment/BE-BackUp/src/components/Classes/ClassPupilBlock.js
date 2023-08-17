import React, { useState } from "react";

import "../../assets/stlyes/Classes.css";

import { Common } from '../../helper'

function ClassPupilBlock(pupils) {
  let [classData, setClassData] = useState();
  setClassData(pupils);
  return (
    <div className="pupils-section">
      <div>
        <p className="section-heading">{Common.Pupils}</p>
      </div>
      <div className="table-section">
        {classData && classData.map((data, i) => {
          return (
            <div className="table-section-data">
              <button className="Actions-btn">{Common.Actions}</button>
              <span className="table-text-black">{data.pupil_firstname} {data.pupil_lastname}</span>
            </div>
          );
        })}

        <div className="table-total">
          <p className="table-total-text">{Common.ClassAverage}</p>
        </div>
        <div className="table-total">
          <p className="table-total-text">{Common.PredictedPassRate}</p>
        </div>
      </div>
    </div>
  )
}

export { ClassPupilBlock }