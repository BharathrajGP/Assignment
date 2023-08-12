import React from "react";

import Header from "../Shared/Header";
import { SchoolAdminTabs, Footer } from "./";


const SchoolAdmin = () => {

    return (
        <div className="Page-layout">
            <div className="Page-header">
                <Header />
                <div style={{ marginTop: "40px" }}>
                    <SchoolAdminTabs />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export { SchoolAdmin };
