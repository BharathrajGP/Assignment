import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewData from "./ViewStudentsOfClass";

// function ViewClassStudents() {
//     return <ViewData />;
// }

function View({ switchTabs }) {
    return (
        <div>
            <button onClick={() => switchTabs()}>
                <VisibilityIcon />
                View
            </button>
        </div>
    );
}

export default View;
