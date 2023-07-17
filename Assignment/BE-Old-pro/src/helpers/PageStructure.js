import React from "react";
import '../App.css'
import NavBar from '../helpers/NavBar'
import Header from '../helpers/Header';

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