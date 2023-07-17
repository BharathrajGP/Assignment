import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../../assets/stlyes/PieChartss.css";

const data = [
  { name: "Chapter 1", value: 33 },
  { name: "Chapter 2", value: 35 },
  { name: "Chapter 3", value: 38 },
  { name: "Chapter 4", value: 55 },
  { name: "Chapter 5", value: 60 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

function PieCharts() {
  return (
    <div style={{width:'425px',marginTop:'0px'}}>
      <div className="pie-markingThreadDiv">
        <p className="pie-markingThread">Marking Trend</p>
      </div>
      <div className="pie-pieChartss">
        <div style={{marginTop:'33px'}}>
          <PieChart width={104} height={104} className="piee">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              dataKey="value"
              outerRadius={52}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="pie-copyrightDiv">
            <p className="pie-copyright">*Based on 22/49 completed objectives</p>
          </div>
        </div>
        <div className="pie-bottom">
                <div><p className="pie-para">Year end Prediction </p><button style={{background:'#AABB5D'}}><p>6E</p></button></div>
                <div><p className="pie-para">Year 5 Result</p><button style={{background:'#F4C900'}}><p>4G</p></button></div>
                <div><p className="pie-para">Key Stage 1 Result</p><button style={{background:'#F4C900'}}><p>2W</p></button></div>
        </div>
      </div>
    </div>
  );
}

export default PieCharts;
