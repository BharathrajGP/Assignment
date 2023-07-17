import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "../../assets/stlyes/Documents.css";

function Documents() {
  return (
    <div className="document-main">
      <div className="document-heading">
        <p>Help & Guidence Documents </p>
        <InfoOutlinedIcon style={{ width: "24px", height: "24px" }} />
      </div>
      <div className="guidence">
        <div className="role">
          <p>Admin</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>Setting Up Checklist</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>Importing Pupils (SIMS)</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>Amending Pupil Data (SIMS)</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>Creating and Amending Classes</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>Inviting, Amending and Removing Users</p>
        </div>
        <div className="information">
          <DescriptionIcon />
          <p>User Roles Defined</p>
        </div>
      </div>
    </div>
  );
}

export default Documents;
