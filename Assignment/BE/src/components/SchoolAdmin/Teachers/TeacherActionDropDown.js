import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';
import { AssignClass, AssignRole } from "./";

import "../../../assets/stlyes/Modals.css";


const Action = ({ userId, foreName, surName, getData }) => {
    const [assignClass, setAssignClass] = useState(false);
    const [assignRole, setAssignRole] = useState(false);
    const [isUserId, setIsUserId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeleteTeacher = () => {
        MySwal.fire({
            title: constants.Common.Delete,
            text: constants.DeleteTeacherById({ foreName, surName }),
            type: "success",
            showCancelButton: true,
            confirmButtonText: constants.Common.DisableUser,
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
                    {constants.Common.AssignClass}
                </Button>
                <Button
                    onClick={(e) => {
                        setIsUserId(userId);
                        setAssignRole(true);
                    }}
                    className="modal-button"
                >
                    {constants.Common.AssignRole}
                </Button>

                <Dropdown.Divider />
                <Button onClick={DeleteTeacher} className="modal-button-danger">
                    {constants.Common.DisableUser}
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
                    <Modal.Title>{constants.Common.AssignClass}</Modal.Title>
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
                    <Modal.Title>{constants.Common.AssignRole}</Modal.Title>
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

export { Action };
