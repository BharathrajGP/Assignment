import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SchoolAdminPupil from "./SchoolAdminPupils/SchoolAdminPupil";
import SchoolAdminClasses from "./SchoolAdminClasses/SchoolAdminClasses";
import SchoolAdminTeachers from "./SchoolAdminTeachers/SchoolAdminTeachers";
import "../../assets/stlyes/SchoolAdminTabs.css";
import SchoolAdminPupilImport from "./SchoolAdminPupilImport/SchoolAdminPupilImport";
import { useState } from "react";

function SchoolAdminTabs() {
    return (
        <div className="subject-tab-content">
            <Tabs>
                <TabList className="marking-tablist">
                    <Tab className="marking-tabs">Pupils</Tab>
                    <Tab className="marking-tabs">Classes</Tab>
                    <Tab className="marking-tabs">Teachers</Tab>
                    <Tab className="marking-tabs">Pupils Import</Tab>
                    <Tab className="marking-tabs">Pupil Transfer</Tab>
                    {/* <Tab className="marking-tabs">Assessment Sets</Tab> */}
                </TabList>

                <TabPanel>
                    <SchoolAdminPupil />
                </TabPanel>
                <TabPanel>
                    <SchoolAdminClasses />
                </TabPanel>
                <TabPanel>
                    <SchoolAdminTeachers />
                </TabPanel>
                <TabPanel>
                    <SchoolAdminPupilImport />
                </TabPanel>
                <TabPanel></TabPanel>
                {/* <TabPanel></TabPanel> */}
            </Tabs>
        </div>
    );
}

export default SchoolAdminTabs;
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import SchoolAdminPupil from "./SchoolAdminPupil";
// import SchoolAdminClasses from "./SchoolAdminClasses";
// import SchoolAdminTeachers from "./SchoolAdminTeachers";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab className="marking-tabs"  label="Pupils" {...a11yProps(0)} />
//                   <Tab className="marking-tabs" label="Classes" {...a11yProps(1)} />
//                     <Tab className="marking-tabs" label="Teachers" {...a11yProps(2)} />
//                     <Tab className="marking-tabs" label="Pupil Import" {...a11yProps(3)} />
//                     <Tab className="marking-tabs" label="Pupil Transfer" {...a11yProps(4)} />
//                     <Tab className="marking-tabs" label="Assessment Sets" {...a11yProps(5)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         <SchoolAdminPupil />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <SchoolAdminClasses />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <SchoolAdminTeachers />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={3}>
//         Table Four
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={4}>
//         Table Five
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={5}>
//         Table Six
//       </CustomTabPanel>
//     </Box>
//   );
// }
