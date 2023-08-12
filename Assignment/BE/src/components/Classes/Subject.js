import { React , useState , useEffect } from 'react'

import "../../assets/stlyes/Classes.css";

import { ActualChip, PredictedChip } from "./ChipComponents";
import { Common, Subjects, Colors } from '../../helper/constants';


function Subject({ heading , classData}) {
  const [ subjectheading , setSubjectHeading ] = useState();
  const [ subject , setSubject ] = useState();
  const getClassInfo = async(a,b) =>{
    setSubjectHeading(heading)
    setSubject(classData)
  }
  var bgColor = Colors.White;
  switch (subject) {
    case Subjects.Writing:
      bgColor = Colors.Secondary;
      break;
    case Subjects.Maths:
      bgColor = Colors.Secondary;
      break;
    case Subjects.PE:
      bgColor = Colors.Secondary;
      break;
    default:
      bgColor = Colors.White;
  }

  useEffect(() =>{getClassInfo(heading , classData)},[]);

  return (
    <div className='classSubjectBlock' style={{ background: bgColor}}>
      <div className='subject-heading'>
        {subjectheading}
      </div>
      <div className='table-columns'>
        <div className='col-xs-6 subject-ks-result-col'>
        </div>
        <div className='col-xs-3'>
          <div className='row-heading'>
            <p className='row-heading-text'>
              {Common.Actual}
            </p>
          </div>
        </div>
        <div className='col-xs-3'>
          <p className='row-heading-text'>
            {Common.Predicted}
          </p>
        </div>
      </div>
      <div className='subject-data'>
        <div className='subject-data-block'>
          <p className='ks1-result'>KS1M</p>
          <ActualChip />
          <PredictedChip />
        </div>
      </div>
    </div>
  )
}

export { Subject };
