import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import '../Styles/FormStyle.css'

function Login() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section style={{paddingTop:'150px',backgroundImage:'../Assets/login.webp'}}>
        {/* <Link to="banking">Login</Link> style="background-color: rgba(255, 255, 255, 0.637);"*/}
        <form className="form" id="naanu"  style={{backgroundColor:'rgba(255, 255, 255, 0.637)'}}>
        <h3 class="para">Login in to your bank account</h3>
        <section class="sec">
            <div class="b" ><input type="number" placeholder="Customer Id" id="c_id"/></div>
            <div class="c"><input type="password" placeholder="mpin" id="mpin"/></div>
            <div class="d"><Link to='/banking'>Login</Link></div>
            <div class="e"><Link to='Reset_mpin'>forgot mpin</Link>
            <Link >Sign up for new customer</Link></div>
        </section>
    </form>
      </section>
    </div>
  );
}

export default Login;
