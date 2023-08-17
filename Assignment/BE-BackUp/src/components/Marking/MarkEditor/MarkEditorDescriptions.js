import React from "react";

import { MarkingLevels } from "../../../helper";

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";
import { DynamicCard } from ".";

const MarkEditorDescriptions = (props) => {
    const { cards } = props;

    return (
        <div className="right-content">
            <div className="explanation-cards">
                {cards.map((ele) => <DynamicCard {...ele} />)}
                <div className="below-card">
                    <div className="title">
                        <span>{MarkingLevels.BELOW}</span>
                    </div>
                </div>
                <div className="absent-card">
                    <div className="title">
                        <span>{MarkingLevels.ABSENT}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MarkEditorDescriptions };
