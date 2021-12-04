import React from "react";
import styles from "../Template/PageTemplate.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Grid, Paper } from "@material-ui/core";
import {Link} from "react-router-dom";


function Tutorial(){
    return (
        <div> <iframe height="400" width="100%" frameborder="no" src="https://petometha.shinyapps.io/Online-Peer-Learning-for-Intro-Stats/"> </iframe>
        </div>
    );
}
export default Tutorial;