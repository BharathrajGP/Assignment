import React, { useState } from "react";
import Nav from "rsuite/Nav";
import Sidenav from "rsuite/Sidenav";
import "rsuite/dist/rsuite-no-reset.min.css";

import "../../App.css";

import DashboardIcon from "../../assets/images/Icondashboard.png";

import { NavigationBar } from "../../helper/constants";
import * as commonApi from "../../api/commonApi";

// await Axios.post(
//     commonApi.navBar,
//     {
//         data: {
//            email:email,
//         },
//     },
//     { headers: { Authorization: sessionStorage.getItem("user_jwt") } }
// )
async function navUpdate() {
    var email = sessionStorage.getItem("email");
    // const navBar = await commonApi.navBar({
    //     // data:{email:email}
    //   },{headers:{Authorization: sessionStorage.getItem("sessionToken")}})
    //   console.log(email)
    //   console.log(sessionStorage.getItem("sessionToken"))
    //   console.log(navBar)
    // await Axios.post(
    //     commonApi.navBar,
    //     {
    //         data: {
    //            email:email,
    //         },
    //     },
    //     { headers: { Authorization: sessionStorage.getItem("sessionToken") } }
    // ).then((response) => {
    //     console.log(response)
    //   }).catch((error) => {
    //     console.log("error", error);
    //   })
}
function NavBar() {
    const getNavData = async () => {
        const NavigationDetails = await commonApi.getNavBar({});
        console.log(NavigationDetails);
    };
    let [ClassNames, getClassNames] = useState(["Flounders", "DogFish"]);
    return (
        <div className="nav-bar" onLoad={getNavData}>
            <Sidenav>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" href="/Dashboard">
                            <img
                                src={DashboardIcon}
                                className="nav-link-logo"
                                alt="Mappix"
                            />
                            {NavigationBar.Dashboard}
                        </Nav.Item>

                        <Nav.Menu eventKey="3" title="My Classes">
                            {ClassNames.map((Class, i) => {
                                return (
                                    <Nav.Menu
                                        eventKey="3-1"
                                        title={Class && Class}
                                    >
                                        <Nav.Item eventKey="3-1-1">
                                            {NavigationBar.ClassHome}
                                        </Nav.Item>
                                        <Nav.Item eventKey="3-1-2">
                                            {NavigationBar.Maths}
                                        </Nav.Item>
                                        <Nav.Item eventKey="3-1-3">
                                            {NavigationBar.PE}
                                        </Nav.Item>
                                        <Nav.Item eventKey="3-1-4">
                                            {NavigationBar.Reading}
                                        </Nav.Item>
                                        <Nav.Item eventKey="3-1-5">
                                            {NavigationBar.Science}
                                        </Nav.Item>
                                        <Nav.Item eventKey="3-1-6">
                                            {NavigationBar.Writing}
                                        </Nav.Item>
                                    </Nav.Menu>
                                );
                            })}
                        </Nav.Menu>

                        <Nav.Item eventKey="2">{NavigationBar.Pupils}</Nav.Item>
                        <Nav.Item eventKey="2">
                            {NavigationBar.BigPicture}
                        </Nav.Item>
                        <Nav.Item eventKey="2">
                            {NavigationBar.Resouces}
                        </Nav.Item>
                        <Nav.Item eventKey="2">{NavigationBar.Admin}</Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default NavBar;
