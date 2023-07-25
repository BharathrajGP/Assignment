import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, DropdownButton, Modal } from "react-bootstrap";
import MoveForm from "./MoveForm";
import "../../../../assets/stlyes/Modals.css";

function Action({ classId, switchTabs }) {
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
                        setIsPupilId(classId);
                        setMove(true);
                    }}
                    className="modal-button"
                >
                    Move
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
                    <Modal.Title className="pupil">Rename Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MoveForm isPupilId={isPupilId} setMove={setMove} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
