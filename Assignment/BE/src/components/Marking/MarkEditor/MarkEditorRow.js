import React, { useState } from 'react'
import CustomRadio from '../../Shared/CustomRadio'

import * as constants from '../../../helper/constants'
import EditComment from './EditComment'
import CommonModal from '../../Shared/CommonModal'

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label>{`${firstName} ${lastName} `}</label>
            <div className='comment-style' onClick={() => handleCommentClick()}>
                <img src={Comments} />
            </div>
            {CheckBox.map((ele, i) => {
                return (
                    <div>
                        <CustomRadio _markings={_markings} index={index} i={i} updateMarks={updateMarks} className={e.className} image={e.image} />
                    </div>
                )
            })}
            {show && <CommonModal show={show} close={closeModalHandler} bodyContent={<EditComment comment={description[0].comment} />} />}
        </div>
    )
}

export default MarkEditorRow