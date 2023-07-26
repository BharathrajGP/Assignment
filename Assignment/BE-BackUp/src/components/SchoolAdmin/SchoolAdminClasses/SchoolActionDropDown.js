import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, DropdownButton, Modal } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as constants from "../../../helper/constants";
import "../../../assets/stlyes/Modals.css";
import { Common } from "../../../helper/constants";
import RenameClassForm from "./RenameClassForm";

function Action({ classId, switchTabs }) {
    const [editClass, setEditClass] = useState(false);
    const [IsViewPupil, setIsViewPupil] = useState(false);
    const [isClassId, setIsClassId] = useState("");

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-variants-Secondary"
                title={"Action"}
                // className="modal-button-action"
            >
                <Button
                    onClick={(e) => {
                        setIsClassId(classId);
                        setEditClass(true);
                    }}
                    className="modal-button"
                >
                    Rename
                </Button>
                <Button
                    onClick={(e) => {
                        // setIsViewPupil(true);
                        switchTabs();
                    }}
                    className="modal-button"
                >
                    {/* <View switchTabs={switchTabs} />
                    onClick={() => switchTabs()} */}
                    <VisibilityIcon />
                    View
                </Button>
            </DropdownButton>

            <Modal
                show={editClass}
                onHide={(e) => {
                    setEditClass(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">Rename Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenameClassForm
                        isClassId={isClassId}
                        setEditClass={setEditClass}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
