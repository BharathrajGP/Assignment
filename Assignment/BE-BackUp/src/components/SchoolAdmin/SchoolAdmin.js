import React from "react";

import { Header } from "../Shared";
import { SchoolAdminTabs, Footer } from "./";


const SchoolAdminPages = () => {

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

export { SchoolAdminPages };
