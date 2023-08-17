import React from 'react';

import { PupilTransferFirstTime, AddingPupils, Wizard } from './';

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
      </div>
    </div>
  )
}

export { PupilImport };
