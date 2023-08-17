import React from 'react';
import { Col, Row } from 'react-bootstrap';

import "../../../assets/stlyes/overview.css";

import { OverallSubjectScore, KPISubjectScore, Common } from "../../../helper"

function TableHeader(subjectName) {
    return (
        <div className='table-header'>
            <div className='top-row'>
                <Row>
                    <Col xs={4} className=''><span></span></Col>
                    <Col xs={3} className='top-row-text'><span>{OverallSubjectScore(subjectName)}</span></Col>
                    <Col xs={2} className='top-row-text'><span>{KPISubjectScore(subjectName)}</span></Col>
                    <Col xs={2} className='top-row-text'><span>{Common.PerformaceProgress}</span></Col>
                    <Col xs={1} className=''><span></span></Col>
                </Row>
            </div>
            <div className='bottom-row'>
                <Row>
                    <Col xs={4} className=''><span></span></Col>
                    <Col xs={3} className=''>
                        <Row>
                            <Col xs={4} className='bottom-row-text'>{Common.Actual}</Col>
                            <Col xs={4} className='bottom-row-text'>{Common.Predicted}</Col>
                            <Col xs={4} className='bottom-row-text'>{Common.Tre}</Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={6} className='bottom-row-text'>{Common.Actual}</Col>
                            <Col xs={6} className='bottom-row-text'>{Common.Predicted}</Col>
                        </Row>
                    </Col>
                    <Col xs={2}><Row>
                        <Col xs={6} className='bottom-row-text'>{Common.KS1Result}</Col>
                        <Col xs={6} className='bottom-row-text'>{Common.Progress}</Col>
                    </Row></Col>

                    <Col xs={1}><Row>
                        <Col xs={12} className='bottom-row-text'>{Common.PlaceValue}</Col>
                    </Row></Col>

                </Row>
            </div>
        </div>
    )
}

export { TableHeader }