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
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
                tutorial1 --- Rader Chart <a href="https://agithub.com/qiaosenlin/qiaosenlin/blob/main/resume.html"> test!!! </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
            tutorial2 --- Pie Chart <a href="https://agithub.com/qiaosenlin/qiaosenlin/blob/main/resume.html"> test!!! </a>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
