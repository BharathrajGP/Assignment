import React from "react";

import '../App.css'

import { NavBar, Header } from './'
// import Header from '../components/Shared/Header';

function Dashboard() {
    return (
        <div className='Page-layout'>
            <NavBar />
            <div className='Page-header'>
                <Header />
            </div>
        </div>
    );
}

export default Dashboard;