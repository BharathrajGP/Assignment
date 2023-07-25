import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../Styles/Banking.css";

function Banking() {
  return (
    <div>
      <section className="nav">
        <Navbar />
      </section>
      <section className="ban-sec">
        <scroll>
          <div>
            <h1>Welcome To Bank Of Mysore</h1>
            <p>Feel Like Your Wallet</p>
            <h2 style={{ color: "yellowgreen", fontStyle: "italic" }}>
              Go through with your further transaction
            </h2>
          </div>
        </scroll>
      </section>
      <section className="foot" style={{position:'fixed',width:'100%'}}>
        <Footer />
      </section>
    </div>
  );
}

export default Banking;
