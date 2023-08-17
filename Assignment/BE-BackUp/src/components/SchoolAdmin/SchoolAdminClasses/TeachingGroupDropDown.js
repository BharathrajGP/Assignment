import React, { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Common } from "../../../helper";
import { RenameClass } from "./";
import * as commonApi from "../../../api/commonApi";
import { styles } from '../'

import "../../../assets/stlyes/Modals.css";
import "bootstrap/dist/css/bootstrap.min.css";


function TeachingAction({ classId, setSwitchTab, SetPupilClassId, getData, classData }) {
    const [editClass, setEditClass] = useState(false);
    const [isClassId, setIsClassId] = useState('');
    const MySwal = withReactContent(Swal);


    const DeleteClass = () => {
        console.log(classId)
        console.log({ isClassId });
        MySwal.fire({
            title: Common.Delete,
            text: Common.deleteClass,
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.deleteClass,
        }).then((result) => {
            if (result.value) {
                confirmDeleteClass();
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    }

    const confirmDeleteClass = async () => {
        console.log(classId)
        const deleteClass = await commonApi.deleteClass({
            id: classId,
        });
        console.log({ deleteClass })
        if (deleteClass.Items.active === false) {
            MySwal.fire({
                icon: "success",
                text: Common.ClassDataDeletedSuccessfully,
            }).then(() => getData());
        }
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
                    className="modal-button d-flex justify-content-start"
                >
                    {Common.RenameClass}
                </Button>
                <Button
                    onClick={(e) => {
                        setSwitchTab(false);
                        SetPupilClassId(classId)
                    }}
                    className="modal-button d-flex justify-content-start"
                >
                    <VisibilityIcon />
                    {Common.View}
                </Button>
                <Dropdown.Divider />
                <Button
                    type="button"
                    onClick={DeleteClass}
                    className="modal-button-danger d-flex justify-content-start"
                >
                    {Common.DeleteClass}
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
                    <Modal.Title>{Common.RenameClass}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenameClass
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

export { TeachingAction };
