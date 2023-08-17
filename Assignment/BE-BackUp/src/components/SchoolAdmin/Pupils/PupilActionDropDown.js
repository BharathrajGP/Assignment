import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common, DeletePupilById } from "../../../helper";
import { EditPupil } from "./";
import * as commonApi from "../../../api/commonApi";

import "../../../assets/stlyes/Modals.css";


const Action = ({ pupilId, getData, foreName, surName }) => {
    const [IsEditPupil, setEditPupil] = useState(false);
    const [IsViewPupil, setIsViewPupil] = useState(false);
    const [isPupilId, setIsPupilId] = useState("");
    const MySwal = withReactContent(Swal);

    const DeletePupil = () => {
        MySwal.fire({
            title: Common.Delete,
            text: DeletePupilById({ foreName, surName }),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DeletePupil,
        }).then((result) => {
            if (result.value) {
                confirmDeletePupil();
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    };

    const confirmDeletePupil = async () => {
        const deletePupil = await commonApi.deletePupil({
            id: pupilId,
        });
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
            <DropdownButton as={ButtonGroup} id="dropdown-variants-Secondary" title={Common.Actions}>
                <Button className="modal-button d-flex justify-content-start" type="button" onClick={(e) => { setIsPupilId(pupilId); setEditPupil(true); }}>
                    {Common.EditPupil}
                </Button>
                <Button className="modal-button d-flex justify-content-start" type="button" onClick={(e) => { setIsViewPupil(true); }}>
                    {Common.ViewProgress}
                </Button>

                <Dropdown.Divider />
                <Button className="modal-button-danger d-flex justify-content-start" type="button" onClick={DeletePupil}>
                    {Common.RemovePupil}
                </Button>
            </DropdownButton>
            <Modal show={IsEditPupil} onHide={(e) => { setEditPupil(false); }} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        {Common.EditPupil}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditPupil isPupilId={isPupilId} setEditPupil={setEditPupil} getData={getData} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export { Action };
