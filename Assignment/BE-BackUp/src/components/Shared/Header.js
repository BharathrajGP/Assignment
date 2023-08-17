import React from "react";
import Grid from "@material-ui/core/Grid";

import "../../App.css";

import MappixLogo from "../../assets/images/HomePageLogo.png";

import { HeaderNavIcons } from "./";

function Header() {
    return (
        <div className="header-bar">
            <Grid container>
                <Grid item xs={6} md={9}>
                    <img
                        src={MappixLogo}
                        alt="Mappix"
                        className="app-bar-logo"
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <HeaderNavIcons />
                </Grid>
            </Grid>
        </div>
    );
}

export { Header };
