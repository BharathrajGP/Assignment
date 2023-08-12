import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import * as constants from "../../../helper/constants";
import * as commonApi from '../../../api/commonApi';

const EnableUserAction = ({ userId, foreName, surName, getData }) => {
    const MySwal = withReactContent(Swal);


    const EnableTeacher = () => {
        MySwal.fire({
            title: constants.Common.EnableUser,
            text: constants.EnableTeacherById({ foreName, surName }),
            type: "success",
            showCancelButton: true,
            confirmButtonText: constants.Common.EnableUser,
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
                    {constants.Common.EnableUser}
                </Button>
            </DropdownButton>
        </>
    )
}

export { EnableUserAction };
