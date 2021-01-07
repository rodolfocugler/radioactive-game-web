import {Typography} from "@material-ui/core";
import React from "react";

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © " + new Date().getFullYear()}
        </Typography>
    );
}