import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as constants from "../../../helper/constants";
import "../../../assets/stlyes/Modals.css";
import { Common } from "../../../helper/constants";
import AssignClassForm from "./AssignClassForm";
import AssignRoleForm from "./AssignRoleForm";

function Action({ userId }) {
    const [assignClass, setAssignClass] = useState(false);
    const [assignRole, setAssignRole] = useState(false);
    const [isUserId, setIsUserId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeleteTeacher = () => {
        MySwal.fire({
            title: Common.Success,
            text: constants.DeleteTeacherById(userId),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DeletePupil,
        }).then((result) => {
            if (result.value) {
                // MySwal.fire({
                //     icon: "success",
                //     text: Common.PupilDeletedSuccesfully,
                // });
                confirmDeleteTeacher();
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    };

    const confirmDeleteTeacher = () => {};

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-variants-Secondary"
                title={"Action"}
            >
                <Button
                    onClick={(e) => {
                        setIsUserId(userId);
                        setAssignClass(true);
                    }}
                    className="modal-button"
                >
                    Assign Class
                </Button>
                <Button
                    onClick={(e) => {
                        setIsUserId(userId);
                        setAssignRole(true);
                    }}
                    className="modal-button"
                >
                    Assign Role
                </Button>

                <Dropdown.Divider />
                <Button onClick={DeleteTeacher} className="modal-button-danger">
                    Disable User
                </Button>
            </DropdownButton>

            {/* Modal For AssignClass */}
            <Modal
                show={assignClass}
                onHide={(e) => {
                    setAssignClass(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">AssignClass</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AssignClassForm
                        isUserId={isUserId}
                        setAssignClass={setAssignClass}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>

            {/* Modal For AssignRole */}
            <Modal
                show={assignRole}
                onHide={(e) => {
                    setAssignRole(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">Assign Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AssignRoleForm
                        isUserId={isUserId}
                        setAssignRole={setAssignRole}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
