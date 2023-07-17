import './';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Classes from './components/Classes/Classes';
import Dashboard from './components/Dashboard';
import Overview from './components/Subject-overview';
import MarkEditor from './components/MarkEditor';
import Marking from './components/Marking'
import Registration from './components/Login/Registration'
import AdminSchools from './components/AdminPages/AdminSchools'
import SchoolData from './components/AdminPages/SchoolData'
import AddPassword from './components/Login/AddPassword';
import NavBar from './helpers/NavBar';
import Authentication from './components/Login/Authentication';
import Resources from './components/ResourcePages/Resources';
import StudentGraph from './components/StudentGraphPages/StudentGraph';
import PieCharts from './components/StudentGraphPages/PieCharts';

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
            <Route path={"/Registration"} element={<Registration />} />
            <Route path={"/Schools"} element={<AdminSchools />} />
            <Route path={"/School-Data"} element={<SchoolData />} />
            <Route path={"/Password"} element={<AddPassword />} />
            <Route path={"/Authentication"} element={<Authentication />} />
            <Route path={"/Resources"} element={<Resources />} />
            <Route path={"/StudentGraph"} element={<StudentGraph />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
