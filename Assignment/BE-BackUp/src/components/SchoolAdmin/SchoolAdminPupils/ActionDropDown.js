import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import EditPupilForm from "./EditPupilForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as constants from "../../../helper/constants";
import "../../../assets/stlyes/Modals.css";
import { Common } from "../../../helper/constants";
import * as commonApi from "../../../api/commonApi";

function Action({ pupilId }) {
    const [IsEditPupil, setEditPupil] = useState(false);
    const [IsViewPupil, setIsViewPupil] = useState(false);
    const [isPupilId, setIsPupilId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeletePupil = () => {
        MySwal.fire({
            title: constants.Common.Delete,
            text: constants.DeletePupilById(pupilId),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DeletePupil,
        }).then((result) => {
            if (result.value) {
                conformDeletePupil();
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    };

    const conformDeletePupil = async () => {
        const deleteIndividualPupil = await commonApi.deleteIndividualPupil({
            id: pupilId,
        });
        if (deleteIndividualPupil.status === 200) {
            MySwal.fire({
                icon: "success",
                text: Common.PupilDeletedSuccesfully,
            }).then(() => window.location.reload());
        }
    };

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id="dropdown-variants-Secondary"
                title={constants.Common.Actions}
            >
                <Button
                    type="button"
                    onClick={(e) => {
                        setIsPupilId(pupilId);
                        setEditPupil(true);
                    }}
                    className="modal-button"
                >
                    {constants.Common.EditPupil}
                </Button>
                <Button
                    type="button"
                    onClick={(e) => {
                        setIsViewPupil(true);
                    }}
                    className="modal-button"
                >
                    {constants.Common.ViewProgress}
                </Button>

                <Dropdown.Divider />
                <Button
                    type="button"
                    onClick={DeletePupil}
                    className="modal-button-danger"
                >
                    {constants.Common.RemovePupil}
                </Button>
            </DropdownButton>

            <Modal
                show={IsEditPupil}
                onHide={(e) => {
                    e.preventDefault();
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
