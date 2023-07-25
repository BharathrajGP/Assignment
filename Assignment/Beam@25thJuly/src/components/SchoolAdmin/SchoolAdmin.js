import React from "react";
import Header from "../Shared/Header";
import SchoolAdminTabs from "./SchoolAdminTabs";
import SchoolAdminFooter from "./SchoolAdminFooter/SchoolAdminFooter";

function SchoolAdmin() {
    return (
        <div className="Page-layout">
            <div className="Page-header">
                <Header />
                <div style={{ marginTop: "40px" }}>
                    <SchoolAdminTabs />
                </div>
                {/* <SchoolAdminFooter /> */}
            </div>
        </div>
    );
}

export default SchoolAdmin;
