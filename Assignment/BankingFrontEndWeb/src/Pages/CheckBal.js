import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function CheckBal() {
  return (
    <div>
      <Header/>
      <div style={{width:'500px',borderRadius:'20px',boxShadow:'5px -5px 25px 25px rgba(172, 255, 47, 0.724)',backgroundColor:'rgba(128, 0, 128, 0.716)',color:'aqua',marginLeft:'35%',marginTop:'10%'}}>
      <form id="naanu" style={{padding:'15px'}}>
          <h3 style={{textAlign:'center'}}>Enter upi pin to check balance</h3>
          <div class="mb-3" style={{paddingLeft:'50px',paddingRight:'50px'}}>
          <label for="exampleFormControlInput1" class="form-label">Enter upi pin</label>
            <input  style={{textAlign:'center'}} type="password" className="form-control" id="upi" placeholder="UPI PIN"/><br/>
            </div>
            <div style={{textAlign:'center'}}><Link>Submit</Link>
          </div><br/>
          <div style={{textAlign:'center'}}><Link>Clear</Link>
          </div>
        </form>
    </div>
    </div>
  )
}

export default CheckBal
