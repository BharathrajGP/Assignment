import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import EditPupilForm from "./EditPupilForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as constants from "../../../helper/constants";
import "../../../assets/stlyes/Modals.css";
import { Common } from "../../../helper/constants";

function Action({ pupilId }) {
    const [IsEditPupil, setEditPupil] = useState(false);
    const [IsViewPupil, setIsViewPupil] = useState(false);
    const [isPupilId, setIsPupilId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeletePupil = () => {
        MySwal.fire({
            title: Common.Success,
            text: constants.DeletePupilById(pupilId),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DeletePupil,
        }).then((result) => {
            if (result.value) {
                // MySwal.fire({
                //     icon: "success",
                //     text: Common.PupilDeletedSuccesfully,
                // });
                conformDeletePupil();
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    };

    const conformDeletePupil = () => {};

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
                        setIsPupilId(pupilId);
                        setEditPupil(true);
                    }}
                    className="modal-button"
                >
                    EditPupil
                </Button>
                <Button
                    onClick={(e) => {
                        setIsViewPupil(true);
                    }}
                    className="modal-button"
                >
                    View Progress
                </Button>

                <Dropdown.Divider />
                <Button onClick={DeletePupil} className="modal-button-danger">
                    Remove Pupil
                </Button>
            </DropdownButton>

            <Modal
                show={IsEditPupil}
                onHide={(e) => {
                    setEditPupil(false);
                }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">
                        {Common.EditPupil}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPupilForm
                        isPupilId={isPupilId}
                        setEditPupil={setEditPupil}
                    />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
