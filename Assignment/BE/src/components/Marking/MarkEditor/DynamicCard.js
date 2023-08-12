import React from "react";

import { MarkingLevels } from "../../../helper/constants";

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";

const DynamicCard = (props) => {
    const { name, description } = props;
    return (
        <div className={name === 'greaterDepth' ? 'greater-card' : name === 'expected' ? 'expected-card' : name === 'emerging' ? 'emerging-card' : ''}>
            <div className="title">
                <span>{name === 'greaterDepth' ? MarkingLevels.GREATER_DEPTH : name === 'expected' ? MarkingLevels.EXPECTED : name === 'emerging' ? MarkingLevels.EMERGING : ''}</span>
            </div>
            <div className="description">
                <p className="description-textbox">{description}</p>
            </div>
        </div>
    )
}

export { DynamicCard }