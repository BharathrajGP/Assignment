import React from 'react'
import PupilTransferFirstTime from './PupilTransferFirstTime'
import AddingPupils from './AddingPupils';
import '../../../assets/stlyes/SchoolAdminPupilImport.css';
import Wizard from './Wizard'
import { Yearss } from './Year';

function SchoolAdminPupilImport() {
  return (
    <div>
      <div className='pupilimport-div'>
        <PupilTransferFirstTime />
        <AddingPupils />
      </div>
      <div style={{alignItems:'center'}}>
        <Wizard />
        {/* <Yearss /> */}
      </div>
    </div>
  )
}

export default SchoolAdminPupilImport
