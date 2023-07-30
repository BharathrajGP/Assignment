import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, DropdownButton, Modal } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import RenameClass from "./RenameClass";

import "../../../assets/stlyes/Modals.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Action = ({ classId, setSwitchTab, SetPupilClassId, getData, classData }) => {

    const [editClass, setEditClass] = useState(false);
    const [isClassId, setIsClassId] = useState("");


    return (
        <>
            <DropdownButton as={ButtonGroup} id="dropdown-variants-Secondary" title={"Action"}>
                <Button className="modal-button" onClick={(e) => { setIsClassId(classId); setEditClass(true); }}
                >
                    {constants.Common.Rename}
                </Button>
                <Button className="modal-button" onClick={(e) => { setSwitchTab(false); SetPupilClassId(classId) }}>
                    <VisibilityIcon />
                    {constants.Common.View}
                </Button>
            </DropdownButton>

            <Modal show={editClass} onHide={(e) => { setEditClass(false); }} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="pupil">{constants.Common.RenameClass}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenameClass isClassId={isClassId} setEditClass={setEditClass} getData={getData} classData={classData} />
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default Action;
