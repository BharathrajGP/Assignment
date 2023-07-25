import React,{useRef, useState} from 'react';
import '../../../assets/stlyes/DropFiles.css';
function Dropsss() {
    const [files,setFiles]=useState(null);
    const inputRef= useRef();

    const handleDragOver=(event)=>{
        event.preventDefault();
    }

    const handleDrop =(event) =>{
        event.preventDefault();
        console.log(event)
        console.log(event.dataTransfer.files)
        setFiles(event.dataTransfer.files);

        // const handleUpload=()=>{}
        
    }
    if(files){
      return(
        <div className='uploads'>
          <ul>
            {Array.from(files).map((file,index) => <li key={index}>{file.name}</li>)}
          </ul>
          {/* <div>
            <button onClick={()=>setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>upload</button>
          </div> */}
        </div>
      )
    }
  return (
     <div>
      {!files &&(
        <div className='dropZone'
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
          <input type='file' multiple onChange={(event)=>setFiles(event.target.files)} hidden ref={inputRef} accept='.csv'/>
            <div style={{cursor:'pointer',border:'0.5px solid black',background:'lightgrey'}}><a onClick={()=>inputRef.current.click()}><h1 style={{color:'blue'}}>Drag or drop files to upload</h1></a></div>
        </div>
      )}
    </div>
  )
}

function DropFiles(){
  return(
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
      <Dropsss />
    </div>
  )
}

export default DropFiles
