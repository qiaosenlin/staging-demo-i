import React from "react";
import styles from "../Template/PageTemplate.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Grid, Paper } from "@material-ui/core";
import Chart from "./Chart";
import Balance from "./Balance";
import Purchases from "./Purchases";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 350,
  },
}));

const Dashboard = ({ purchasedStocks }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

 
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial1 --- Rader Chart (still under development, see the link for further information)
                
                <a href="https://qiaosenlin.github.io/playground/"> Rader Chart </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
            tutorial2 --- Pie Chart <a href="./tmp/player.html"> Pie Chart </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial3 --- Regression image <a href="https://github.com/COMP523TEAMI/Online-Peer-Learning-for-Intro-Stats"> Regression image </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial4 --- KNN image <a href="https://github.com/COMP523TEAMI/Online-Peer-Learning-for-Intro-Stats"> KNN image </a>
          </Paper>
        </Grid>
      </Grid>
      <iframe height="400" width="100%" frameborder="no" src="https://petometha.shinyapps.io/Online-Peer-Learning-for-Intro-Stats/"> </iframe>
    </Container>
  );
};
export default Dashboard;
