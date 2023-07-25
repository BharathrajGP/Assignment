import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BlockIcon from "@mui/icons-material/Block";
import "../../../assets/stlyes/Actions.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditPupil from "./EditPupil";
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Common } from "../../../helper/constants";
import { DeletePupilById } from "../../../helper/constants";
import * as commonApi from "../../../api/commonApi";
import { SessionStorage } from "../../../util/SessionStorage";
import { SessionStorageKeys } from "../../../helper/constants";
import { isEmptyObject } from "../../../util/utils";
import { Link } from "react-router-dom";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export default function PupilAction({ pupilId }) {
    const MySwal = withReactContent(Swal);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const deletePupil = (pupilId) => {
        MySwal.fire({
            title: Common.Success,
            text: DeletePupilById(pupilId),
            type: "success",
            showCancelButton: true,
            confirmButtonText: Common.DeletePupil,
        }).then((result) => {
            if (result.value) {
                console.log(result);
                idToDeletePupildata(pupilId);
                console.log(pupilId);
                MySwal.fire({
                    icon: "success",
                    text: Common.PupilDeletedSuccesfully,
                });
            } else {
                MySwal.fire(Common.NotDeleted);
            }
        });
    };
    async function idToDeletePupildata(pupilId) {
        var email = SessionStorage.getItem(SessionStorageKeys.Email);

        var token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
        console.log(token);
        const deleteIndividualPupil = await commonApi.deleteIndividualPupil({
            id: pupilId,
            active: "yes",
        });
        console.log(email);
        console.log(deleteIndividualPupil);
        if (!isEmptyObject(deleteIndividualPupil)) {
            // const teachersData = getIndividualPupil.data.Items;
            // const arrayData = [];
            // teachersData.map((entry, index) => {
            //     console.log("entry", entry);
            //     entry.map((item) => {
            //         console.log("iitem", item);
            //         arrayData.push(item);
            //     });
            // });
            console.log(deleteIndividualPupil);
        } else {
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        console.log("pupilId------------------------", pupilId);
    }, []);

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                style={{
                    width: "70px",
                    background: "lightgrey",
                    border: "1px solid black",
                    color: "black",
                    height: "25px",
                    marginLeft: "10px",
                }}
            >
                <p style={{ fontSize: "14px", marginTop: "None" }}>Actions</p>
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    // onClick={handleClose}
                    disableRipple
                >
                    <EditPupil pupilId={pupilId} />
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                    <TrendingUpIcon />
                    View Progress
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                    {/* <BlockIcon />
          Remove Pupil */}
                    {/* <DeletePupil pupilId={pupilId} /> */}
                    <Button
                        onClick={() => {
                            deletePupil(pupilId);
                        }}
                        style={{ color: "red" }}
                    >
                        <BlockIcon />
                        {Common.RemovePupil}
                    </Button>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
