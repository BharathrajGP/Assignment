import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';
import Login from './Pages/Login';
import Deposit from './Pages/Deposit';
import Header from './components/Header';
import Banking from './Pages/Banking';
import './Styles/Navbar.css';
import Withdrawal from './Pages/Withdrawal';
import CheckBal from './Pages/CheckBal';
import ResetMpin from './Pages/ResetMpin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/deposit' element={<Deposit/>}/>
      <Route path='/banking' element={<Banking/>}/>
      <Route path='/withdraw' element={<Withdrawal/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/check_bal' element={<CheckBal/>}/>
      <Route path='/Reset_mpin' element={<ResetMpin/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
