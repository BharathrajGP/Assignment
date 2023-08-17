import React from 'react'

import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/MappixLogo.png";

import { Common, ExternalLinks } from '../../helper';

import '../../assets/stlyes/Registration/MappixLogoRegistration.css'

function MappixDesign() {
  return (
    <>
      <img src={logo} className="_mappixLogo" alt="maapix-logo"></img>
      <p className="_logo-text">{Common.TrulyInformativeAssessment}</p>
      <a className="_link" href={ExternalLinks.BeamEduWebsite}>
        {Common.beamEducationLink}
      </a>
      <div className="_social-media">
        <img src={facebookSquare} className="_fb-logo" alt="Faceboook" />
        <img src={linkedin} className="_linkedin-logo" alt="LinkedIm" />
      </div>
      <p className="_copyright">{Common.beamCopyright}</p>
    </>
  )
}

export { MappixDesign }