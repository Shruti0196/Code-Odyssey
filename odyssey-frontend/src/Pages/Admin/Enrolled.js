import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Grid, Card, CardContent } from "@mui/material";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({

}));
const Enrolled = () => {
  const enrolled=[
    {pn:"lacy green",
    rl:"ayan shah, sanika ardekar",
    code:"123456"},
    {pn:"kim green",
    rl:"ayan shah, sanika ardekar",
    code:"123456"},
    {pn:"hello green",
    rl:"ayan shah, sanika ardekar",
    code:"123456"},
  ]
  const classes = useStyles();
  return (
    <div>
      <HeaderAdmin activePage="Enrolled" />
      <Grid container display="flex" flexDirection="column" direction="column" justify="flex-start" justifyContent="space-evenly" alignItems="flex-start" style={{gap:15}}>
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" style={{gap:45}}>
       {enrolled.map((card,_)=>{
         return(
          <Grid item xs={12} sm={6} md={4} lg={3}>
         <Card variant="outlined" style={{backgroundColor:"#ffeee4"}}>
           <CardContent>
             {card.pn}
           </CardContent>
         </Card>
         </Grid>
         )
       })}
       </Grid>

       <Grid container direction="column" justifyContent="space-evenly" alignItems="center" style={{gap:45}}>
       {enrolled.map((card,_)=>{
         return(
          <Grid item xs={12} sm={6} md={4} lg={3}>
         <Card variant="outlined" style={{backgroundColor:"#888bd2"}}>
           <CardContent>
             {card.rl}
           </CardContent>
         </Card>
         </Grid>
         )
       })}
       </Grid>

       <Grid container direction="column" justifyContent="space-evenly" alignItems="center" style={{gap:45}}>
       {enrolled.map((card,_)=>{
         return(
          <Grid item xs={12} sm={6} md={4} lg={3}>
         <Card variant="outlined" style={{backgroundColor:"#fb3b30"}}>
           <CardContent>
             {card.code}
           </CardContent>
         </Card>
         </Grid>
         )
       })}
       </Grid>
      </Grid>
    </div>
  );
};

export default Enrolled;
