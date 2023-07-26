import "./";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Classes from "./components/Classes/Classes";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Marking/Subject-overview";
import MarkEditor from "./components/Marking/MarkEditor";
import Marking from "./components/Marking/Marking";
import Registration from "./components/Login/Registration";
import AdminSchools from "./components/AdminPages/AdminSchools";
import SchoolData from "./components/AdminPages/SchoolData";
import AddPassword from "./components/Login/AddPassword";
import NavBar from "./components/Shared/NavBar";
import Authentication from "./components/Login/Authentication";
import SchoolAdmin from "./components/SchoolAdmin/SchoolAdmin";
import UpdateProfile from "./components/Profile/UpdateProfile";
import ChangePassword from "./components/Profile/ChangePassword";

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    {this.props.location !== "/" && <NavBar />}
                    <Routes>
                        <Route path={"/"} element={<Login />} />
                        <Route path={"/Classes"} element={<Classes />} />
                        <Route path={"/Dashboard"} element={<Dashboard />} />
                        <Route path={"/Overview"} element={<Overview />} />
                        <Route path={"/MarkEditor"} element={<MarkEditor />} />
                        <Route path={"/Marking"} element={<Marking />} />
                        <Route
                            path={"/Registration"}
                            element={<Registration />}
                        />
                        <Route path={"/Schools"} element={<AdminSchools />} />
                        <Route path={"/School-Data"} element={<SchoolData />} />
                        <Route path={"/Password"} element={<AddPassword />} />
                        <Route
                            path={"/Authentication"}
                            element={<Authentication />}
                        />
                        <Route
                            path={"/SchoolAdmin"}
                            element={<SchoolAdmin />}
                        />
                        <Route
                            path={"/UpdateProfile"}
                            element={<UpdateProfile />}
                        />
                        <Route
                            path={"/changePass"}
                            element={<ChangePassword />}
                        />
                    </Routes>
                </Router>
            </>
        );
    }
}

export default App;
