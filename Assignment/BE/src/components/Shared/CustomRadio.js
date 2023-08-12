import React, { useState } from "react";

import '../../assets/stlyes/MarkEditor.css'

import tickmark from '../../assets/images/tickCheckbox.png'

const CustomRadio = ({ _markings, i, index, updateMarks, className, image }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='mark-editor-table-td'>
      <label className="container ps-0 pe-1">
        <input type="radio" checked={_markings[index].markings === i + 1} onClick={(e) => { updateMarks(index, i, _markings[index].firstName, _markings[index].lastName, _markings[index].upn) }} />
        <span className={className}><img src={image} alt="" /></span>
      </label>
    </div>
  );
}

export default CustomRadio;
