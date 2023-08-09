import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';
import AssignClass from "./AssignClass";
import AssignRole from "./AssignRole";

import "../../../assets/stlyes/Modals.css";


const Action = ({ userId, foreName, surName, getData }) => {
    const [assignClass, setAssignClass] = useState(false);
    const [assignRole, setAssignRole] = useState(false);
    const [isUserId, setIsUserId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeleteTeacher = () => {
        MySwal.fire({
            title: constants.Common.Success,
            text: constants.DeleteTeacherById({ foreName, surName }),
            // text: 'Delete Maadla',
            type: "success",
            showCancelButton: true,
            confirmButtonText: 'Delete user',
        }).then((result) => {
            if (result.value) {
                // MySwal.fire({
                //     icon: "success",
                //     text: constants.Common.PupilDeletedSuccesfully,
                // });
                confirmDeleteTeacher();
            } else {
                MySwal.fire(constants.Common.NotDeleted);
            }
        });
    };

    const confirmDeleteTeacher = async () => {
        const deleteTeacher = await commonApi.updateUserActiveStatus({
            id: userId,
            active: false
        });
        console.log(deleteTeacher);
        // if (deletePupil.status === 200) {
        //     MySwal.fire({
        //         icon: "success",
        //         text: Common.PupilDeletedSuccesfully,
        //     }).then(() => getData());
        // }
        getData();
    };

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
                    <AssignClass
                        isUserId={isUserId}
                        setAssignClass={setAssignClass}
                        getData={getData}
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
                    <AssignRole
                        isUserId={isUserId}
                        setAssignRole={setAssignRole}
                        getData={getData}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
