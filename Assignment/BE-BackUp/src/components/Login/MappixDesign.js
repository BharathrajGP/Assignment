import React from 'react'

import facebookSquare from "../../assets/images/facebook-square.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/MappixLogo.png";

import { Common, ExternalLinks } from '../../helper';

function MappixDesign() {
  return (
    <>
      <img src={logo} className="mappixLogo" alt="maapix-logo"></img>
      <p className="logo-text">{Common.TrulyInformativeAssessment}</p>
      <a className="link" href={ExternalLinks.BeamEduWebsite}>
        {Common.beamEducationLink}
      </a>
      <div className="social-media">
        <img src={facebookSquare} className="fb-logo" alt="Faceboook" />
        <img src={linkedin} className="linkedin-logo" alt="LinkedIm" />
      </div>
      <p className="copyright">{Common.beamCopyright}</p>
    </>
  )
}

export { MappixDesign }