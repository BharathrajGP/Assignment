import React from 'react'

const Demo = () => {
    return (
        <div>
            <TabPanel>
                <div className="marking-table">
                    <div className="marking-table-pupils">
                        {pupilsList.map((data, i) => {
                            return (
                                <div className="pupil">
                                    <span>{data.name}</span>
                                    <img src={VolumeGrey} alt="vol" />
                                    <span className="S-chip">S</span>
                                    <span className="EAL-chip">EAL</span>
                                </div>
                            );
                        })}
                        <div className="marking-table-pupils-total">
                            <div className="pupil">
                                <span>Class Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="marking-table-topics">
                        {SubjectTopics.map((subjects, ind) => {
                            return (
                                <div className="topics-row">
                                    <div className="topics-title">
                                        <span>{subjects.subject}</span>
                                    </div>
                                    <div className="topics-mark-button">
                                        <img src={MarkButton} alt="Mark" />
                                    </div>
                                    <div className="topics-marking">
                                        {pupilsList.map((pupils) => {
                                            return (
                                                <div className="marking-chips">
                                                    <span className="chips" style={{ backgroundColor: `${chipbgColor[ind]}` }} >
                                                        {pupils.emptyValue}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        <div className="marking-chips">
                                            <span className="chips" style={{ backgroundColor: `${chipbgColor[ind]}` }}></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="marking-topic-total">
                        <div className="topic-total-title">
                            <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                            <div className="topic-actual-average">
                                <div className="topic-actual-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-actual-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Actual}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="topic-predicted-average">
                                <div className="topic-predicted-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-predicted-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Predicted}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="marking-table">
                    <div className="marking-table-pupils">
                        {pupilsList.map((data, i) => {
                            return (
                                <div className="pupil">
                                    <span>{data.name}</span>
                                    <img src={VolumeGrey} alt="vol" />
                                    <span className="S-chip">S</span>
                                    <span className="EAL-chip">EAL</span>
                                </div>
                            );
                        })}
                        <div className="marking-table-pupils-total">
                            <div className="pupil">
                                <span>Class Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                            return (
                                <div className="topics-row">
                                    <div className="topics-title">
                                        <span>{subjects.subject}</span>
                                    </div>
                                    <div className="topics-mark-button">
                                        <img src={MarkButton} alt="Mark" />
                                    </div>
                                    <div className="topics-marking">
                                        {pupilsList.map((pupils) => {
                                            return (
                                                <div className="marking-chips">
                                                    <span className="chips">
                                                        {pupils.emptyValue}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        <div className="marking-chips">
                                            <span className="chips"></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="marking-topic-total">
                        <div className="topic-total-title">
                            <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                            <div className="topic-actual-average">
                                <div className="topic-actual-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-actual-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Actual}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="topic-predicted-average">
                                <div className="topic-predicted-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-predicted-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Predicted}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="marking-table">
                    <div className="marking-table-pupils">
                        {pupilsList.map((data, i) => {
                            return (
                                <div className="pupil">
                                    <span>{data.name}</span>
                                    <img src={VolumeGrey} alt="vol" />
                                    <span className="S-chip">S</span>
                                    <span className="EAL-chip">EAL</span>
                                </div>
                            );
                        })}
                        <div className="marking-table-pupils-total">
                            <div className="pupil">
                                <span>Class Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                            return (
                                <div className="topics-row">
                                    <div className="topics-title">
                                        <span>{subjects.subject}</span>
                                    </div>
                                    <div className="topics-mark-button">
                                        <img src={MarkButton} alt="Mark" />
                                    </div>
                                    <div className="topics-marking">
                                        {pupilsList.map((pupils) => {
                                            return (
                                                <div className="marking-chips">
                                                    <span className="chips">
                                                        {pupils.emptyValue}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        <div className="marking-chips">
                                            <span className="chips"></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="marking-topic-total">
                        <div className="topic-total-title">
                            <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                            <div className="topic-actual-average">
                                <div className="topic-actual-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-actual-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Actual}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="topic-predicted-average">
                                <div className="topic-predicted-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-predicted-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Predicted}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="marking-table">
                    <div className="marking-table-pupils">
                        {pupilsList.map((data, i) => {
                            return (
                                <div className="pupil">
                                    <span>{data.name}</span>
                                    <img src={VolumeGrey} alt="vol" />
                                    <span className="S-chip">S</span>
                                    <span className="EAL-chip">EAL</span>
                                </div>
                            );
                        })}
                        <div className="marking-table-pupils-total">
                            <div className="pupil">
                                <span>Class Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                            return (
                                <div className="topics-row">
                                    <div className="topics-title">
                                        <span>{subjects.subject}</span>
                                    </div>
                                    <div className="topics-mark-button">
                                        <img src={MarkButton} alt="Mark" />
                                    </div>
                                    <div className="topics-marking">
                                        {pupilsList.map((pupils) => {
                                            return (
                                                <div className="marking-chips">
                                                    <span className="chips">
                                                        {pupils.emptyValue}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        <div className="marking-chips">
                                            <span className="chips"></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="marking-topic-total">
                        <div className="topic-total-title">
                            <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                            <div className="topic-actual-average">
                                <div className="topic-actual-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-actual-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Actual}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="topic-predicted-average">
                                <div className="topic-predicted-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-predicted-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Predicted}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="marking-table">
                    <div className="marking-table-pupils">
                        {pupilsList.map((data, i) => {
                            return (
                                <div className="pupil">
                                    <span>{data.name}</span>
                                    <img src={VolumeGrey} alt="vol" />
                                    <span className="S-chip">S</span>
                                    <span className="EAL-chip">EAL</span>
                                </div>
                            );
                        })}
                        <div className="marking-table-pupils-total">
                            <div className="pupil">
                                <span>Class Average</span>
                            </div>
                        </div>
                    </div>
                    <div className="marking-table-topics">
                        {SubjectTopics.map((subjects) => {
                            return (
                                <div className="topics-row">
                                    <div className="topics-title">
                                        <span>{subjects.subject}</span>
                                    </div>
                                    <div className="topics-mark-button">
                                        <img src={MarkButton} alt="Mark" />
                                    </div>
                                    <div className="topics-marking">
                                        {pupilsList.map((pupils) => {
                                            return (
                                                <div className="marking-chips">
                                                    <span className="chips">
                                                        {pupils.emptyValue}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                        <div className="marking-chips">
                                            <span className="chips"></span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="marking-topic-total">
                        <div className="topic-total-title">
                            <span>Place Value Attainment</span>
                        </div>
                        <div className="topic-total-averages">
                            <div className="topic-actual-average">
                                <div className="topic-actual-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-actual-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Actual}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="topic-predicted-average">
                                <div className="topic-predicted-average-title">
                                    <span>Actual</span>
                                </div>
                                <div className="topic-predicted-average-marking">
                                    {pupilsList.map((pupil) => {
                                        return (
                                            <div className="marking-chips">
                                                <span className="chip">{pupil.Predicted}</span>
                                            </div>
                                        );
                                    })}
                                    <div className="marking-chips">
                                        <span className="chip">30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </div>
    )
}

export default Demo