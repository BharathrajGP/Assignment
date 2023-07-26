import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../../assets/stlyes/Actions.css";
import AddRole from "./AddRole";
import AssignClass from "./AssignClass";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
        // minWidth: 180,
        // color:
        //   theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        // boxShadow:
        //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                // color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                // backgroundColor: alpha(
                //   theme.palette.primary.main,
                //   theme.palette.action.selectedOpacity,
                // ),
            },
        },
    },
}));

export default function TeacherAction() {
    const MySwal = withReactContent(Swal);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function deleteTeacher() {
        MySwal.fire({
            title: "Success!",
            text: `Do you want to delete the details of Teacher id `,
            type: "success",
            showCancelButton: true,
            confirmButtonText: "Delete Teacher",
        }).then((result) => {
            if (result.value) {
                MySwal.fire({
                    icon: "success",
                    text: "Teacher Deleted Succesfully!",
                });
            } else {
                MySwal.fire("Not Deleted!");
            }
        });
    }

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
                <p style={{ fontSize: "14px" }}>Actions</p>
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
                <MenuItem disableRipple>
                    {/* <AddIcon />
          Add Class */}
                    <AssignClass />
                </MenuItem>
                <MenuItem disableRipple>
                    <AddRole />
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                    onClick={handleClose}
                    disableRipple
                    style={{ color: "red" }}
                >
                    <Button
                        onClick={() => {
                            deleteTeacher();
                        }}
                        style={{ color: "red" }}
                    >
                        <PersonOffIcon />
                        Disable User
                    </Button>
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
