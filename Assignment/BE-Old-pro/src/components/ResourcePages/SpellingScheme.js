import React from 'react';
import "../../assets/stlyes/PupilProgress.css";
import DescriptionIcon from '@mui/icons-material/Description';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function SpellingScheme() {
  return (
    <div className="main">
      <div className="heading">
        <p>Spelling Schemes </p><InfoOutlinedIcon style={{width:'24px',height:'24px'}}/>
      </div>
      <div className="details">
        <div className="a">
          <div className="subject">Spellings</div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 3</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 4</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 5</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 6</p></div>
        </div>
      </div>
    </div>
  )
}

export default SpellingScheme
