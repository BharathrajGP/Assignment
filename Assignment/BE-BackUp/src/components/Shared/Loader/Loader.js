import React from "react";
import "./Loader.css";

export default function LoadingSpinner(props) {
    return (
        <div id="overlay">
            <div className="loader">
                <p>{props.message}</p>
            </div>
        </div>
    );
}