import React from 'react';

import PupilTransferFirstTime from './PupilTransferFirstTime'
import AddingPupils from './AddingPupils';
import Wizard from './Wizard'
import { Yearss } from './Year';

import '../../../assets/stlyes/SchoolAdminPupilImport.css';

const PupilImport = () => {
  return (
    <div>
      <div className='pupilimport-div'>
        <PupilTransferFirstTime />
        <AddingPupils />
      </div>
      <div style={{ alignItems: 'center' }}>
        <Wizard />
        {/* <Yearss /> */}
      </div>
    </div>
  )
}

export default PupilImport
