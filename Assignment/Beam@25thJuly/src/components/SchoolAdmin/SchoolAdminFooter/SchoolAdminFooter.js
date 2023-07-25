import React from 'react';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import EmailIcon from '@mui/icons-material/Email';

function SchoolAdminFooter() {
  return (
    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
      <div style={{width:'30%'}}><a><ModeCommentRoundedIcon />FAQs</a><a><EmailIcon />Contact Us</a></div>
      <div style={{width:'70%',display:'flex',justifyContent:'flex-end'}}>©2015 - 2022 Topiq Ltd</div>
    </div >
  )
}

export default SchoolAdminFooter
