import React from 'react'

export default function classSubjectBlock({heading}) {
    let bgColor = "#FFFFFF"
    let bgOpacity = 0
    switch(heading) {
        case "Maths":
          bgOpacity = 0.05
          break;
        case "Reading":
          bgOpacity = 0.05
          break;
        case "Writing":
          bgOpacity = 0.05;
          break;
        default:
            bgColor = "#FFFFFF"
      }
  return (
      <div className='classSubjectBlock' style={{background : bgColor , bgOpacity : bgOpacity }}>
        <div className='subject-heading'>
            {heading}
        </div>
        <div className='table-columns'>
            <div className='col-xs-5'></div>
            <div className='col-xs-3'>
                <div className='row-heading'>
                    <p className='row-heading-text'>
                        Actual
                    </p>
                </div>
            </div>
            <div className='col-xs-3'>Predicted</div>
        </div>
      </div>
  )
}
