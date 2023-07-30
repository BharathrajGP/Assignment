import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import RenameClassForm from "./RenameClass";

import "../../../assets/stlyes/Modals.css";
import "bootstrap/dist/css/bootstrap.min.css";


function TeachingAction({ classId, setSwitchTab, SetPupilClassId, getData, classData }) {
    const [editClass, setEditClass] = useState(false);
    const [isClassId, setIsClassId] = useState("");

    const DeleteClass = () => {

    }

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-variants-Secondary"
                title={"Action"}
            >
                <Button
                    onClick={(e) => {
                        setIsClassId(classId);
                        setEditClass(true);
                    }}
                    className="modal-button"
                >
                    {constants.Common.Rename}
                </Button>
                <Button
                    onClick={(e) => {
                        setSwitchTab(false);
                        SetPupilClassId(classId)

                    }}
                    className="modal-button"
                >
                    <VisibilityIcon />
                    {constants.Common.View}
                </Button>
                <Dropdown.Divider />
                <Button
                    type="button"
                    onClick={DeleteClass}
                    className="modal-button-danger"
                >
                    {constants.Common.DeleteClass}
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
                    <Modal.Title className="pupil">{constants.Common.RenameClass}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenameClassForm
                        isClassId={isClassId}
                        setEditClass={setEditClass}
                        getData={getData}
                        classData={classData}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default TeachingAction;
