import React from "react";
import "../../assets/stlyes/PupilProgress.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DescriptionIcon from '@mui/icons-material/Description';

function PupilProgress() {
  return (
    <div className="main">
      <div className="heading">
        <p>Pupil Progress Ladders </p><InfoOutlinedIcon style={{width:'24px',height:'24px'}}/>
      </div>
      <div className="details">
        <div className="a">
          <div className="subject">Maths</div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 1</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 2</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 3</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 4</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 5</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 6</p></div>
        </div>
        <div className="b">
          <div className="subject">Reading</div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 1</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 2</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 3</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 4</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 5</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 6</p></div>
        </div>
        <div className="a">
          <div className="subject">Writing</div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 1</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 2</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 3</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 4</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 5</p></div>
          <div className="year"><DescriptionIcon style={{width:'20px',height:'20px'}}/><p>Year 6</p></div>
        </div>
      </div>
    </div>
  );
}

export default PupilProgress;
