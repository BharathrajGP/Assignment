import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

// style="width: 500px; border-radius: 20px;box-shadow: 5px -5px 25px 25px rgba(172, 255, 47, 0.724);background-color:rgba(128, 0, 128, 0.716); color: aqua;"
function Deposit() {
  return (
    <div>
      <Header/>
      <div style={{width:'500px',borderRadius:'20px',boxShadow:'5px -5px 25px 25px rgba(172, 255, 47, 0.724)',backgroundColor:'rgba(128, 0, 128, 0.716)',color:'aqua',marginLeft:'35%',marginTop:'10%'}}>
      <form id="naanu" style={{padding:'15px'}}>
          <h3 style={{textAlign:'center'}}>Enter the amount to be deposit</h3>
          <div class="mb-3" style={{paddingLeft:'50px',paddingRight:'50px'}}>
            <label for="exampleFormControlInput1" className="form-label">Enter the amount</label>
            <input style={{textAlign:'center'}} type="number" className="form-control" id="amt" placeholder="Enter Amount"/><br/>
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

export default Deposit
