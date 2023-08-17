import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, DropdownButton, Modal } from "react-bootstrap";

import { MoveForm } from "./";
import { Common } from '../../../../helper';

import "../../../../assets/stlyes/Modals.css";


const PupilAction = ({ pupilId, pupilClassID, getData }) => {

    const [move, setMove] = useState(false);
    const [isPupilId, setIsPupilId] = useState("");

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-variants-Secondary"
                title={"Action"}
            >
                <Button
                    onClick={(e) => {
                        setIsPupilId(pupilId);
                        setMove(true);
                    }}
                    className="modal-button d-flex justify-content-start"
                >
                    {Common.Move}
                </Button>
            </DropdownButton>

            <Modal
                show={move}
                onHide={(e) => {
                    setMove(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{Common.MovePupil}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MoveForm isPupilId={isPupilId} setMove={setMove} pupilClassID={pupilClassID} getData={getData} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export { PupilAction };
