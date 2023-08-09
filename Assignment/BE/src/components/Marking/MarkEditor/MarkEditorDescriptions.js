import React from "react";

import "../../../App.css";
import "../../../assets/stlyes/MarkEditor.css";

import { MarkingLevels } from "../../../helper/constants";


export default function MarkEditorDescriptions() {
    return (
        <div className="right-content">
            <div className="explanation-cards">
                <div className="greater-card">
                    <div className="title">
                        <span>{MarkingLevels.GREATER_DEPTH}</span>
                    </div>
                    <div className="description">
                        <p className="description-textbox">
                            Solve 'true or false problems, e.g. 'If you add 8 to a
                            number ending in 9, you will always get a number ending in
                            7'.
                        </p>
                    </div>
                </div>
                <div className="expected-card">
                    <div className="title">
                        <span>{MarkingLevels.EXPECTED}</span>
                    </div>
                    <div className="description">
                        <p className="description-textbox">
                            Count in steps of 4, 8, 50, 100; Find 10 more or less; Find
                            100 more or less.
                        </p>
                    </div>
                </div>
                <div className="emerging-card">
                    <div className="title">
                        <span>{MarkingLevels.EMERGING}</span>
                    </div>
                    <div className="description">
                        <p className="description-textbox">
                            Count in steps of 10, 50, 100 from 0; use resources to help
                            with multiples of 4 and 8, and different starting points.
                        </p>
                    </div>
                </div>
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


