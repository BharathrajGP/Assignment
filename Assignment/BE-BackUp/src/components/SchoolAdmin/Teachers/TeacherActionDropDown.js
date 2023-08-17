import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common, DeleteTeacherById } from "../../../helper";
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
            title: Common.Delete,
            text: DeleteTeacherById({ foreName, surName }),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DisableUser,
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
                    className="modal-button d-flex justify-content-start"
                >
                    {Common.AssignClass}
                </Button>
                <Button
                    onClick={(e) => {
                        setIsUserId(userId);
                        setAssignRole(true);
                    }}
                    className="modal-button d-flex justify-content-start"
                >
                    {Common.AssignRole}
                </Button>

                <Dropdown.Divider />
                <Button onClick={DeleteTeacher} className="modal-button-danger d-flex justify-content-start">
                    {Common.DisableUser}
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
                    <Modal.Title>{Common.AssignClass}</Modal.Title>
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
                    <Modal.Title>{Common.AssignRole}</Modal.Title>
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
