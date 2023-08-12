import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { PupilTable, ClassTable, TeacherTable, PupilImport } from "./";

import "../../assets/stlyes/SchoolAdminTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";


const SchoolAdminTabs = () => {
    const style = {
        modal_form: {
            marginTop: '70px',
            marginLeft: '20px',

        },
    };

    return (
        <div>
            <Tabs style={style.modal_form}>
                <TabList className="marking-tablist">
                    <Tab className="marking-tabs">Pupils</Tab>
                    <Tab className="marking-tabs">Classes</Tab>
                    <Tab className="marking-tabs">Teachers</Tab>
                    <Tab className="marking-tabs">Pupils Import</Tab>
                    <Tab className="marking-tabs">Pupil Transfer</Tab>
                </TabList>

                <TabPanel>
                    <PupilTable />
                </TabPanel>
                <TabPanel>
                    <ClassTable />
                </TabPanel>
                <TabPanel>
                    <TeacherTable />
                </TabPanel>
                <TabPanel>
                    <PupilImport />
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export { SchoolAdminTabs };
