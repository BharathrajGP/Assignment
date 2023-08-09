import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';

const EnableUserAction = ({ userId, foreName, surName, getData }) => {
    const [assignClass, setAssignClass] = useState(false);
    const [assignRole, setAssignRole] = useState(false);
    const [isUserId, setIsUserId] = useState("");
    const MySwal = withReactContent(Swal);


    const EnableTeacher = () => {
        MySwal.fire({
            title: constants.Common.Success,
            text: constants.EnableTeacherById({ foreName, surName }),
            // text: 'Delete Maadla',
            type: "success",
            showCancelButton: true,
            confirmButtonText: 'Enable user',
        }).then((result) => {
            if (result.value) {
                confirmEnableTeacher();
                console.log(userId)
            } else {
                MySwal.fire(constants.Common.NotDeleted);
            }
        });
    };

    const confirmEnableTeacher = async () => {
        const enableTeacher = await commonApi.updateUserActiveStatus({
            // id: '39e3cdb2-febc-4e11-9b9d-ed806049b929',
            id: userId,
            active: true
        });
        console.log(enableTeacher);
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
                <Button onClick={EnableTeacher} className="modal-button-danger">
                    Enable User
                </Button>
            </DropdownButton>
        </>
    )
}

export default EnableUserAction
