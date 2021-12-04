import React from "react";
import styles from "../Template/PageTemplate.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Grid, Paper } from "@material-ui/core";
import {Link} from "react-router-dom";


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
  // const onNewPageButtonClick = (e) => {
  //   e.preventDefault();
  //   setCurrentPage("tutorial1");
  // };
 
  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial1 --- Normal Distribution 
                
                <a href="https://qiaosenlin.github.io/playground/"target="_blank"> <img src = "https://analystprep.com/cfa-level-1-exam/wp-content/uploads/2019/10/page-123.jpg" width="450" 
     height="280"></img> </a> 
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
            tutorial2 --- Pepsi Challenge Simulation 
            
            <a href="https://petometha.shinyapps.io/Online-Peer-Learning-for-Intro-Stats" target="_blank"> <img src = "https://i1.wp.com/pepsistore.com/wp-content/uploads/2020/04/pepsi1.gif?fit=761%2C473&ssl=1" width="450" 
     height="280"></img> </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial3 --- Regression image 
                <a href="https://github.com/qiaosenlin/staging-demo-i" target="_blank"> <img src = "https://miro.medium.com/max/1400/1*KwdVLH5e_P9h8hEzeIPnTg.png" width="450" 
     height="280"></img> </a>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
        <Paper className={fixedHeightPaper}>
                tutorial4 --- KNN image 
                <a href="https://github.com/qiaosenlin/staging-demo-i" target="_blank"> <img src = "https://cdn.analyticsvidhya.com/wp-content/uploads/2018/03/knn3.png" width="450" 
     height="280"></img> </a>
          </Paper>
        </Grid>
      </Grid>
      
    </Container>
  );
};
export default Dashboard;
