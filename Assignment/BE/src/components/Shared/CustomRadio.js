import React from "react";

import '../../assets/stlyes/MarkEditor.css'

import tickmark from '../../assets/images/tickCheckbox.png'

function CustomRadio({i}) {
  return (
    <div className="custom-marking-chips">
      <label class="container">
        <input type="radio" name={`radio-${i}`} />
        <span class="checkmark check-absent"><img src={tickmark} alt=""/></span>
      </label>
      <label class="container">
        <input type="radio" name={`radio-${i}`} />
        <span class="checkmark check-below"><img src={tickmark} alt=""/></span>
      </label>
      <label class="container">
        <input type="radio" name={`radio-${i}`} />
        <span class="checkmark check-emerging"><img src={tickmark} alt=""/></span>
      </label>
      <label class="container">
        <input type="radio" name={`radio-${i}`} />
        <span class="checkmark check-expected"><img src={tickmark} alt=""/></span>
      </label>
      <label class="container">
        <input type="radio" name={`radio-${i}`} />
        <span class="checkmark check-greater"><img src={tickmark} alt=""/></span>
      </label>
    </div>
  );
}

export default CustomRadio;
