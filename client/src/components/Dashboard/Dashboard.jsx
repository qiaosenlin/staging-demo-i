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
                tutorial1 --- Rader Chart 
                <NewlineText />
                We have built a example tutorial with our client about rader chart. 
                <NewlineText />

                It was running on the docker container and we failed to deploy it to the web.
                <NewlineText />

                Will be back in a few weeks.
                <NewlineText />

                The following link is a temporary presentation to what we suppose to have.
                <NewlineText />

                <a href="https://github.com/COMP523TEAMI/Online-Peer-Learning-for-Intro-Stats"> Rader Chart </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
            tutorial2 --- Pie Chart <a href="https://github.com/COMP523TEAMI/Online-Peer-Learning-for-Intro-Stats"> Pie Chart </a>
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
    </Container>
  );
};
export default Dashboard;
