import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/stlyes/Accordionsss.css";
import PieCharts from "./PieCharts";
import Comments from "./Comments";
import DisplayingTopics from "./DisplayingTopics";

function Accordionsss() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" className="accordion--item">
        <Accordion.Header>
          <p className="sub">Maths</p>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="accordion-pie-comment">
              <PieCharts />
              <Comments />
            </div>
            <div className="crud">
              <DisplayingTopics />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="accordion--item">
        <Accordion.Header>
          <p className="sub">PE</p>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="accordion-pie-comment">
              <PieCharts />
              <Comments />
            </div>
            <div className="crud">
              <DisplayingTopics />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="accordion--item">
        <Accordion.Header>
          <p className="sub">Science</p>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="accordion-pie-comment">
              <PieCharts />
              <Comments />
            </div>
            <div className="crud">
              <DisplayingTopics />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="accordion--item">
        <Accordion.Header>
          <p className="sub">Reading</p>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="accordion-pie-comment">
              <PieCharts />
              <Comments />
            </div>
            <div className="crud">
              <DisplayingTopics />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="accordion--item">
        <Accordion.Header>
          <p className="sub">Writing</p>
        </Accordion.Header>
        <Accordion.Body>
          <div>
            <div className="accordion-pie-comment">
              <PieCharts />
              <Comments />
            </div>
            <div className="crud" style={{marginTop:'20px'}}>
              <DisplayingTopics style={{marginTop:'20px'}}/>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionsss;
