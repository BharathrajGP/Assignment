import React from 'react'

export class ThisYear extends React.Component {
  constructor() {
      super();

      var today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
          date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          year:today.getFullYear(),
          previousYear:today.getFullYear()-1,

      };
  }

  render() {
      return (
          <div className='date'>
             <button type='submit' style={{color:'grey',border:'1px solid black',borderRadius:'3px',height:'30px',marginLeft:'10px'}}>{new Date().getFullYear()}</button>
          </div>
      );
  }
}
export class PreviousYear extends React.Component {
  constructor() {
      super();

      var today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      this.state = {
          date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          year:today.getFullYear(),
          previousYear:today.getFullYear()-1,

      };
  }

  render() {
      return (
          <div className='date'>
             <button  style={{color:'grey',border:'1px solid black',borderRadius:'3px',height:'30px'}}>{new Date().getFullYear()-1}</button>
          </div>
      );
  }
}

export function Yearss(){
  return(
    <div >
      <div style={{justifyContent:'center',padding:'20px',paddingLeft:'80px'}}>
      <h2 >The data I want to import relates to the academic year beginning:</h2>
      </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 
      <PreviousYear />
      <ThisYear />
    </div>
    </div>
  )
}
