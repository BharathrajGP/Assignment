import React, { useState } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import CustomRadio from '../../Shared/CustomRadio'
import CommonModal from '../../Shared/CommonModal'
import { EditComment } from './'

import "../../../assets/stlyes/marking.css";

import Comments from '../../../assets/images/Comments.svg'

const MarkEditorRow = ({ firstName, lastName, description, index, upn, _markings, CheckBox, updateMarks }) => {
    const [show, setShow] = useState(false);
    const [yes, setYes] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const closeModalHandler = () => {
        handleClose();
        setYes(false);
    };

    const handleCommentClick = () => {
        setYes(true);
        handleShow();
    }

    return (
        <tr className='tr-border-bottom'>
            <td style={{width: '150px', paddingLeft: '10px'}}>{`${firstName} ${lastName} `}</td>
            <td style={{width: '150px'}}>
                {description[0]?.comment !== undefined ?
                    <img data-tooltip-id='commentTip' className='tooltips-icon' src={Comments} alt='InformationToolTip' onClick={() => handleCommentClick()} /> :
                    <img data-tooltip-id='commentTip' className='tooltips-icon' src={Comments} alt='InformationToolTip' />
                }

                <ReactTooltip id="commentTip" place="top" effect="solid" className='tooltip-style'>
                    {description[0]?.comment}
                </ReactTooltip>
            </td>
            {CheckBox.map((ele, i) => {
                return (
                    <td style={{width: '50px'}}>
                        <CustomRadio _markings={_markings} index={index} i={i} updateMarks={updateMarks} className={ele.className} image={ele.image} />
                    </td>
                )
            })}
            {show && <CommonModal show={show} close={closeModalHandler} bodyContent={<EditComment comment={description[0].comment} />} />}
        </tr>
    )
}

export { MarkEditorRow }