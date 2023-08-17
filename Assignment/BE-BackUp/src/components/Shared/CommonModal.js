import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

// import '../../../assets/styles/common.css'

const CommonModal = (props) => {
    const { show, headerTitle, bodyContent, firstButtonText, handleFirstButton, secondButtonText, handleSecondButton, thirdButtonText, handleThirdButton } = props;
    const [location, setLocation] = useState('')
    const [showModal, setShowModal] = useState(show);

    useEffect(() => {
        setShowModal(show);
    }, [show])

    const handleClose = () => {
        setShowModal(false);
        props.close();
    }

    return (
        <Modal show={showModal} onHide={handleClose} dialogClassName={''} >
            <>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {headerTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        {bodyContent}
                    </>
                </Modal.Body>
                <Modal.Footer>
                    {firstButtonText && <Button id="firstButton" className='my-single-project-company-name' onClick={handleFirstButton}>{firstButtonText}</Button>}
                    {secondButtonText && <Button id="secondButton" className='my-single-project-company-name' onClick={handleSecondButton}>{secondButtonText}</Button>}
                    {thirdButtonText && <Button id="thirdButton" className='my-single-project-company-name' onClick={handleThirdButton}>{thirdButtonText}</Button>}
                </Modal.Footer>
            </>
        </Modal>
    );
}

export { CommonModal };