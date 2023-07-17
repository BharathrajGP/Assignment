import React from "react";
import LineGraph from "./LineGraph";
import Header from "../../helpers/Header";
import "../../assets/stlyes/Studentgraph.css";
import Accordionsss from "./Accordionsss";

function StudentGraph() {
  return (
    <div>
      <Header />
      <div className="studentgraph-page">
        <div className="studentgraph-header"></div>
        <div className="studentgraph-content">
          <div className="studentgraph-graph">
            <LineGraph />
          </div>
          <div className="studentgraph-collapsibledropdown">
            <Accordionsss />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentGraph;
