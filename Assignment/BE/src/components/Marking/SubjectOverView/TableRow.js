import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PieDonutChart from '@garvae/react-pie-donut-chart';

import "../../../assets/stlyes/overview.css";

import SpeakerChip from "../../../assets/images/SpeakerIcon.png";
import ServiceChip from "../../../assets/images/ServiceChip.png";
import EALChip from "../../../assets/images/EALChip.png";

import { markingColors } from "../../../helper/constants"
//TODO - Still Working on this page
function TableRow({ Trend }) {
    const [isPhonics, setIsPhonics] = useState(true);
    const [isServiceChild, setIsServiceChild] = useState(true);
    const [isEAL, setIsEAL] = useState(true);
    const [actualColor, setActualColor] = useState(markingColors.below);
    const [predictedColor, setPredictedColor] = useState(markingColors.emerging);
    const [kpiActualColor, setkpiActualColor] = useState(markingColors.expected);
    const [kpiPredictedColor, setkpiPredictedColor] = useState(markingColors.greaterDepth);
    const [ks1ResultColor, setks1ResultColor] = useState(markingColors.emerging);
    const [progressColor, setProgressColor] = useState(markingColors.greaterDepth);
    const [placeValueColor, setPlaceValueColor] = useState(markingColors.expected);

    return (
        <div className='table-row'>
            <Row>
                <Col xs={4} className='pupil'>
                    <Row>
                        <Col xs={6}>Leslie Alexander</Col>
                        <Col xs={2}><span className='speaker-icon'>
                            {isPhonics && <img src={SpeakerChip} alt='Phonics' />}
                        </span></Col>
                        <Col xs={2}><span className='speaker-icon'>
                            {isServiceChild && <img src={ServiceChip} alt='Phonics' />}
                        </span></Col>
                        <Col xs={2}><span className='speaker-icon'>
                            {isEAL && <img src={EALChip} alt='Phonics' />}
                        </span></Col>
                    </Row>
                </Col>
                <Col xs={3} className='row-overall'>
                    <Row>
                        <Col xs={4} className='row-overall-actual'>
                            <span className='actual-chip' style={{ backgroundColor: actualColor }}>15%</span>
                        </Col>
                        <Col xs={4} className='row-overall-predicted'>
                            <span className='actual-chip' style={{ backgroundColor: predictedColor }}>15%</span>
                        </Col>
                        <Col xs={4} className='row-overall-trend'>
                            <PieDonutChart
                                data={Trend}
                                size={30}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} className='row-kpi'>
                    <Row>
                        <Col xs={6} className='kpi-actual'>
                            <span className='actual-chip' style={{ backgroundColor: kpiActualColor }}>15%</span>
                        </Col>
                        <Col xs={6} className='kpi-predicted'>
                            <span className='actual-chip' style={{ backgroundColor: kpiPredictedColor }}>15%</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} className='row-ks1'>
                    <Row>
                        <Col xs={6} className='ks1-actual'>
                        <span className='actual-chip' style={{backgroundColor : ks1ResultColor}}>15%</span>
                        </Col>
                        <Col xs={6} className='ks1-progress'>
                        <span className='actual-chip' style={{backgroundColor : progressColor}}>^</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1} className='row-place-value'>
                    <Row>
                        <Col xs={12} className='place-value'><span className='actual-chip' style={{backgroundColor : placeValueColor}}>15%</span></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export { TableRow }
