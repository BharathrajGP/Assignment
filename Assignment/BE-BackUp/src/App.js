import './';
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import * as _Routes from './helper/routes';
//Common
import Login from './components/Login/Login';
import Authentication from './components/Login/Authentication';
import Registration from './components/Login/Registration'
import AddPassword from './components/Login/AddPassword';
import Dashboard from './components/Shared/Dashboard/Dashboard';

import NavBar from './components/Shared/NavBar';
//Classes
import Classes from './components/Classes/Classes';
import Overview from './components/Marking/Subject-overview';
import MarkEditor from './components/Marking/MarkEditor/MarkEditor';
import Marking from './components/Marking/Marking'

//SchoolAdmin
import SchoolAdmin from "./components/SchoolAdmin/SchoolAdmin";

//Profile
import ProfileUpdate from './components/Profile/UpdateProfile';
import PasswordUpdate from './components/Profile/UpdatePassword';


//SuperAdmin
import AdminSchools from './components/AdminPages/AdminSchools'
import SchoolData from './components/AdminPages/SchoolData'
import { SessionStorage } from './util/SessionStorage';
import { SessionStorageKeys } from './helper/constants';


const { UserProvider } = require('./context')


const App = () => {
  const location = useLocation();
  const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
  return (
    <UserProvider>
      <div>
        {token && <NavBar />}
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'/Authentication'} element={<Authentication />} />
          <Route path={'/Registration'} element={<Registration />} />
          <Route path={'/Password'} element={<AddPassword />} />

          <Route path={'/UpdatePassword'} element={<PasswordUpdate />} />
          <Route path={'/Update-Profile'} element={<ProfileUpdate />} />


          <Route path={'/Dashboard'} element={<Dashboard />} />
          <Route path={_Routes.SchoolPages.classes} element={<Classes />} />
          <Route path={'/Overview'} element={<Overview />} />
          <Route path={'/MarkEditor'} element={<MarkEditor />} />
          <Route path={'/Marking'} element={<Marking />} />

          <Route path={'/Schools'} element={<AdminSchools />} />
          <Route path={'/School-Data'} element={<SchoolData />} />

          <Route path={_Routes.SchoolAdmin.schoolAdmin} element={<SchoolAdmin />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;