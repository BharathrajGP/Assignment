import './';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CommonPages, SchoolPages, SchoolAdmin, InviteUser, RegistrationProcess, } from './helper';

//Common
import { Authentication, Login, Registration } from './components/Login';
import { Dashboard, NavBar } from './components/Shared';

// import NavBar from './components/Shared/NavBar';

//Classes
import { Classes } from './components/Classes';
import { Overview, MarkEditor, Marking } from './components/Marking';
import { Markings } from './components/Marking';

//SchoolAdmin
import { SchoolAdminPages } from "./components/SchoolAdmin";

//Profile
import { ProfileUpdate, PasswordUpdate } from './components/Profile';
// import PasswordUpdate from './components/Profile/UpdatePassword';

import { NewUser, SetPassword } from './components/InviteUser';


import { SessionStorage } from './util/SessionStorage';
import { SessionStorageKeys } from './helper';
import { B2BRegistrationFrom, B2CRegistrationForm } from './components/RegistrationForm';

const { UserProvider } = require('./context');

const App = () => {

  const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
  return (
    <UserProvider>
      <div>
        {token && token && <NavBar />}
        <Routes>

          <Route path={CommonPages.login} element={<Login />} />
          <Route path={CommonPages.authentication} element={<Authentication />} />
          <Route path={CommonPages.login} element={<Login />} />
          <Route path={CommonPages.updatePassword} element={<PasswordUpdate />} />
          <Route path={CommonPages.UpdateProfile} element={<ProfileUpdate />} />
          <Route path={CommonPages.registration} element={<Registration />} />

          <Route path={CommonPages.dashboard} element={<Dashboard />} />
          <Route path={SchoolAdmin.schoolAdmin} element={<SchoolAdminPages />} />

          <Route path={InviteUser.newUser} element={<NewUser />} />
          <Route path={InviteUser.setPassword} element={<SetPassword />} />
          <Route path={RegistrationProcess.b2bRegister} element={<B2BRegistrationFrom />} />
          <Route path={RegistrationProcess.b2cRegister} element={<B2CRegistrationForm />} />

          <Route path={SchoolPages.classes} element={<Classes />} />
          <Route path={SchoolPages.subjectOverview} element={<Overview />} />
          <Route path={SchoolPages.topicMarkEditor} element={<MarkEditor />} />
          <Route path={SchoolPages.subjectMarkings} element={<Markings />} />

        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;