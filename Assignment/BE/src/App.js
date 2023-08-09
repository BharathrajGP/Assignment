import './';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

import { SessionStorage } from './util/SessionStorage';
import { SessionStorageKeys } from './helper/constants';

const { UserProvider } = require('./context')

const App = () => {
  
  const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
  return (
    <UserProvider>
      <div>
        {token && <NavBar />}
        <Routes>
                   
          <Route path={_Routes.CommonPages.login} element={<Login />} />
          <Route path={_Routes.CommonPages.authentication} element={<Authentication />} />
          <Route path={_Routes.CommonPages.registration} element={<Registration />} />
          <Route path={_Routes.CommonPages.addPassword} element={<AddPassword />} />
          <Route path={_Routes.CommonPages.updatePassword} element={<PasswordUpdate />} />
          <Route path={_Routes.CommonPages.UpdateProfile} element={<ProfileUpdate />} />

          <Route path={_Routes.CommonPages.dashboard} element={<Dashboard />} />
          <Route path={_Routes.SchoolAdmin.schoolAdmin} element={<SchoolAdmin />} />
          
          <Route path={_Routes.SchoolPages.classes} element={<Classes />} />
          <Route path={_Routes.SchoolPages.subjectOverview} element={<Overview />} />
          <Route path={_Routes.SchoolPages.topicMarkEditor} element={<MarkEditor />} />
          <Route path={_Routes.SchoolPages.subjectMarking} element={<Marking />} />

        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;