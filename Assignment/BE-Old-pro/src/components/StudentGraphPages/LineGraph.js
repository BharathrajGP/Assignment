import React,{useState} from 'react';
import {LineChart,Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend} from 'recharts';
import '../../assets/stlyes/GraphLegends.css';

const data=[
    {name:"jan",maths:0,pe:55,science:70,reading:80,writing:90},
    {name:"feb",maths:0,pe:35,science:70,reading:60,writing:50},
    {name:"mar",maths:90,pe:75,science:20,reading:60,writing:90},
    {name:"apr",maths:70,pe:89,science:50,reading:90,writing:90},
    {name:"may",maths:50,pe:78,science:80,reading:70,writing:80},
    {name:"jun",maths:50,pe:39,science:70,reading:80,writing:90},
    {name:"jul",maths:50,pe:47,science:70,reading:80,writing:80},  
  ]
  
function LineGraph() {
    const [linesM, setlinesM] = useState(true);
    const [linesS, setlinesS] = useState(true);
    const [linesR, setlinesR] = useState(true);
    const [linesW, setlinesW] = useState(true);
    const [linesP, setlinesP] = useState(true);
  return (
    <div>
      <LineChart width={915} height={496} data={data}>
      {/* {lines === "maths" ?  (<Line type={'monotone'} dataKey={'maths'} strokeWidth={3} stroke='white'/>) : (<Line type={'monotone'} dataKey={'maths'} strokeWidth={3} stroke='red'/>)} */}
      {linesM && (<Line type={'monotone'} dataKey={'maths'} strokeWidth={3} stroke='#6D47FF' isAnimationActive={false} />)}
      {linesS && (<Line type={'monotone'} dataKey={'science'} strokeWidth={3} stroke='#F4C900' isAnimationActive={false} />)}
      {linesR && (<Line type={'monotone'} dataKey={'reading'} strokeWidth={3} stroke='#AABB5D' isAnimationActive={false} />)}
      {linesW && (<Line type={'monotone'} dataKey={'writing'} strokeWidth={3} stroke='#26C8B9' isAnimationActive={false} />)}
      {linesP && (<Line type={'monotone'} dataKey={'pe'} strokeWidth={3} stroke='#F34970' isAnimationActive={false} />)}
      <CartesianGrid/>
      <XAxis dataKey={"name"}/>
      <YAxis />
      {/* <Tooltip/> */}
      {/* <Legend/> */}
    </LineChart>
    <div className='buttondiv'>
    <button className='buttonReport'><p>Select report subjects</p></button>
    <button type='submit' onClick={()=>{setlinesM(!linesM)}} style={{textDecoration:linesM ? '':'line-through',backgroundColor:'#6D47FF'}} className='button'><p>Maths</p></button>
    <button type='submit' onClick={()=>{setlinesP(!linesP)}} style={{textDecoration:linesP ? '':'line-through',backgroundColor:'#F34970'}} className='button'><p>PE</p></button>
    <button type='submit'  onClick={()=>{setlinesS(!linesS)}} style={{textDecoration:linesS ? '':'line-through',backgroundColor:'#F4C900'}} className='button'><p>Science</p></button>
    <button type='submit' onClick={()=>{setlinesR(!linesR)}} style={{textDecoration:linesR ? '':'line-through',backgroundColor:'#AABB5D'}} className='button'><p>Reading</p></button>
    <button type='submit'  onClick={()=>{setlinesW(!linesW)}} style={{textDecoration:linesW ? '':'line-through',backgroundColor:'#26C8B9'}} className='button'><p>Writing</p></button>
    </div>
    </div>
  )
}

export default LineGraph
