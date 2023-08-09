import React, { useState } from "react";

import '../../assets/stlyes/MarkEditor.css'

import tickmark from '../../assets/images/tickCheckbox.png'

const CustomRadio = ({ _markings, i, index, updateMarks, className, image }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="custom-marking-chips">
      <label className="container">
        <input type="radio" checked={_markings[index] === i + 1} onClick={(e) => { updateMarks(index, i) }} />
        <span className={className}><img src={image} alt="" /></span>
      </label>
    </div>
  );
}

export default CustomRadio;
